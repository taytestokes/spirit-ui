import { UnistTree, UnistNode } from "types/unist";

import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import { vars } from "@spirit-ui/design-system/theme";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";

import fs from "fs";
import { visit } from "unist-util-visit";
import { u } from "unist-builder";

import { componentExamples } from "./config/component-examples";

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: "docs/**/*.mdx",
  contentType: "mdx",
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) =>
        `/${doc._raw.flattenedPath.split("/").slice(1).join("/")}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      /**
       * This plugin will generate the code block for the ComponentPreview
       * component when rendered inside a content layer markdown file.
       */
      () => (tree: UnistTree) => {
        visit(tree, (node: UnistNode) => {
          if (node.name === "ComponentPreview") {
            const componentName = node.attributes?.find(
              (attr) => attr.name === "name"
            )?.value as string;

            if (!componentName) return;

            try {
              const exampleComponent = componentExamples[componentName];

              const exampleCode = fs.readFileSync(
                exampleComponent.filePath,
                "utf8"
              );

              node.children?.push(
                u("element", {
                  tagName: "pre",
                  properties: {
                    "data-component-preview": "",
                  },
                  children: [
                    u("element", {
                      tagName: "code",
                      properties: {
                        className: ["language-tsx"],
                      },
                      children: [
                        {
                          type: "text",
                          value: exampleCode,
                        },
                      ],
                    }),
                  ],
                })
              );
            } catch (error) {
              console.error(error);
            }
          }
        });
      },
      [
        rehypePrettyCode,
        {
          keepBackground: false,
          theme: {
            tokenColors: [
              {
                settings: {
                  foreground: vars.colors.neutral950,
                },
              },
            ],
          },
        },
      ],
      /**
       * Update the code block figures generated from rehypePrettyCode
       * for the ComponentPreview component.
       */
      () => (tree: UnistTree) => {
        visit(tree, (node: UnistNode) => {
          if (node?.type === "element" && node?.tagName === "figure") {
            if (node.properties) {
              if (!("data-component-preview" in node.properties)) return;

              delete node.properties["data-rehype-pretty-code-figure"];

              node.properties["data-component-preview-code"] = "";
            }
          }
        });
      },
    ],
  },
});
