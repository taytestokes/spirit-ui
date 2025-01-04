import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

import { atoms } from "../../../styles/atoms";

export const heading = recipe({
  base: atoms({
    fontWeight: "semibold",
    letterSpacing: "snug",
    lineHeight: "tight",
  }),
  variants: {
    variant: {
      h1: atoms({
        fontSize: "xxxxl",
      }),

      h2: atoms({
        fontSize: "xxxl",
      }),
      h3: atoms({
        fontSize: "xxl",
      }),
      h4: atoms({
        fontSize: "xl",
      }),
      h5: atoms({
        fontSize: "lg",
      }),
      h6: atoms({
        fontSize: "md",
      }),
    },
  },
});

export type HeadingVariants = RecipeVariants<typeof heading>;
