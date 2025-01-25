import { globalStyle } from "@vanilla-extract/css";
import { vars } from "@spirit-ui/design-system/theme";

/**
 * These styles will be applied to the classes
 * that are generated from the rehype-pretty-plugin
 * when contentlayer is generating the JSX from the MDX files.
 */
globalStyle("[data-rehype-pretty-code-figure]", {
  position: "relative",
});

globalStyle("[data-rehype-pretty-code-figure] pre", {
  background: vars.colors.neutral100,
  borderColor: vars.colors.neutral200,
  borderStyle: vars.borderStyles.solid,
  paddingBlock: vars.spacing.x3,
  paddingInline: 0,
});

globalStyle("[data-rehype-pretty-code-figure] code", {
  backgroundColor: "transparent",
  borderRadius: vars.radii.none,
  padding: 0,
});

globalStyle("[data-rehype-pretty-code-figure] [data-line]", {
  alignItems: "center",
  borderLeftColor: "transparent",
  borderLeftStyle: vars.borderStyles.solid,
  borderLeftWidth: "5px",
  display: "flex",
  minHeight: "1rem",
  paddingBlock: vars.spacing.x1,
  paddingInline: vars.spacing.x3,
});

globalStyle("[data-line-numbers]", {
  counterReset: "line",
});

globalStyle("[data-line-numbers] [data-line]::before", {
  counterIncrement: "line",
  color: vars.colors.neutral900,
  content: "counter(line)",
  marginRight: vars.spacing.x3,
  textAlign: "right",
  width: "20px",
});

globalStyle("[data-rehype-pretty-code-figure] [data-highlighted-line]", {
  background: vars.colors.neutral100,
  borderLeftColor: vars.colors.neutral300,
});

globalStyle("[data-rehype-pretty-code-title]", {
  color: vars.colors.neutral900,
  fontSize: vars.fontSizes.small,
  fontWeight: vars.fontWeights.semibold,
  padding: vars.spacing.x2,
});
