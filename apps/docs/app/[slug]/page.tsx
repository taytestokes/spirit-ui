import { compileMDX } from "next-mdx-remote/rsc";
import { MDXComponents } from "mdx/types";

import { Text } from "@spirit-ui/design-system";

import { getDocumentationBySlug } from "../_utils/mdx";

import MDXDefaultComponents from "../_components/mdx";
import { ColorPalette } from "../_components/color-palette/color-palette";
import { SpacingTable } from "../_components/spacing-table/spacing-table";
import { TypeScale } from "../_components/type-scale/type-scale";
import { CodePreview } from "../_components/code-preview/code-preview";

import * as styles from "./page.css";

type Params = Promise<{ slug: string }>;

const components = {
  ...MDXDefaultComponents,
  ColorPalette,
  SpacingTable,
  TypeScale,
  Text,
  CodePreview,
} as MDXComponents;

const DocumentationPage = async (props: { params: Params }) => {
  const pageParams = await props.params;
  const slug = pageParams.slug;

  const documentation = await getDocumentationBySlug(slug);

  const { content } = await compileMDX({
    source: documentation,
    components,
  });

  return <article className={styles.article}>{content}</article>;
};

export default DocumentationPage;
