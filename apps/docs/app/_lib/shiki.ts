import { createHighlighter } from "shiki";
import { theme } from "@spirit-ui/design-system/theme";

// https://www.sublimetext.com/docs/scope_naming.html#color-schemes
export const spiritUiTheme = {
  name: "spirit-ui",
  settings: [
    {
      settings: {
        foreground: theme.vars.colors.neutral_950,
        background: "transparent",
      },
    },

    // {
    //   scope: ["storage"],
    //   settings: {
    //     foreground: theme.vars.colors.teal_700,
    //   },
    // },
    // {
    //   scope: ["keyword"],
    //   settings: {
    //     foreground: theme.vars.colors.teal_700,
    //   },
    // },
    // {
    //   scope: ["string"],
    //   settings: {
    //     foreground: theme.vars.colors.green_700,
    //   },
    // },
    // {
    //   scope: ["entity"],
    //   settings: {
    //     foreground: theme.vars.colors.purple_900,
    //   },
    // },
    // {
    //   scope: ["comment"],
    //   settings: {
    //     foreground: theme.vars.colors.neutral_800,
    //   },
    // },
    // {
    //   scope: ["support"],
    //   settings: {
    //     foreground: theme.vars.colors.blue_700,
    //   },
    // },
    // {
    //   scope: ["variable"],
    //   settings: {
    //     foreground: theme.vars.colors.blue_700,
    //   },
    // },
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
