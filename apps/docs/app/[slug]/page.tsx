import { compileMDX } from "next-mdx-remote/rsc";

import { getDocumentationBySlug } from "../_utils/mdx";

import MDXDefaultComponents from "../_components/mdx";
import { ColorPalette } from "../_components/color-palette/color-palette";
import { SpacingTable } from "../_components/spacing-table/spacing-table";
import { TypeScale } from "../_components/type-scale/type-scale";
import { Text } from "../_components/text/text";
import { CodePreview } from "../_components/code-preview/code-preview";

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
      ColorPalette,
      SpacingTable,
      TypeScale,
      Text,
      CodePreview,
    },
  });

  return <article className={styles.article}>{content}</article>;
};

export default DocumentationPage;
