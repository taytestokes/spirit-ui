import { globalStyle } from "@vanilla-extract/css";
import { theme } from "@spirit-ui/design-system/theme";

const {
  vars: { borderRadius, colors, fontSizes, fontWeights, space },
} = theme;

/**
 * These styles will be applied to the classes
 * that are generated from the rehype-pretty-plugin
 * when contentlayer is generating the JSX from the MDX files.
 */
globalStyle("[data-rehype-pretty-code-figure]", {
  position: "relative",
});

globalStyle("[data-rehype-pretty-code-figure] pre", {
  background: colors.neutral_50,
  paddingBlock: space.spacing_2,
  paddingInline: 0,
});

globalStyle("[data-rehype-pretty-code-figure] code", {
  backgroundColor: "transparent",
  borderRadius: borderRadius.none,
  padding: 0,
});

globalStyle("[data-rehype-pretty-code-figure] [data-line]", {
  alignItems: "center",
  display: "flex",
  minHeight: "1rem",
  paddingBlock: space.spacing_0_5,
  paddingInline: space.spacing_2,
});

globalStyle("[data-line-numbers]", {
  counterReset: "line",
});

globalStyle("[data-line-numbers] [data-line]::before", {
  counterIncrement: "line",
  color: theme.vars.colors.neutral_900,
  content: "counter(line)",
  marginRight: theme.vars.space.spacing_2,
  textAlign: "right",
  width: "20px",
});

globalStyle("[data-rehype-pretty-code-figure] [data-highlighted-line]", {
  background: colors.neutral_100,
});

globalStyle("[data-rehype-pretty-code-title]", {
  color: colors.neutral_950,
  fontSize: fontSizes.sm,
  fontWeight: fontWeights.semibold,
  padding: space.spacing_1,
});
