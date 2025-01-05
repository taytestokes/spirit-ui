import React from "react";
import { clsx } from "clsx";

import { Box, BoxProps } from "../box";

import * as styles from "./styles.css";

type Props = {
  as?: "label" | "p" | "span";
  children: React.ReactNode;
  className?: string;
  color?: BoxProps["color"];
  weight?: BoxProps["fontWeight"];
} & styles.Variants;

export const Text: React.FC<Props> = ({
  as = "p",
  children,
  className,
  color,
  variant,
  weight,
  ...rest
}: Props) => (
  <Box
    as={as}
    className={clsx(styles.text({ variant }), className)}
    color={color}
    fontWeight={weight}
    {...rest}
  >
    {children}
  </Box>
);
