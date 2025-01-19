import { defineDocumentType, makeSource } from "contentlayer2/source-files";

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: "docs/**/*.mdx",
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => {
        console.log(doc._raw.flattenedPath.split("/").slice(1).join("/"));
        return `/${doc._raw.flattenedPath.split("/").slice(1).join("/")}`;
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Doc],
});
