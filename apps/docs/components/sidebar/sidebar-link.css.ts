import { style } from "@vanilla-extract/css";
import { vars } from "@spirit-ui/design-system/theme";

export const sidebarLink = style({
  alignItems: "center",
  borderRadius: "4px",
  color: vars.colors.neutral950,
  cursor: "pointer",
  display: "flex",
  height: vars.spacing.x4,
  padding: vars.spacing.x4,
  textDecoration: "none",
  width: "100%",

  ":hover": {
    background: vars.colors.neutral100,
  },
});

export const active = style({
  background: vars.colors.neutral100,
});
