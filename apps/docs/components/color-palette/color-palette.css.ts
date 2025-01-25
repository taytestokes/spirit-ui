import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@spirit-ui/design-system/theme";

export const palette = style({
  display: "grid",
  gap: vars.spacing.x3,
  marginTop: vars.spacing.x3,
});

export const colorRow = style({
  display: "grid",
  gap: vars.spacing.x1,
});

export const rowLabel = style({
  fontSize: vars.fontSizes.medium,
  fontWeight: vars.fontWeights.semibold,

  ":first-letter": {
    textTransform: "uppercase",
  },
});

export const colorBoxes = style({
  alignItems: "center",
  display: "grid",
  gap: vars.spacing.x1,
  gridTemplateColumns: "repeat(5, 1fr)",
  width: "100%",
});

const colorBoxBase = style({
  borderRadius: "4px",
  height: "75px",
  width: "100%",
});

export const colorBoxVariant = styleVariants(vars.colors, (color) => [
  colorBoxBase,
  { backgroundColor: color, boxShadow: "0 0 0 1px rgba(0,0,0, 0.1) inset" },
]);
