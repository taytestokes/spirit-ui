import React, { HtmlHTMLAttributes } from "react";
import { clsx } from "clsx";
import { useMDXComponent } from "next-contentlayer2/hooks";

import { Heading, Text } from "@spirit-ui/design-system/server";

import { ColorPalette } from "../color-palette";
import { CodePreview } from "../code-preview";
import { Snippet } from "../snippet";
import { ComponentPreview } from "../component-preview";

import * as classes from "./mdx.css";

const components = {
  h1: ({ ...props }) => <h1 className={classes.h1} {...props} />,
  h2: ({ ...props }) => <h2 className={classes.h2} {...props} />,
  h3: ({ ...props }) => <h3 className={classes.h3} {...props} />,
  h4: ({ ...props }) => <h4 className={classes.h4} {...props} />,
  h5: ({ ...props }) => <h5 className={classes.h5} {...props} />,
  h6: ({ ...props }) => <h6 className={classes.h6} {...props} />,
  a: ({ ...props }) => <a className={classes.a} {...props} />,
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
  Heading,
  Text,
  CodePreview,
  Snippet,
  ComponentPreview,
};

export const MDX = ({ code }: { code: string }) => {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
};
