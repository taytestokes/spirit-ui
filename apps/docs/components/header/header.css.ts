import { style } from "@vanilla-extract/css";
import { vars } from "@spirit-ui/design-system/theme";

export const header = style({
  background: vars.colors.neutral0,
  borderBottom: `1px solid ${vars.colors.neutral300}`,
  height: "56px",
  position: "sticky",
  top: 0,
  zIndex: 10,
});

export const content = style({
  alignItems: "center",
  display: "flex",
  height: "100%",
  margin: "0 auto",
  maxWidth: "1100px",
  justifyContent: "space-between",
  padding: vars.spacing.x4,
  width: "100%",
});

export const link = style({
  textDecoration: "none",
});
