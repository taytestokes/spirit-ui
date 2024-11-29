import { style, styleVariants } from "@vanilla-extract/css";
import { theme } from "@spirit-ui/theme";

const { vars } = theme;

export const sidebar = style({
  borderRight: `1px solid ${vars.colors.neutral200}`,
  display: "flex",
  flexDirection: "column",
  gap: vars.space.spacingXL,
  height: "100%",
  padding: vars.space.spacingXL,
});

export const sidebarSection = style({});

export const sidebarSectionLabel = style({
  fontSize: vars.fontSizes.textS,
  fontWeight: vars.fontWeights.bold,
});

export const nav = style({});

export const section = style({
  display: "grid",
  gap: vars.space.spacingS,
});

export const sectionLabel = style({
  fontSize: "14px",
  fontWeight: vars.fontWeights.semibold,
});

export const sectionLinks = style({
  display: "grid",
  gap: vars.space.spacingXS,
  listStyle: "none",
  padding: "0px",
});

export const navLink = style({
  color: vars.colors.neutral950,
  fontSize: "14px",
  textDecoration: "none",
});
