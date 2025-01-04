import React from "react";

import { Heading } from "@spirit-ui/design-system/server";

interface Props {
  children: React.ReactNode;
}

export const H4 = ({ children }: Props) => (
  <Heading as="h4" variant="h4">
    {children}
  </Heading>
);
