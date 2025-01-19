import React, { HtmlHTMLAttributes } from "react";
import { clsx } from "clsx";

import { Heading, Text } from "@spirit-ui/design-system/server";

import { ColorPalette } from "../color-palette/color-palette";
import { SpacingTable } from "../spacing-table/spacing-table";
import { CodePreview } from "../code-preview/code-preview";
import { Snippet } from "../snippet";
import { CodeBlock } from "../code-block";

import * as classes from "./mdx-components.css";

export const components = {
  h1: ({ ...props }) => <h1 className={classes.h1} {...props} />,
  h2: ({ ...props }) => <h2 className={classes.h2} {...props} />,
  h3: ({ ...props }) => <h3 className={classes.h3} {...props} />,
  h4: ({ ...props }) => <h4 className={classes.h4} {...props} />,
  h5: ({ ...props }) => <h5 className={classes.h5} {...props} />,
  h6: ({ ...props }) => <h6 className={classes.h6} {...props} />,
  // a: () => {},
  p: ({ ...props }) => <p className={classes.p} {...props} />,
  pre: ({ ...props }) => <pre className={classes.pre} {...props} />,
  code: ({ className, ...props }: HtmlHTMLAttributes<HTMLElement>) => (
    <code className={clsx(className, classes.code)} {...props} />
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
