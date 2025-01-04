import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

import { theme } from "../../../styles/vars.css";

const {
  vars: { fontSizes, fontWeights, letterSpacings, lineHeights },
} = theme;

export const headingStyles = recipe({
  base: {
    fontWeight: fontWeights.bold,
    letterSpacing: letterSpacings.snug,
    lineHeight: lineHeights.tight,
  },
  variants: {
    variant: {
      h1: {
        fontSize: fontSizes.xxxxl,
      },
      h2: {
        fontSize: fontSizes.xxxl,
      },
      h3: {
        fontSize: fontSizes.xxl,
      },
      h4: {
        fontSize: fontSizes.xl,
      },
      h5: {
        fontSize: fontSizes.lg,
      },
      h6: {
        fontSize: fontSizes.md,
      },
    },
  },
});

export type HeadingRecipeVariants = RecipeVariants<typeof headingStyles>;
