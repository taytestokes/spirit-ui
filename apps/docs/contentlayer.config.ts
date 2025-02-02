import { UnistTree, UnistNode } from "types/unist";

import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import { vars } from "@spirit-ui/design-system/theme";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";

import fs from "fs";
import { visit } from "unist-util-visit";
import { u } from "unist-builder";

import { previews } from "./config/previews";

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: "docs/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    subtitle: { type: "string", required: true },
  },
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
            const name = node.attributes?.find((attr) => attr.name === "name")
              ?.value as string;

            if (!name) return;

            try {
              const component = previews[name];
              const code = fs.readFileSync(component.file, "utf8");

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
                      data: {
                        meta: "showLineNumbers",
                      },
                      children: [
                        {
                          type: "text",
                          value: code,
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
                  foreground: vars.colors.neutral900,
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
