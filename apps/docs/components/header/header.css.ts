import { style } from "@vanilla-extract/css";
import { vars } from "@spirit-ui/design-system/theme";

export const header = style({
  alignItems: "center",
  backdropFilter: "blur(8px)",
  background: `color-mix(in srgb, ${vars.colors.neutral0} 70%, transparent)`,
  borderBottom: `1px solid ${vars.colors.neutral300}`,
  display: "flex",
  height: "56px",
  justifyContent: "space-between",
  padding: vars.spacing.x4,
  position: "sticky",
  top: 0,
  zIndex: 10,
});

export const link = style({
  textDecoration: "none",
});
