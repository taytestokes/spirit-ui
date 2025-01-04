import React from "react";

import { Heading } from "@spirit-ui/design-system/server";

interface Props {
  children: React.ReactNode;
}

export const H3 = ({ children }: Props) => (
  <Heading as="h3" variant="h3">
    {children}
  </Heading>
);
