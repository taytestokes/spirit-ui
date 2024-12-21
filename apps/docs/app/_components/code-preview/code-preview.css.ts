import { theme } from "@spirit-ui/theme";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  background: theme.vars.colors.neutral_0,
  borderLeft: `1px solid ${theme.vars.colors.neutral_300}`,
  borderRight: `1px solid ${theme.vars.colors.neutral_300}`,
  borderTop: `1px solid ${theme.vars.colors.neutral_300}`,
  borderRadius: "6px",
  marginBlock: theme.vars.space.spacing_4,
});

export const preview = style({
  padding: theme.vars.space.spacing_2,
});

export const details = style({
  background: theme.vars.colors.neutral_50,
  borderBottom: `1px solid ${theme.vars.colors.neutral_300}`,
  borderBottomLeftRadius: "6px",
  borderBottomRightRadius: "6px",
});

export const summary = style({
  borderTop: `1px solid ${theme.vars.colors.neutral_300}`,
  color: theme.vars.colors.neutral_900,
  cursor: "pointer",
  fontSize: theme.vars.fontSizes.sm,
  padding: theme.vars.space.spacing_2,
});

export const code = style({
  background: theme.vars.colors.neutral_0,
  borderBottomLeftRadius: "6px",
  borderBottomRightRadius: "6px",
  borderTop: `1px solid ${theme.vars.colors.neutral_300}`,
  fontFamily: "monospace, ui-monospace",
  fontSize: theme.vars.fontSizes.sm,
  overflow: "auto",
  padding: theme.vars.space.spacing_2,
});
