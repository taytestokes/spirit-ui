import { style } from "@vanilla-extract/css";
import { vars } from "@spirit-ui/design-system/theme";

export const page = style({
  display: "flex",
  margin: "0 auto",
  maxWidth: "1100px",
  width: "100%",
});

export const content = style({
  margin: "0 auto",
  padding: vars.spacing.x8,
  paddingInline: vars.spacing.x4,
  width: "100%",
});

export const titleContainer = style({
  display: "grid",
  gap: vars.spacing.x2,
});
