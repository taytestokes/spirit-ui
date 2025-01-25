import { style } from "@vanilla-extract/css";
import { vars } from "@spirit-ui/design-system/theme";

export const html = style({
  backgroundColor: vars.colors.neutral0,
  color: vars.colors.neutral950,
  fontFamily: vars.fonts.inter,
  scrollbarColor: `${vars.colors.neutral300} transparent`,
  scrollbarWidth: "thin",
});

export const body = style({
  display: "grid",
  overscrollBehaviorY: "none",
});

export const header = style({
  alignItems: "center",
  backdropFilter: "blur(8px)",
  background: `color-mix(in srgb, ${vars.colors.neutral0} 80%, transparent)`,
  borderBottom: `1px solid ${vars.colors.neutral300}`,
  display: "flex",
  height: "56px",
  justifyContent: "space-between",
  paddingBlock: vars.spacing.x2,
  paddingInline: vars.spacing.x2,
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
