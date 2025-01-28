import { vars } from "@spirit-ui/design-system/theme";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  background: vars.colors.neutral0,
  border: `1px solid ${vars.colors.neutral300}`,
  borderRadius: vars.radii.medium,
  marginBlock: vars.spacing.x2,
});

export const preview = style({
  backgroundColor: vars.colors.neutral50,
  borderTopLeftRadius: vars.radii.medium,
  borderTopRightRadius: vars.radii.medium,
  justifyItems: "center",
  display: "grid",
  padding: vars.spacing.x16,
});

export const code = style({
  borderTop: `1px solid ${vars.colors.neutral300}`,
  fontFamily: "monospace, ui-monospace",
  fontSize: vars.fontSizes.small,
  overflow: "auto",
});
