import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

import { atoms } from "../../../styles/atoms";

export const textStyles = recipe({
  base: atoms({
    lineHeight: "normal",
  }),
  variants: {
    variant: {
      p: atoms({
        fontSize: "base",
      }),
      "p-sm": atoms({
        fontSize: "sm",
      }),
      label: atoms({
        fontSize: "sm",
      }),
      "label-sm": atoms({
        fontSize: "xs",
      }),
      button: atoms({
        fontSize: "sm",
        fontWeight: "medium",
      }),
      "button-sm": atoms({
        fontSize: "xs",
        fontWeight: "medium",
      }),
    },
  },
});

export type Variants = RecipeVariants<typeof textStyles>;
