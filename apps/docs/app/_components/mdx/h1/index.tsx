import React from "react";

import { Text } from "../../text/text";

interface Props {
  children: React.ReactNode;
}

export const H1 = ({ children }: Props) => <Text variant="h1">{children}</Text>;
