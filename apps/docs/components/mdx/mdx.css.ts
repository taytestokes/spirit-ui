import { style, globalStyle } from "@vanilla-extract/css";
import { theme } from "@spirit-ui/design-system/theme";

const {
  vars: { borderRadius, colors, fonts, fontSizes, space },
} = theme;

export const h1 = style({
  fontSize: fontSizes.xxxxl,
});

export const h2 = style({
  fontSize: fontSizes.xxxl,
});

export const h3 = style({
  fontSize: fontSizes.xxl,
});

export const h4 = style({
  fontSize: fontSizes.xl,
});

export const h5 = style({
  fontSize: fontSizes.lg,
});

export const h6 = style({
  fontSize: fontSizes.md,
});

export const a = style({});

export const p = style({
  marginBlock: space.spacing_4,
});

// TODO:
// Get line numbers to appear in code block
// Need code block to get highlighted

export const pre = style({
  backgroundColor: colors.neutral_100,
  borderRadius: borderRadius.base,
  padding: space.spacing_2,
});

export const code = style({
  backgroundColor: colors.neutral_100,
  borderRadius: borderRadius.base,
  fontFamily: fonts.mono,
  fontSize: fontSizes.sm,
  paddingBlock: space.spacing_0_25,
  paddingInline: space.spacing_0_5,
});

export const blockquote = style({});

export const img = style({});
