import { style, styleVariants } from "@vanilla-extract/css";
import { theme } from "@spirit-ui/theme";

export const colorPalette = style({
  display: "grid",
  gap: theme.space.spacingXL,
  marginTop: theme.space.spacingXL,
});

export const colorRow = style({
  display: "grid",
  gap: theme.space.spacingS,
});

export const rowLabel = style({
  fontSize: theme.fontSizes.textM,
  fontWeight: theme.fontWeights.semibold,

  ":first-letter": {
    textTransform: "uppercase",
  },
});

export const colorBoxes = style({
  alignItems: "center",
  display: "grid",
  gap: theme.space.spacingS,
  gridTemplateColumns: "repeat(5, 1fr)",
  width: "100%",
});

const colorBoxBase = style({
  borderRadius: "4px",
  height: "75px",
  width: "100%",
});

export const colorBoxVariant = styleVariants(theme.colors, (color) => [
  colorBoxBase,
  { backgroundColor: color, boxShadow: "0 0 0 1px rgba(0,0,0, 0.1) inset" },
]);
