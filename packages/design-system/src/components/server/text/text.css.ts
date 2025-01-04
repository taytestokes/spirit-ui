import { style } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { theme } from "../../../styles/vars.css";

const baseTextStyle = style({
  lineHeight: theme.vars.lineHeights.normal,
});

export const textStyles = recipe({
  variants: {
    variant: {
      p: style([
        baseTextStyle,
        style({
          fontSize: theme.vars.fontSizes.base,
        }),
      ]),
      "p-sm": style([
        baseTextStyle,
        style({
          fontSize: theme.vars.fontSizes.sm,
        }),
      ]),
      label: style([
        baseTextStyle,
        style({
          fontSize: theme.vars.fontSizes.sm,
        }),
      ]),
      "label-sm": style([
        baseTextStyle,
        style({
          fontSize: theme.vars.fontSizes.xs,
        }),
      ]),
      button: style([
        baseTextStyle,
        style({
          fontSize: theme.vars.fontSizes.sm,
          fontWeight: theme.vars.fontWeights.medium,
        }),
      ]),
      "button-sm": style([
        baseTextStyle,
        style({
          fontSize: theme.vars.fontSizes.xs,
          fontWeight: theme.vars.fontWeights.medium,
        }),
      ]),
    },
  },
});

export type Variants = RecipeVariants<typeof textStyles>;
