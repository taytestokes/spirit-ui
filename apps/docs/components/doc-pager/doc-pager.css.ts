import { style } from "@vanilla-extract/css";
import { theme } from "@spirit-ui/design-system/theme";

const {
  vars: { borderRadius, borderStyles, colors, fontWeights, space },
} = theme;

export const docPager = style({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  paddingTop: space.spacing_4,
});

export const link = style({
  borderRadius: borderRadius.base,
  color: "inherit",
  display: "flex",
  flexDirection: "column",
  textDecoration: "none",
});

export const next = style({
  marginLeft: "auto",
  textAlign: "right",
});
