import { style } from "@vanilla-extract/css";
import { theme } from "@spirit-ui/theme";

const { vars } = theme;

export const h2 = style({
  fontSize: vars.fontSizes.headingL,
  fontWeight: vars.fontWeights.bold,
  marginBlock: `${vars.space.spacing_6} ${vars.space.spacing_3}`,
});
