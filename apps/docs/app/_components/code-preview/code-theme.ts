import { theme } from "@spirit-ui/design-system/theme";

// https://www.sublimetext.com/docs/scope_naming.html#color-schemes

export const codeTheme = {
  name: "spirit-ui",
  settings: [
    {
      settings: {
        foreground: theme.vars.colors.neutral_950,
        background: theme.vars.colors.neutral_0,
      },
    },
    {
      scope: ["support"],
      settings: {
        foreground: theme.vars.colors.blue_700,
      },
    },
    {
      scope: ["storage"],
      settings: {
        foreground: theme.vars.colors.pink_700,
      },
    },
    {
      scope: ["string"],
      settings: {
        foreground: theme.vars.colors.green_700,
      },
    },
    {
      scope: ["text.html"],
      settings: {
        foreground: theme.vars.colors.green_700,
      },
    },
    {
      scope: ["keyword"],
      settings: {
        foreground: theme.vars.colors.pink_700,
      },
    },
    {
      scope: ["entity"],
      settings: {
        foreground: theme.vars.colors.purple_700,
      },
    },
    {
      scope: ["variable"],
      settings: {
        foreground: theme.vars.colors.blue_700,
      },
    },
  ],
};
