import React from "react";
import { clsx } from "clsx";

import { Box } from "../box";

import { styles, Variants } from "./text.css";

type Props = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label" | "p" | "span";
  children: React.ReactNode;
  className?: string;
} & Variants;

export const Text: React.FC<Props> = ({
  as = "p",
  children,
  className,
  color,
  variant = "paragraph",
  ...rest
}: Props) => (
  <Box
    as={as}
    className={clsx(styles({ variant, color }), className)}
    {...rest}
  >
    {children}
  </Box>
);
