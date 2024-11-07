import { compileMDX } from "next-mdx-remote/rsc";

import { getDocumentationBySlug } from "../_utils/mdx";

const DocumentationPage = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const documentation = await getDocumentationBySlug(slug);

  const { content, frontmatter } = await compileMDX({
    source: documentation,
    options: {
      parseFrontmatter: true,
    },
  });

  console.log({ content, frontmatter });

  return <article>{content}</article>;
};

export default DocumentationPage;
