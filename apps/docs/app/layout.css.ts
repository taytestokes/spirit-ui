import { style, createVar, globalStyle } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { theme } from "@spirit-ui/theme";

const { vars } = theme;

const headerHeight = createVar();
const maxContentWidth = createVar();
const autoMargin = createVar();

export const html = style({
  vars: {
    [headerHeight]: "64px",
    [maxContentWidth]: "900px",
    [autoMargin]: "0 auto",
  },
  background: vars.colors.neutral0,
  color: vars.colors.neutral950,
  fontFamily: vars.fonts.inter,
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  width: "100vw",
});

export const header = style({
  background: vars.colors.neutral0,
  borderBottom: `1px solid ${vars.colors.neutral200}`,
  height: headerHeight,
});

export const headerContent = style({
  alignItems: "center",
  display: "flex",
  height: "100%",
  justifyContent: "space-between",
  margin: autoMargin,
  maxWidth: maxContentWidth,
  paddingInline: vars.space.spacing_3,
});

export const main = style({
  display: "grid",
  gridTemplateColumns: "200px 1fr",
  height: calc.subtract("100%", headerHeight),
  margin: autoMargin,
  maxWidth: maxContentWidth,
  width: "100%",
});

export const content = style({
  height: "100%",
  overflowX: "hidden",
  overflowY: "auto",
  padding: vars.space.spacing_3,
});
