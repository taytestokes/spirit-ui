import { notFound } from "next/navigation";
import { allDocs } from "contentlayer/generated";

import { compileMDX } from "next-mdx-remote/rsc";

import { getDocumentationBySlug } from "../_utils/mdx";

import { components } from "../_components/mdx-components/mdx-components";

import * as classes from "./page.css";

type Params = Promise<{ slug: string }>;

const DocumentationPage = async (props: { params: Params }) => {
  const pageParams = await props.params;

  const doc = allDocs.find((doc) => doc.slug === `/${pageParams.slug}`);

  if (!doc) {
    return notFound();
  }

  const { content } = await compileMDX({
    source: doc.body.raw,
    components,
  });

  return (
    <div className={classes.content}>
      <article>{content}</article>
    </div>
  );
};

export default DocumentationPage;
