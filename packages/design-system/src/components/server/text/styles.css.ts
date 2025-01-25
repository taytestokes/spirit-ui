import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

import { atoms } from "../../../styles/atoms";

export const text = recipe({
  base: atoms({
    lineHeight: "normal",
  }),
  variants: {
    variant: {
      extraLarge: atoms({
        fontSize: "xlarge",
      }),
      large: atoms({
        fontSize: "large",
      }),
      medium: atoms({
        fontSize: "medium",
      }),
      base: atoms({
        fontSize: "base",
      }),
      small: atoms({
        fontSize: "small",
      }),
      extraSmall: atoms({
        fontSize: "xsmall",
      }),
    },
  },
  defaultVariants: {
    variant: "base",
  },
});

export type Variants = RecipeVariants<typeof text>;
