import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { theme } from "@spirit-ui/theme";

// TODO: Write heading code
export const variants = recipe({
  base: {
    fontWeight: theme.vars.fontWeights.bold,
  },
  variants: {
    level: {
      1: {
        fontSize: theme.vars.fontSizes.xxxxl,
      },
      2: {
        fontSize: theme.vars.fontSizes.xxxl,
      },
      3: {
        fontSize: theme.vars.fontSizes.xxl,
      },
      4: {
        fontSize: theme.vars.fontSizes.xl,
      },
      5: {
        fontSize: theme.vars.fontSizes.lg,
      },
      6: {
        fontSize: theme.vars.fontSizes.md,
      },
    },
  },
});
