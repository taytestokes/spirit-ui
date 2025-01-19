import React from "react";
import { CodeBlock } from "../code-block";

import * as styles from "./code-preview.css";

interface Props {
  code: string;
  children: React.ReactNode;
}

export const CodePreview = async ({ code, children }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.preview}>{children}</div>
      <details className={styles.details}>
        <summary className={styles.summary}>Code</summary>
        <CodeBlock code={code} />
      </details>
    </div>
  );
};
