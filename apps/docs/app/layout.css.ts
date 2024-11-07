import { style } from "@vanilla-extract/css";
import { theme } from "@spirit-ui/react";

export const html = style({
  backgroundColor: theme.colors.background100,
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  width: "100vw",
});

export const header = style({
  paddingInline: theme.spacings.spacingL,
});

export const main = style({});
