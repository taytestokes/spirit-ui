import React from "react";

import { Heading } from "@spirit-ui/design-system/server";

interface Props {
  children: React.ReactNode;
}

export const H2 = ({ children }: Props) => (
  <Heading as="h2" variant="h2">
    {children}
  </Heading>
);
