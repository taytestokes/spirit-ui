import { style } from "@vanilla-extract/css";
import { theme } from "@spirit-ui/theme";

const { vars } = theme;

export const h4 = style({
  fontSize: vars.fontSizes.headingM,
  fontWeight: vars.fontWeights.semibold,
  marginBlock: `${vars.space.spacing2XL} ${vars.space.spacingM}`,
});
