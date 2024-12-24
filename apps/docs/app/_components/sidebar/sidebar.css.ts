import { style } from "@vanilla-extract/css";
import { theme } from "@spirit-ui/theme";

const { vars } = theme;

export const aside = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.spacing_3,
  height: "100%",
  padding: vars.space.spacing_3,
});

export const sidebarSection = style({});

export const sidebarSectionLabel = style({
  fontSize: vars.fontSizes.lg,
  fontWeight: vars.fontWeights.bold,
});

export const nav = style({
  display: "grid",
  gap: theme.vars.space.spacing_2,
});

export const section = style({
  display: "grid",
  gap: vars.space.spacing_1,
});

export const sectionLabel = style({
  fontSize: "14px",
  fontWeight: vars.fontWeights.semibold,
});

export const sectionLinks = style({
  display: "grid",
  gap: vars.space.spacing_0_5,
  listStyle: "none",
  padding: "0px",
});

export const navLink = style({
  color: vars.colors.neutral_950,
  fontSize: "14px",
  textDecoration: "none",
});
