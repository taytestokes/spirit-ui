import { style } from "@vanilla-extract/css";
import { theme } from "@spirit-ui/theme";

export const snippet = style({
  border: `1px solid ${theme.colors.gray200}`,
  borderRadius: "4px",
  padding: theme.space.spacingM,
});

export const code = style({
  fontFamily: "monospace",

  "::before": {
    content: "$ ",
  },
});
