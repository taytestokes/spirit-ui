import { style } from "@vanilla-extract/css";
import { vars } from "@spirit-ui/design-system/theme";

export const docPager = style({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  paddingTop: vars.spacing.x4,
});

export const link = style({
  borderRadius: vars.radii.medium,
  color: "inherit",
  display: "flex",
  flexDirection: "column",
  textDecoration: "none",
});

export const next = style({
  marginLeft: "auto",
  textAlign: "right",
});
