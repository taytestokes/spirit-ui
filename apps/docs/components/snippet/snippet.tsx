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
      backgroundColor="neutral50"
      borderColor="neutral200"
      borderRadius="medium"
      borderStyle="solid"
      color="neutral900"
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
