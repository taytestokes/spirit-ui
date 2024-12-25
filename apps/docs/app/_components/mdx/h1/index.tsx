import React from "react";

import { Text } from "@spirit-ui/design-system";

interface Props {
  children: React.ReactNode;
}

export const H1 = ({ children }: Props) => (
  <Text as="h1" variant="h1">
    {children}
  </Text>
);
