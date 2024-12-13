import React from "react";

import { Text } from "../../text/text";

interface Props {
  children: React.ReactNode;
}

export const H4 = ({ children }: Props) => <Text variant="h4">{children}</Text>;
