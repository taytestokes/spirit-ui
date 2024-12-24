import React from "react";

import { Text } from "@spirit-ui/react";

interface Props {
  children: React.ReactNode;
}

export const H4 = ({ children }: Props) => (
  <Text as="h4" variant="h4">
    {children}
  </Text>
);
