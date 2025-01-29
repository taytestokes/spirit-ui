import { vars } from "@spirit-ui/design-system/theme";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  border: `1px solid ${vars.colors.neutral200}`,
  borderRadius: vars.radii.large,
});

export const preview = style({
  background: vars.colors.neutral50,
  borderTopLeftRadius: vars.radii.large,
  borderTopRightRadius: vars.radii.large,
  padding: vars.spacing.x6,
});

export const code = style({
  borderBottomLeftRadius: vars.radii.large,
  borderBottomRightRadius: vars.radii.large,
  borderTop: `1px solid ${vars.colors.neutral200}`,
});
