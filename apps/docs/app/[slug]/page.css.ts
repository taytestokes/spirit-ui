import { style } from "@vanilla-extract/css";
import { vars } from "@spirit-ui/design-system/theme";

export const content = style({
  display: "grid",
  gridTemplateRows: "1fr min-content",
  margin: "0 auto",
  padding: vars.spacing.x8,
  width: "100%",

  "@media": {
    "screen and (min-width: 768px)": {
      maxWidth: "900px",
    },
  },
});
