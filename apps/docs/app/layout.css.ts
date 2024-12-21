import { style, createVar } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { theme } from "@spirit-ui/theme";

const { vars } = theme;

const headerHeight = createVar();
const autoMargin = createVar();

export const html = style({
  vars: {
    [headerHeight]: "64px",
    [autoMargin]: "0 auto",
  },
  background: vars.colors.neutral_0,
  color: vars.colors.neutral_950,
  fontFamily: vars.fonts.inter,
});

export const headerWrapper = style({
  height: headerHeight,
});

export const header = style({
  backdropFilter: "blur(5px)",
  background: `color-mix(in srgb, ${vars.colors.neutral_0} 85%, transparent)`,
  borderBottom: `1px solid ${vars.colors.neutral_200}`,
  height: headerHeight,
  position: "fixed",
  width: "100%",
});

export const headerContent = style({
  alignItems: "center",
  display: "flex",
  height: "100%",
  justifyContent: "space-between",
  paddingInline: vars.space.spacing_3,
});

export const main = style({
  display: "grid",
  gridTemplateColumns: "240px 1fr",
  margin: "0 auto",
  maxWidth: "1100px",
  minHeight: calc.subtract("100vh", headerHeight),
  width: "100%",
});

export const content = style({
  height: "100%",
  overflowX: "hidden",
  overflowY: "auto",
  padding: vars.space.spacing_3,
});
