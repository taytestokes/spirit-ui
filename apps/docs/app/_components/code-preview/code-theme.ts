import { theme } from "@spirit-ui/theme";

// https://www.sublimetext.com/docs/scope_naming.html#color-schemes

export const codeTheme = {
  name: "spirit-ui",
  settings: [
    {
      settings: {
        foreground: theme.vars.colors.neutral950,
        background: theme.vars.colors.neutral0,
      },
    },
    {
      scope: ["support"],
      settings: {
        foreground: "#006bff",
      },
    },
    {
      scope: ["storage"],
      settings: {
        foreground: "#f32882",
      },
    },
    {
      scope: ["string"],
      settings: {
        foreground: "#28a948",
      },
    },
    {
      scope: ["text.html"],
      settings: {
        foreground: "#28a948",
      },
    },
    {
      scope: ["keyword"],
      settings: {
        foreground: "#f32882",
      },
    },
    {
      scope: ["entity"],
      settings: {
        foreground: "#A000F8",
      },
    },
    {
      scope: ["variable"],
      settings: {
        foreground: "#006bff",
      },
    },
  ],
};
