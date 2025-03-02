import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { vars } from "@spirit-ui/design-system/theme";

export const sidebar = style({
  display: "none",
  height: calc.subtract("100vh", "56px"),
  paddingBlock: vars.spacing.x8,
  paddingInline: vars.spacing.x4,
  position: "sticky",
  top: "56px",
  width: "240px",
  zIndex: 10,

  "@media": {
    "screen and (min-width: 768px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
});

export const content = style({
  display: "grid",
  gap: vars.spacing.x8,
  scrollbarColor: `${vars.colors.neutral300} transparent`,
  scrollbarWidth: "thin",
  overflow: "auto",
});

export const group = style({
  display: "grid",
  gap: vars.spacing.x1,
  width: "100%",
});

export const groupLabel = style({
  alignItems: "center",
  display: "flex",
});

export const groupMenu = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing.x1,
  listStyle: "none",
  padding: "0px",
  width: "100%",
});

export const groupMenuItem = style({
  width: "100%",
});
