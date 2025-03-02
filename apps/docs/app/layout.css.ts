import { style } from "@vanilla-extract/css";
import { vars } from "@spirit-ui/design-system/theme";

export const html = style({
  backgroundColor: vars.colors.neutral0,
  color: vars.colors.neutral950,
  display: "grid",
  fontFamily: vars.fonts.inter,
  minHeight: "100%",
  scrollbarColor: `${vars.colors.neutral300} transparent`,
  scrollbarWidth: "thin",
});

export const body = style({
  display: "grid",
  gridTemplateRows: "min-content 1fr",
  overscrollBehaviorY: "none",
});

export const main = style({
  display: "flex",
});
