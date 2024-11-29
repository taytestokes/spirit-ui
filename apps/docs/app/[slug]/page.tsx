import { compileMDX } from "next-mdx-remote/rsc";

import { getDocumentationBySlug } from "../_utils/mdx";

import MDXDefaultComponents from "../_components/mdx";
import { ColorPalette } from "../_components/color-palette/color-palette";
import { SpacingPalette } from "../_components/spacing-palette/spacing-palette";

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
      SpacingPalette,
    },
  });

  return <article className={styles.article}>{content}</article>;
};

export default DocumentationPage;
