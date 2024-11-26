import { style } from "@vanilla-extract/css";
import { theme } from "@spirit-ui/theme";

export const h1 = style({
  fontSize: theme.fontSizes.headingXL,
  fontWeight: theme.fontWeights.black,
  marginBottom: theme.space.spacing2XL,
});
