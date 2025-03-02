import { notFound } from "next/navigation";
import { allDocs } from "contentlayer/generated";

import { Heading, Text } from "@spirit-ui/design-system/components";

import { MDX } from "@/components/mdx";
import { Sidebar } from "@/components/sidebar/sidebar";

import * as classes from "./page.css";

type Params = Promise<{ slug: string }>;

const DocumentationPage = async (props: { params: Params }) => {
  const { slug } = await props.params;

  const doc = allDocs.find((doc) => doc.slug === `/${slug}`);

  if (!doc) {
    return notFound();
  }

  return (
    <div className={classes.page}>
      <Sidebar />
      <div className={classes.content}>
        <div className={classes.titleContainer}>
          <Heading as="h1" variant="h1">
            {doc.title}
          </Heading>
          <Text color="neutral900">{doc.subtitle}</Text>
        </div>
        <article>
          <MDX code={doc.body.code} />
        </article>
      </div>
    </div>
  );
};

export default DocumentationPage;
