import React from "react";

import { Text } from "../../text/text";

interface Props {
  children: React.ReactNode;
}

export const H2 = ({ children }: Props) => <Text variant="h2">{children}</Text>;
