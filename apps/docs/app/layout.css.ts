import { style } from "@vanilla-extract/css";
import { theme } from "@spirit-ui/design-system/theme";

export const html = style({
  backgroundColor: theme.vars.colors.neutral_0,
  color: theme.vars.colors.neutral_950,
  fontFamily: theme.vars.fonts.inter,
  scrollbarColor: `${theme.vars.colors.neutral_300} transparent`,
  scrollbarWidth: "thin",
});

export const body = style({
  display: "grid",
  overscrollBehaviorY: "none",
});

export const header = style({
  alignItems: "center",
  backdropFilter: "blur(8px)",
  background: `color-mix(in srgb, ${theme.vars.colors.neutral_0} 80%, transparent)`,
  borderBottom: `1px solid ${theme.vars.colors.neutral_300}`,
  display: "flex",
  height: "56px",
  justifyContent: "space-between",
  paddingBlock: theme.vars.space.spacing_1,
  paddingInline: theme.vars.space.spacing_2,
  position: "sticky",
  top: 0,
  zIndex: 10,
});

export const main = style({
  display: "flex",
});

export const content = style({
  display: "flex",
  flex: "1",
});
