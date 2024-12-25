import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { theme } from "../../styles/vars.css";

type ThemeColor = keyof typeof theme.vars.colors;

type ColorVariant = Record<"color", ThemeColor>;

const getColorVariants = () => {
  const colorkeys = Object.keys(theme.vars.colors) as ThemeColor[];
  return colorkeys.reduce(
    (obj, key) => {
      const colorVar = theme.vars.colors[key] as ThemeColor;
      obj[key] = {
        color: colorVar,
      };
      return obj;
    },
    {} as Record<ThemeColor, ColorVariant>
  );
};

const color = getColorVariants();

const variant = {
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
    lineHeight: theme.vars.lineHeights.normal,
  },
  "paragraph-sm": {
    fontSize: theme.vars.fontSizes.sm,
    lineHeight: theme.vars.lineHeights.normal,
  },
};

export const styles = recipe({
  base: {
    fontWeight: theme.vars.fontWeights.regular,
    lineHeight: theme.vars.lineHeights.normal,
  },
  variants: {
    variant,
    color,
  },
});

export type Variants = RecipeVariants<typeof styles>;
