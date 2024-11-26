import { style, styleVariants } from "@vanilla-extract/css";
import { tokens } from "@spirit-ui/theme/tokens";
import { theme } from "@spirit-ui/theme";

export const colorPallete = style({
  display: "grid",
  gap: theme.space.spacingL,
  marginTop: theme.space.spacingXL,
});

export const colorRow = style({
  display: "grid",
  gap: theme.space.spacingS,
});

export const rowLabel = style({
  fontSize: "14px",
  fontWeight: theme.fontWeights.medium,

  ":first-letter": {
    textTransform: "uppercase",
  },
});

export const colorBoxes = style({
  alignItems: "center",
  display: "grid",
  gap: theme.space.spacingS,
  gridTemplateColumns: "repeat(10, 1fr)",
  width: "100%",
});

const colorBoxBase = style({
  borderRadius: "4px",
  boxShadow: "0 0 0 1px rgba(0,0,0, 0.1) inset",
  height: "50px",
  width: "100%",
});

export const colorBoxVariant = styleVariants(tokens.colors, (color) => [
  colorBoxBase,
  { backgroundColor: color },
]);
