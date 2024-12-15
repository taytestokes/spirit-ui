import React from "react";

import { Text } from "../../text/text";

interface Props {
  children: React.ReactNode;
}

export const H2 = ({ children }: Props) => (
  <Text as="h2" variant="h2">
    {children}
  </Text>
);
