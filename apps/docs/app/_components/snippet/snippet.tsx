import React from "react";

import * as styles from "./snippet.css";

export const Snippet = ({ children }) => {
  return (
    <div className={styles.snippet}>
      <pre className={styles.code}>{children}</pre>
    </div>
  );
};
