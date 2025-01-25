import { vars } from "@spirit-ui/design-system/theme";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  background: vars.colors.neutral0,
  borderLeft: `1px solid ${vars.colors.neutral300}`,
  borderRight: `1px solid ${vars.colors.neutral300}`,
  borderTop: `1px solid ${vars.colors.neutral300}`,
  borderRadius: vars.radii.large,
  marginBlock: vars.spacing.x2,
});

export const preview = style({
  padding: vars.spacing.x2,
});

export const details = style({
  background: vars.colors.neutral50,
  borderBottom: `1px solid ${vars.colors.neutral300}`,
  borderBottomLeftRadius: vars.radii.large,
  borderBottomRightRadius: vars.radii.large,
});

export const summary = style({
  borderTop: `1px solid ${vars.colors.neutral300}`,
  color: vars.colors.neutral900,
  cursor: "pointer",
  fontSize: vars.fontSizes.small,
  padding: vars.spacing.x2,
});

export const code = style({
  background: vars.colors.neutral0,
  borderBottomLeftRadius: vars.radii.large,
  borderBottomRightRadius: vars.radii.large,
  borderTop: `1px solid ${vars.colors.neutral300}`,
  fontFamily: "monospace, ui-monospace",
  fontSize: vars.fontSizes.small,
  overflow: "auto",
  padding: vars.spacing.x2,
});
