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
        foreground: theme.vars.colors.blue_600,
      },
    },
    {
      scope: ["storage"],
      settings: {
        foreground: theme.vars.colors.pink_600,
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
        foreground: theme.vars.colors.green_600,
      },
    },
    {
      scope: ["keyword"],
      settings: {
        foreground: theme.vars.colors.pink_600,
      },
    },
    {
      scope: ["entity"],
      settings: {
        foreground: theme.vars.colors.purple_600,
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
