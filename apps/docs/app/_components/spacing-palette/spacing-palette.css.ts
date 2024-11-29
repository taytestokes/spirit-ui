import { style, styleVariants } from "@vanilla-extract/css";
import { theme } from "@spirit-ui/theme";

export const spacingPalette = style({
  display: "grid",
});

export const spacerRow = style({
  display: "grid",
  gridTemplateColumns: "125px 1fr",
  paddingBlock: theme.space.spacingL,
});

export const spacer = style({
  background: theme.colors.neutral950,
  borderRadius: "4px",
  height: "25px",
});

export const spacerVariant = styleVariants(theme.space, (space) => [
  spacer,
  { width: space },
]);
