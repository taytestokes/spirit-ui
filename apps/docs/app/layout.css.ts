import { style, createVar, globalStyle } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

import { theme } from "@spirit-ui/theme";

const headerHeight = createVar();
const maxContentWidth = createVar();
const autoMargin = createVar();

export const html = style({
  vars: {
    [headerHeight]: "64px",
    [maxContentWidth]: "900px",
    [autoMargin]: "0 auto",
  },
  background: theme.colors.background,
  color: theme.colors.neutral950,
  fontFamily: theme.fonts.inter,

  "::selection": {
    background: theme.colors.pink,
  },
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  width: "100vw",
});

export const header = style({
  background: theme.colors.background,
  borderBottom: `1px solid ${theme.colors.neutral300}`,
  height: headerHeight,
});

export const headerContent = style({
  alignItems: "center",
  display: "flex",
  height: "100%",
  justifyContent: "space-between",
  margin: autoMargin,
  maxWidth: maxContentWidth,
  paddingInline: theme.space.spacingXL,
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
  padding: theme.space.spacingXL,
});
