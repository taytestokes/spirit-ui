import React, { HtmlHTMLAttributes } from "react";
import { clsx } from "clsx";
import { useMDXComponent } from "next-contentlayer2/hooks";

import { Heading, Text } from "@spirit-ui/design-system/server";

import { ColorPalette } from "../color-palette/color-palette";
import { SpacingTable } from "../spacing-table/spacing-table";
import { CodePreview } from "../code-preview/code-preview";
import { Snippet } from "../snippet";
import { CodeBlock } from "../code-block";

import * as classes from "./mdx.css";

const components = {
  h1: ({ ...props }) => <h1 className={classes.h1} {...props} />,
  h2: ({ ...props }) => <h2 className={classes.h2} {...props} />,
  h3: ({ ...props }) => <h3 className={classes.h3} {...props} />,
  h4: ({ ...props }) => <h4 className={classes.h4} {...props} />,
  h5: ({ ...props }) => <h5 className={classes.h5} {...props} />,
  h6: ({ ...props }) => <h6 className={classes.h6} {...props} />,
  // a: () => {},
  p: ({ ...props }) => <p className={classes.p} {...props} />,
  pre: ({ className, ...props }: HtmlHTMLAttributes<HTMLElement>) => (
    <pre className={clsx(classes.pre, className)} {...props} />
  ),
  code: ({ className, ...props }: HtmlHTMLAttributes<HTMLElement>) => (
    <code className={clsx(classes.code, className)} {...props} />
  ),
  // blockquote: () => {},
  // img: () => {},
  ColorPalette,
  SpacingTable,
  Heading,
  Text,
  CodePreview,
  Snippet,
  CodeBlock,
};

export const MDX = ({ code }: { code: string }) => {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
};
