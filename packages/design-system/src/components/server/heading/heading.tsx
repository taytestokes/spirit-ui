import React from "react";
import clsx from "clsx";

import { Box, BoxProps } from "../box";

import { HeadingRecipeVariants, headingStyles } from "./heading.css";

type Props = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
  color?: BoxProps["color"];
  weight?: BoxProps["fontWeight"];
} & HeadingRecipeVariants;

export const Heading = ({
  as = "h1",
  children,
  className,
  color = "neutral_950",
  variant = "h1",
  weight = "semibold",
  ...rest
}: Props) => {
  return (
    <Box
      as={as}
      className={clsx(headingStyles({ variant }), className)}
      color={color}
      fontWeight={weight}
      {...rest}
    >
      {children}
    </Box>
  );
};
