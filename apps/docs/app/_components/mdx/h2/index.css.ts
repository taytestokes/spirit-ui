import { style } from "@vanilla-extract/css";
import { theme } from "@spirit-ui/theme";

export const h2 = style({
  fontSize: theme.fontSizes.headingL,
  fontWeight: theme.fontWeights.bold,
  marginBlock: `${theme.space.spacing4XL} ${theme.space.spacingXL}`,
});
