import React from "react";

import { Box } from "../box/box";

import * as styles from "./text.css";

interface TextProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label" | "p" | "span";
  children: React.ReactNode;
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
  variant = "paragraph",
  ...rest
}: TextProps) => (
  <Box as={as} className={styles.variants({ variant })} {...rest}>
    {children}
  </Box>
);
