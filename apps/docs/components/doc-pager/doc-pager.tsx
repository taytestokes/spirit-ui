import React from "react";
import Link from "next/link";
import { clsx } from "clsx";

import { Doc } from "contentlayer/generated";

import { Text } from "@spirit-ui/design-system/server";

import { sitemap } from "@/config/sitemap";

import * as classes from "./doc-pager.css";

export const DocPager = ({ doc }: { doc: Doc }) => {
  const docLinks = sitemap.sidebar.reduce(
    (links, { items }) => links.concat(items),
    []
  );
  const activeIndex = docLinks.findIndex(
    (docLink) => doc?.slug === docLink?.href
  );
  const prev = activeIndex !== 0 ? docLinks[activeIndex - 1] : null;
  const next =
    activeIndex !== docLinks.length - 1 ? docLinks[activeIndex + 1] : null;

  return (
    <div className={classes.docPager}>
      {prev && (
        <Link className={classes.link} href={prev.href}>
          <Text color="neutral900" variant="extraSmall">
            Previous
          </Text>
          <Text>{prev.title}</Text>
        </Link>
      )}
      {next && (
        <Link className={clsx(classes.link, classes.next)} href={next.href}>
          <Text color="neutral900" variant="extraSmall">
            Next
          </Text>
          <Text>{next.title}</Text>
        </Link>
      )}
    </div>
  );
};
