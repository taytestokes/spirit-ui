import React from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { createHighlighter } from "shiki";

import { spiritCodeTheme } from "./code-theme";

import * as styles from "./code-preview.css";

interface Props {
  code: string;
  children: React.ReactNode;
}

export const CodePreview = async ({ code, children }: Props) => {
  // const jsxElementString: string = React.Children.toArray(children).reduce(
  //   (acc: string, child: React.ReactNode) => {
  //     const jsxElementStringRepresentation =
  //       reactElementToJSXString(child) + "\n";
  //     return (acc += jsxElementStringRepresentation);
  //   },
  //   ""
  // );

  // TODO: Look into adding tranformers

  const highlighter = await createHighlighter({
    themes: [spiritCodeTheme],
    langs: ["tsx"],
  });

  const snippit = await highlighter.codeToHtml(code, {
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
          dangerouslySetInnerHTML={{ __html: snippit }}
        />
      </details>
    </div>
  );
};
