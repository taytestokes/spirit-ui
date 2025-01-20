import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import { theme } from "@spirit-ui/design-system/theme";

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
          // TODO: Build Spirit UI Code Theme
          theme: {
            tokenColors: [
              {
                settings: {
                  foreground: theme.vars.colors.neutral_950,
                  background: theme.vars.colors.neutral_50,
                },
              },
            ],
          },
        },
      ],
    ],
  },
});
