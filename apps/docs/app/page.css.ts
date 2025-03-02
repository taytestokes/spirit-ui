import { style } from "@vanilla-extract/css";
import { vars } from "@spirit-ui/design-system/theme";

export const page = style({
  display: "flex",
  flexDirection: "column",
  paddingTop: vars.spacing.x16,
  margin: "0 auto",
  maxWidth: "990px",
  width: "100%",
});
