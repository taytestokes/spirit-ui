import { style } from "@vanilla-extract/css";
import { vars } from "@spirit-ui/design-system/theme";

export const page = style({
  display: "flex",
  width: "100%",
});

export const content = style({
  margin: "0 auto",
  paddingBlock: vars.spacing.x12,
  paddingInline: vars.spacing.x4,
  width: "100%",

  "@media": {
    "screen and (min-width: 768px)": {
      maxWidth: "900px",
    },
  },
});

export const titleContainer = style({
  display: "grid",
  gap: vars.spacing.x2,
});
