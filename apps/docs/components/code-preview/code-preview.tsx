import React from "react";

import * as styles from "./code-preview.css";

interface Props {
  code: string;
  children: React.ReactNode;
}

export const CodePreview = async ({ children }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.preview}>{children}</div>
      <details className={styles.details}>
        <summary className={styles.summary}>Code</summary>
      </details>
    </div>
  );
};
