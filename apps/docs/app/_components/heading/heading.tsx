import React from "react";

import { Box } from "../box/box";

import * as styles from "./heading.css";

const defaults = {
  h1: 1,
  h2: 2,
  h3: 3,
  h4: 4,
  h5: 5,
  h6: 6,
} as const;

interface Props {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

// @TODO: Rethink how to handle default level styling?
export const Heading = ({ as = "h1", children, level, ...rest }: Props) => {
  const resolvedLevel = level ?? defaults[as];

  return (
    <Box
      as={as}
      className={styles.variants({ level: resolvedLevel })}
      {...rest}
    >
      {children}
    </Box>
  );
};
