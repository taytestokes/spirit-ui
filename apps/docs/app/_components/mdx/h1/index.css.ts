import { style } from "@vanilla-extract/css";
import { theme } from "@spirit-ui/theme";

const { vars } = theme;

export const h1 = style({
  fontSize: vars.fontSizes.headingXL,
  fontWeight: vars.fontWeights.black,
  marginBottom: vars.space.spacing_4,
});
