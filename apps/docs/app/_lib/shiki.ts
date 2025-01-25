import { createHighlighter } from "shiki";
import { vars } from "@spirit-ui/design-system/theme";

// https://www.sublimetext.com/docs/scope_naming.html#color-schemes
export const spiritUiTheme = {
  name: "spirit-ui",
  settings: [
    {
      settings: {
        foreground: vars.colors.neutral950,
        background: "transparent",
      },
    },
  ],
};

export const highlight = async (code: string) => {
  const highlighter = await createHighlighter({
    themes: [spiritUiTheme],
    langs: ["javascript", "jsx", "typescript", "tsx"],
  });

  const highlightedCode = await highlighter.codeToHtml(code.trim(), {
    lang: "tsx",
    theme: "spirit-ui",
  });

  return highlightedCode;
};
