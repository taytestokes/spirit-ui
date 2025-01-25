import { style } from "@vanilla-extract/css";
import { vars } from "@spirit-ui/design-system/theme";

export const h1 = style({
  letterSpacing: vars.letterSpacings.snug,
  lineHeight: vars.lineHeights.tight,
  fontSize: vars.fontSizes.xxxxlarge,
});

export const h2 = style({
  letterSpacing: vars.letterSpacings.snug,
  lineHeight: vars.lineHeights.tight,
  fontSize: vars.fontSizes.xxxlarge,
});

export const h3 = style({
  letterSpacing: vars.letterSpacings.snug,
  lineHeight: vars.lineHeights.tight,
  fontSize: vars.fontSizes.xxlarge,
});

export const h4 = style({
  letterSpacing: vars.letterSpacings.snug,
  lineHeight: vars.lineHeights.tight,
  fontSize: vars.fontSizes.xlarge,
});

export const h5 = style({
  letterSpacing: vars.letterSpacings.snug,
  lineHeight: vars.lineHeights.tight,
  fontSize: vars.fontSizes.large,
});

export const h6 = style({
  letterSpacing: vars.letterSpacings.snug,
  lineHeight: vars.lineHeights.tight,
  fontSize: vars.fontSizes.medium,
});

export const a = style({
  color: "inherit",
  fontWeight: vars.fontWeights.semibold,
  textDecoration: "underline",
  textUnderlineOffset: "4px",
});

export const p = style({
  lineHeight: vars.lineHeights.normal,

  selectors: {
    "&:not(first-child)": {
      marginTop: vars.spacing.x6,
    },
  },
});

export const pre = style({
  backgroundColor: vars.colors.neutral100,
  borderRadius: vars.radii.medium,
  padding: vars.spacing.x2,
});

export const code = style({
  backgroundColor: vars.colors.neutral100,
  borderRadius: vars.radii.medium,
  fontFamily: vars.fonts.mono,
  fontSize: vars.fontSizes.xsmall,
  padding: vars.spacing.x1,
});

export const blockquote = style({});

export const img = style({});
