import {
  createGlobalTheme,
  createGlobalThemeContract,
} from "@vanilla-extract/css";

import { tokens } from "../tokens";

const getVarName = (_val: string | null, path: string[]) =>
  `spirit-ui-${path.join("-")}`.replace("_", "-");

const getColorTokensByMode = (mode: string) =>
  mode === "light" ? tokens.colors.light : tokens.colors.dark;

const lightModeTokens = {
  colors: getColorTokensByMode("light"),
};

const darkModeTokens = {
  colors: getColorTokensByMode("dark"),
};

const sharedTokens = {
  borderStyles: tokens.borderStyles,
  fonts: tokens.fonts,
  fontSizes: tokens.fontSizes,
  fontWeights: tokens.fontWeights,
  space: tokens.space,
  lineHeights: tokens.lineHeights,
  letterSpacings: tokens.letterSpacings,
};

const colorVars = createGlobalThemeContract(lightModeTokens, getVarName);
const sharedVars = createGlobalThemeContract(sharedTokens, getVarName);

createGlobalTheme(":root", sharedVars, sharedTokens);
createGlobalTheme('[data-theme="light"]', colorVars, lightModeTokens);
createGlobalTheme('[data-theme="dark"]', colorVars, darkModeTokens);

export const vars = {
  ...colorVars,
  ...sharedVars,
};
