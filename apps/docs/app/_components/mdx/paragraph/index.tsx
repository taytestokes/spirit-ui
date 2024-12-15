import React from "react";

import { Text } from "../../text/text";

import * as styles from "./paragraph.css";

interface Props {
  children: React.ReactNode;
}

export const Paragraph = ({ children }: Props) => (
  <Text className={styles.paragraph}>{children}</Text>
);
