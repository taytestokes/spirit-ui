import { style } from "@vanilla-extract/css";
import { theme } from "@spirit-ui/theme";

const { vars } = theme;

export const h3 = style({
  fontSize: vars.fontSizes.headingM,
  fontWeight: vars.fontWeights.semibold,
  marginBlock: `${vars.space.spacing_4} ${vars.space.spacing_1_50}`,
});
