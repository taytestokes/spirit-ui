import { style } from "@vanilla-extract/css";
import { vars } from "@spirit-ui/design-system/theme";

export const sidebarLink = style({
  alignItems: "center",
  borderRadius: "4px",
  color: vars.colors.neutral950,
  cursor: "pointer",
  display: "flex",
  textDecoration: "none",
  width: "100%",
});
