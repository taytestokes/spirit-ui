import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

import { atoms } from "../../../styles/atoms";

export const text = recipe({
  base: atoms({
    lineHeight: "normal",
  }),
  variants: {
    variant: {
      extraLarge: atoms({
        fontSize: "xl",
      }),
      large: atoms({
        fontSize: "lg",
      }),
      medium: atoms({
        fontSize: "md",
      }),
      base: atoms({
        fontSize: "base",
      }),
      small: atoms({
        fontSize: "sm",
      }),
      extraSmall: atoms({
        fontSize: "xs",
      }),
    },
  },
  defaultVariants: {
    variant: "base",
  },
});

export type Variants = RecipeVariants<typeof text>;
