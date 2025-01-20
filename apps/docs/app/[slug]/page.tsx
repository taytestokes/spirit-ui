import { notFound } from "next/navigation";
import { allDocs } from "contentlayer/generated";

import { MDX } from "@/components/mdx";
import { DocPager } from "@/components/doc-pager";

import "../../styles/mdx.css";
import * as classes from "./page.css";

type Params = Promise<{ slug: string }>;

const DocumentationPage = async (props: { params: Params }) => {
  const { slug } = await props.params;

  const doc = allDocs.find((doc) => doc.slug === `/${slug}`);

  if (!doc) {
    return notFound();
  }

  return (
    <div className={classes.content}>
      <article>
        <MDX code={doc.body.code} />
      </article>
      <DocPager doc={doc} />
    </div>
  );
};

export default DocumentationPage;
