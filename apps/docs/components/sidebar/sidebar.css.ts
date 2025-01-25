import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { vars } from "@spirit-ui/design-system/theme";

export const sidebar = style({
  background: vars.colors.neutral50,
  borderRight: `1px solid ${vars.colors.neutral300}`,
  display: "none",
  height: calc.subtract("100vh", "56px"),
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

export const header = style({
  alignItems: "center",
  display: "flex",
  gap: vars.spacing.x1,
  padding: vars.spacing.x2,
});

export const icon = style({
  alignItems: "center",
  background: vars.colors.neutral1000,
  borderRadius: "6px",
  color: vars.colors.neutral0,
  display: "flex",
  height: "32px",
  justifyContent: "center",
  width: "32px",
});

export const content = style({
  display: "flex",
  flexDirection: "column",
  flex: "1",
  gap: vars.spacing.x1,
  scrollbarColor: `${vars.colors.neutral300} transparent`,
  scrollbarWidth: "thin",
  overflow: "auto",
});

export const group = style({
  padding: vars.spacing.x1,
  width: "100%",
});

export const groupLabel = style({
  alignItems: "center",
  display: "flex",
  fontWeight: vars.fontWeights.medium,
  height: "2rem",
  paddingInline: vars.spacing.x1,
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

export const footer = style({
  background: vars.colors.neutral0,
  borderTop: `1px solid ${vars.colors.neutral300}`,
  padding: vars.spacing.x1,
});
