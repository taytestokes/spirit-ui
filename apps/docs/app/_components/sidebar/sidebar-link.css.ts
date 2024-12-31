import { style } from "@vanilla-extract/css";
import { theme } from "@spirit-ui/design-system/theme";

export const sidebarLink = style({
  alignItems: "center",
  borderRadius: "4px",
  color: theme.vars.colors.neutral_950,
  cursor: "pointer",
  display: "flex",
  height: theme.vars.space.spacing_4,
  padding: theme.vars.space.spacing_1,
  textDecoration: "none",
  width: "100%",

  ":hover": {
    background: theme.vars.colors.neutral_100,
  },
});

export const active = style({
  background: theme.vars.colors.neutral_100,
});
