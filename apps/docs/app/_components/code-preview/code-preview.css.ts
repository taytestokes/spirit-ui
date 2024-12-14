import { theme } from "@spirit-ui/theme";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  background: theme.vars.colors.neutral0,
  borderLeft: `1px solid ${theme.vars.colors.neutral200}`,
  borderRight: `1px solid ${theme.vars.colors.neutral200}`,
  borderTop: `1px solid ${theme.vars.colors.neutral200}`,
  borderRadius: "4px",
});

export const preview = style({
  padding: theme.vars.space.spacing_2,
});

export const details = style({
  borderBottom: `1px solid ${theme.vars.colors.neutral200}`,
  borderBottomLeftRadius: "4px",
  borderBottomRightRadius: "4px",
});

export const summary = style({
  background: theme.vars.colors.neutral50,
  borderTop: `1px solid ${theme.vars.colors.neutral200}`,
  color: theme.vars.colors.neutral900,
  fontSize: theme.vars.fontSizes.sm,
  padding: theme.vars.space.spacing_2,
});

export const code = style({
  borderTop: `1px solid ${theme.vars.colors.neutral200}`,
  fontFamily: "monospace, ui-monospace",
  fontSize: theme.vars.fontSizes.sm,
  padding: theme.vars.space.spacing_2,
});
