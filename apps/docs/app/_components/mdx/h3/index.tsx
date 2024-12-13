import React from "react";

import { Text } from "../../text/text";

interface Props {
  children: React.ReactNode;
}

export const H3 = ({ children }: Props) => <Text variant="h3">{children}</Text>;
