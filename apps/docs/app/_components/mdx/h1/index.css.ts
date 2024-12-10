import { style } from "@vanilla-extract/css";
import { theme } from "@spirit-ui/theme";

const { vars } = theme;

export const h1 = style({
  fontSize: vars.fontSizes.xxxxl,
  fontWeight: vars.fontWeights.bold,
  letterSpacing: vars.letterSpacings.snug,
  lineHeight: vars.lineHeights.heading,
});
