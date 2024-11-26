import { style } from "@vanilla-extract/css";
import { theme } from "@spirit-ui/theme";

export const h3 = style({
  fontSize: theme.fontSizes.headingM,
  fontWeight: theme.fontWeights.semibold,
  marginBlock: `${theme.space.spacing2XL} ${theme.space.spacingM}`,
});
