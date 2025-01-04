import React from "react";
import { clsx } from "clsx";

import { Box, BoxProps } from "../box";

import { textStyles, Variants } from "./text.css";

type Props = {
  as?: "label" | "p" | "span";
  children: React.ReactNode;
  className?: string;
  color: BoxProps["color"];
} & Variants;

export const Text: React.FC<Props> = ({
  as = "p",
  children,
  className,
  color,
  variant = "p",
  ...rest
}: Props) => (
  <Box
    as={as}
    className={clsx(textStyles({ variant }), className)}
    color={color}
    {...rest}
  >
    {children}
  </Box>
);
