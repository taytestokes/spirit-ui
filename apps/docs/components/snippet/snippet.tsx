import React from "react";

import { Box } from "@spirit-ui/design-system/components";

import * as classes from "./styles.css";

interface Props {
  children: React.ReactNode;
}

export const Snippet = ({ children }: Props) => {
  return (
    <Box
      alignItems="center"
      borderColor="neutral300"
      borderRadius="medium"
      borderStyle="solid"
      borderWidth="small"
      display="flex"
      fontSize="xsmall"
      marginBottom="x6"
      marginTop="x6"
      padding="x4"
    >
      <pre className={classes.pre}>{children}</pre>
    </Box>
  );
};
