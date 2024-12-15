import React from "react";
import { clsx } from "clsx";

import { Box } from "../box/box";

import * as styles from "./text.css";

interface TextProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label" | "p" | "span";
  children: React.ReactNode;
  className?: string;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "paragraph"
    | "paragraph-sm";
}

export const Text = ({
  as = "p",
  children,
  className,
  variant = "paragraph",
  ...rest
}: TextProps) => (
  <Box
    as={as}
    className={clsx(styles.variants({ variant }), className)}
    {...rest}
  >
    {children}
  </Box>
);
