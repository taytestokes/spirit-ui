import { theme } from "@spirit-ui/theme";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const variants = recipe({
  base: {
    fontWeight: theme.vars.fontWeights.regular,
    lineHeight: theme.vars.lineHeights.normal,
  },
  variants: {
    variant: {
      h1: {
        fontSize: theme.vars.fontSizes.xxxxl,
        fontWeight: theme.vars.fontWeights.bold,
        lineHeight: theme.vars.lineHeights.tight,
      },
      h2: {
        fontSize: theme.vars.fontSizes.xxxl,
        fontWeight: theme.vars.fontWeights.bold,
        lineHeight: theme.vars.lineHeights.tight,
      },
      h3: {
        fontSize: theme.vars.fontSizes.xxl,
        fontWeight: theme.vars.fontWeights.bold,
        lineHeight: theme.vars.lineHeights.tight,
      },
      h4: {
        fontSize: theme.vars.fontSizes.xl,
        fontWeight: theme.vars.fontWeights.bold,
        lineHeight: theme.vars.lineHeights.tight,
      },
      h5: {
        fontSize: theme.vars.fontSizes.lg,
        fontWeight: theme.vars.fontWeights.bold,
        lineHeight: theme.vars.lineHeights.tight,
      },
      h6: {
        fontSize: theme.vars.fontSizes.md,
        fontWeight: theme.vars.fontWeights.bold,
        lineHeight: theme.vars.lineHeights.tight,
      },
      paragraph: {
        fontSize: theme.vars.fontSizes.base,
      },
      "paragraph-sm": {
        fontSize: theme.vars.fontSizes.sm,
      },
    },
  },
  compoundVariants: [],
  defaultVariants: {},
});

export type TextVariants = RecipeVariants<typeof variants>;
