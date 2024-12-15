import React from "react";

import { Text } from "../../text/text";

interface Props {
  children: React.ReactNode;
}

export const H3 = ({ children }: Props) => (
  <Text as="h3" variant="h3">
    {children}
  </Text>
);
