import { style } from "@vanilla-extract/css";
import { theme } from "@spirit-ui/design-system/theme";

const {
  vars: {
    borderRadius,
    colors,
    fonts,
    fontSizes,
    fontWeights,
    letterSpacings,
    lineHeights,
    space,
  },
} = theme;

export const h1 = style({
  letterSpacing: letterSpacings.snug,
  lineHeight: lineHeights.tight,
  fontSize: fontSizes.xxxxl,
});

export const h2 = style({
  letterSpacing: letterSpacings.snug,
  lineHeight: lineHeights.tight,
  fontSize: fontSizes.xxxl,
});

export const h3 = style({
  letterSpacing: letterSpacings.snug,
  lineHeight: lineHeights.tight,
  fontSize: fontSizes.xxl,
});

export const h4 = style({
  letterSpacing: letterSpacings.snug,
  lineHeight: lineHeights.tight,
  fontSize: fontSizes.xl,
});

export const h5 = style({
  letterSpacing: letterSpacings.snug,
  lineHeight: lineHeights.tight,
  fontSize: fontSizes.lg,
});

export const h6 = style({
  letterSpacing: letterSpacings.snug,
  lineHeight: lineHeights.tight,
  fontSize: fontSizes.md,
});

export const a = style({
  color: "inherit",
  fontWeight: fontWeights.semibold,
  textDecoration: "underline",
  textUnderlineOffset: "4px",
});

export const p = style({
  lineHeight: lineHeights.normal,
  marginBlock: space.spacing_4,
});

export const pre = style({
  backgroundColor: colors.neutral_100,
  borderRadius: borderRadius.base,
  padding: space.spacing_2,
});

export const code = style({
  backgroundColor: colors.neutral_100,
  borderRadius: borderRadius.base,
  fontFamily: fonts.mono,
  fontSize: fontSizes.xs,
  padding: space.spacing_0_5,
});

export const blockquote = style({});

export const img = style({});
