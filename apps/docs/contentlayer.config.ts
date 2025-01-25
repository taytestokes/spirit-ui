import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import { vars } from "@spirit-ui/design-system/theme";

import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";

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
      [
        rehypePrettyCode,
        {
          theme: {
            tokenColors: [
              {
                settings: {
                  foreground: vars.colors.neutral900,
                  background: vars.colors.neutral50,
                },
              },
            ],
          },
        },
      ],
    ],
  },
});
