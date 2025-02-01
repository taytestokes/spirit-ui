import { style } from "@vanilla-extract/css";
import { vars } from "@spirit-ui/design-system/theme";

export const sidebarLink = style({
  alignItems: "center",
  borderRadius: "4px",
  color: vars.colors.neutral900,
  cursor: "pointer",
  display: "flex",
  paddingBlock: vars.spacing.x2,
  paddingInline: vars.spacing.x2,
  textDecoration: "none",
  width: "100%",

  ":hover": {
    background: vars.colors.neutral100,
  },
});

export const active = style({
  background: vars.colors.neutral100,
  color: vars.colors.neutral950,
});
