import React from "react";
import clsx from "clsx";

import { Box, BoxProps } from "../box";

type StackProps = {
  children: React.ReactNode;
  className?: string;
  direction?: "column" | "row";
  gap?: BoxProps["gap"];
};

export const Stack = ({
  children,
  className,
  direction = "column",
  gap = "x2",
}: StackProps) => {
  return (
    <Box
      className={clsx(className)}
      display="flex"
      flexDirection={direction}
      gap={gap}
    >
      {children}
    </Box>
  );
};
