import React from "react";

import { Heading } from "@spirit-ui/design-system/server";

import * as styles from "./styles.css";

interface Props {
  children: React.ReactNode;
}

export const H3 = ({ children }: Props) => (
  <Heading as="h3" className={styles.headingThree} variant="h3">
    {children}
  </Heading>
);
