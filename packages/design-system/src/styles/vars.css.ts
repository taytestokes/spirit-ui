import {
  createGlobalTheme,
  createGlobalThemeContract,
} from "@vanilla-extract/css";

import { Theme } from "./types";

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

const sharedTokens: Omit<Theme, "colors"> = {
  borderStyles: tokens.borderStyles,
  borderWidths: tokens.borderWidths,
  breakPoints: tokens.breakPoints,
  durations: tokens.durations,
  easings: tokens.easings,
  fonts: tokens.fonts,
  fontSizes: tokens.fontSizes,
  fontWeights: tokens.fontWeights,
  lineHeights: tokens.lineHeights,
  letterSpacings: tokens.letterSpacings,
  opacity: tokens.opacity,
  radii: tokens.radii,
  shadows: tokens.shadows,
  spacing: tokens.spacing,
};

const colorVars = createGlobalThemeContract(lightColorTokens, getVarName);

const sharedVars = createGlobalThemeContract(sharedTokens, getVarName);

createGlobalTheme(":root", sharedVars, sharedTokens);
createGlobalTheme('[data-theme="light"]', colorVars, lightColorTokens);
createGlobalTheme('[data-theme="dark"]', colorVars, darkColorTokens);

export type ThemeVars = typeof sharedVars & typeof colorVars;
export const vars = {
  ...colorVars,
  ...sharedVars,
};
