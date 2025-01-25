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
        fontSize: "xxxxlarge",
      }),

      h2: atoms({
        fontSize: "xxxlarge",
      }),
      h3: atoms({
        fontSize: "xxlarge",
      }),
      h4: atoms({
        fontSize: "xlarge",
      }),
      h5: atoms({
        fontSize: "large",
      }),
      h6: atoms({
        fontSize: "medium",
      }),
    },
  },
});

export type HeadingVariants = RecipeVariants<typeof heading>;
