import { style } from "@vanilla-extract/css";
import { theme } from "@spirit-ui/design-system/theme";

const { vars } = theme;

export const sidebar = style({
  background: vars.colors.neutral_50,
  borderRight: `1px solid ${vars.colors.neutral_300}`,
  display: "none",
  height: "100vh",
  position: "sticky",
  top: 0,
  width: "240px",

  "@media": {
    "screen and (min-width: 768px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
});

export const header = style({
  alignItems: "center",
  // background: vars.colors.neutral_0,
  // borderBottom: `1px solid ${vars.colors.neutral_300}`,
  display: "flex",
  gap: vars.space.spacing_1,
  padding: vars.space.spacing_2,
});

export const icon = style({
  alignItems: "center",
  background: vars.colors.neutral_1000,
  borderRadius: "6px",
  color: vars.colors.neutral_0,
  display: "flex",
  height: "32px",
  justifyContent: "center",
  width: "32px",
});

export const content = style({
  display: "flex",
  flexDirection: "column",
  flex: "1",
  gap: vars.space.spacing_1,
  scrollbarColor: `${theme.vars.colors.neutral_300} transparent`,
  scrollbarWidth: "thin",
  overflow: "auto",
});

export const group = style({
  padding: vars.space.spacing_1,
  width: "100%",
});

export const groupLabel = style({
  alignItems: "center",
  display: "flex",
  fontWeight: theme.vars.fontWeights.medium,
  height: "2rem",
  paddingInline: vars.space.spacing_1,
});

export const groupMenu = style({
  display: "flex",
  flexDirection: "column",
  gap: theme.vars.space.spacing_0_5,
  listStyle: "none",
  padding: "0px",
  width: "100%",
});

export const groupMenuItem = style({
  width: "100%",
});

export const footer = style({
  background: vars.colors.neutral_0,
  borderTop: `1px solid ${vars.colors.neutral_300}`,
  padding: vars.space.spacing_1,
});
