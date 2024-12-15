import React from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { createHighlighter } from "shiki";

import { codeTheme } from "./code-theme";

import * as styles from "./code-preview.css";

interface Props {
  code: string;
  children: React.ReactNode;
}

export const CodePreview = async ({ code, children }: Props) => {
  const highlighter = await createHighlighter({
    themes: [codeTheme],
    langs: ["tsx"],
  });

  const highlightedCode = await highlighter.codeToHtml(code.trim(), {
    lang: "tsx",
    theme: "spirit-ui",
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.preview}>{children}</div>
      <details className={styles.details}>
        <summary className={styles.summary}>Code</summary>
        <div
          className={styles.code}
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      </details>
    </div>
  );
};
