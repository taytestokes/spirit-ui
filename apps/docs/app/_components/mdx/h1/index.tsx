import React from "react";

import { Heading } from "@spirit-ui/design-system/server";

interface Props {
  children: React.ReactNode;
}

export const H1 = ({ children }: Props) => (
  <Heading as="h1" variant="h1">
    {children}
  </Heading>
);
