import {
  createGlobalTheme,
  createGlobalThemeContract,
} from "@vanilla-extract/css";

import { tokens } from "../tokens";

const getVarName = (_val: string | null, path: string[]) =>
  `spirit-ui-${path.join("-")}`.replace("_", "-");

const getColorTokensByMode = (mode: string) =>
  mode === "light" ? tokens.colors.light : tokens.colors.dark;

const lightColorTokens = {
  colors: getColorTokensByMode("light"),
};

const darkColorTokens = {
  colors: getColorTokensByMode("dark"),
};

const sharedTokens = {
  fonts: tokens.fonts,
  fontSizes: tokens.fontSizes,
  fontWeights: tokens.fontWeights,
  space: tokens.space,
  lineHeights: tokens.lineHeights,
  letterSpacings: tokens.letterSpacings,
};

const colorVars = createGlobalThemeContract(lightColorTokens, getVarName);

const sharedVars = createGlobalThemeContract(sharedTokens, getVarName);

createGlobalTheme(":root", sharedVars, sharedTokens);
createGlobalTheme('[data-theme="light"]', colorVars, lightColorTokens);
createGlobalTheme('[data-theme="dark"]', colorVars, darkColorTokens);

/**
 * Theme object that provides the theme in both variable and token values.
 */
export const theme = {
  vars: {
    ...colorVars,
    ...sharedVars,
  },
  tokens: {
    colors: {
      light: lightColorTokens,
      dark: darkColorTokens,
    },
    ...sharedTokens,
  },
};
