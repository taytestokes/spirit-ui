import { compileMDX } from "next-mdx-remote/rsc";

import { getDocumentationBySlug } from "../_utils/mdx";

import MDXDefaultComponents from "../_components/mdx";
import { ColorPalette } from "../_components/color-palette/color-palette";
import { Snippet } from "../_components/snippet/snippet";

import * as styles from "./page.css";

const DocumentationPage = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const documentation = await getDocumentationBySlug(slug);

  const { content } = await compileMDX({
    source: documentation,
    components: {
      ...MDXDefaultComponents,
      ColorPalette,
      Snippet,
    },
  });

  return <article className={styles.article}>{content}</article>;
};

export default DocumentationPage;
