import React, { forwardRef } from "react";
import clsx from "clsx";

import { Box, BoxProps } from "../box";

import * as styles from "./styles.css";

type HeadingProps = {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
  color?: BoxProps["color"];
} & styles.HeadingVariants;

export const Heading = forwardRef(
  (
    { as, children, className, color, variant = "h2", ...rest }: HeadingProps,
    ref: React.Ref<HTMLElement>
  ) => (
    <Box
      as={as}
      className={clsx(styles.heading({ variant }), className)}
      color={color}
      ref={ref}
      {...rest}
    >
      {children}
    </Box>
  )
);
