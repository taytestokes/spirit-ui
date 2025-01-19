import React from "react";

import { Box } from "@spirit-ui/design-system/server";

import * as classes from "./styles.css";

interface Props {
  children: React.ReactNode;
}

export const Snippet = ({ children }: Props) => {
  return (
    <Box
      alignItems="center"
      backgroundColor="neutral_100"
      borderRadius="base"
      display="flex"
      padding="spacing_2"
    >
      <pre className={classes.pre}>{children}</pre>
    </Box>
  );
};
