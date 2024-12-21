import { style, styleVariants } from "@vanilla-extract/css";
import { theme } from "@spirit-ui/theme";

const { vars } = theme;

export const palette = style({
  display: "grid",
  gap: vars.space.spacing_3,
  marginTop: vars.space.spacing_3,
});

export const colorRow = style({
  display: "grid",
  gap: vars.space.spacing_1,
});

export const rowLabel = style({
  fontSize: vars.fontSizes.md,
  fontWeight: vars.fontWeights.semibold,

  ":first-letter": {
    textTransform: "uppercase",
  },
});

export const colorBoxes = style({
  alignItems: "center",
  display: "grid",
  gap: vars.space.spacing_0_5,
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
