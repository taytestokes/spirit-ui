import { vars } from "@spirit-ui/design-system/theme";

// https://www.sublimetext.com/docs/scope_naming.html#color-schemes

export const codeTheme = {
  name: "spirit-ui",
  settings: [
    {
      settings: {
        foreground: vars.colors.neutral950,
        background: vars.colors.neutral0,
      },
    },
    {
      scope: ["support"],
      settings: {
        foreground: vars.colors.blue600,
      },
    },
    {
      scope: ["storage"],
      settings: {
        foreground: vars.colors.pink600,
      },
    },
    {
      scope: ["string"],
      settings: {
        foreground: vars.colors.green700,
      },
    },
    {
      scope: ["text.html"],
      settings: {
        foreground: vars.colors.green600,
      },
    },
    {
      scope: ["keyword"],
      settings: {
        foreground: vars.colors.pink600,
      },
    },
    {
      scope: ["entity"],
      settings: {
        foreground: vars.colors.purple600,
      },
    },
    {
      scope: ["variable"],
      settings: {
        foreground: vars.colors.blue700,
      },
    },
  ],
};
