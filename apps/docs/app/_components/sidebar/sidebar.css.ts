import { style, styleVariants } from "@vanilla-extract/css";
import { theme } from "@spirit-ui/theme";

export const sidebar = style({
  borderRight: `1px solid ${theme.colors.neutral200}`,
  display: "flex",
  flexDirection: "column",
  gap: theme.space.spacingXL,
  height: "100%",
  padding: theme.space.spacingXL,
});

export const sidebarSection = style({});

export const sidebarSectionLabel = style({
  fontSize: theme.fontSizes.textS,
  fontWeight: theme.fontWeights.bold,
});

export const nav = style({});

export const section = style({
  display: "grid",
  gap: theme.space.spacingS,
});

export const sectionLabel = style({
  fontSize: "14px",
  fontWeight: theme.fontWeights.semibold,
});

export const sectionLinks = style({
  display: "grid",
  gap: theme.space.spacingXS,
  listStyle: "none",
  padding: "0px",
});

export const navLink = style({
  color: theme.colors.neutral950,
  fontSize: "14px",
  textDecoration: "none",
});
