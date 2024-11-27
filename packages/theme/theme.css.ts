import {
  createGlobalTheme,
  createGlobalThemeContract,
} from "@vanilla-extract/css";

import { tokens } from "./tokens";

/**
 * Used when creating a theme contract to format the
 * css variable name correctly.
 */
const getVarName = (_val: string | null, path: string[]) =>
  `spirit-ui-${path.join("-")}`;

const sharedColorTokens = {
  // blue
  blueLighter: tokens.colors.blue500,
  blueLight: tokens.colors.blue600,
  blue: tokens.colors.blue700,
  blueDark: tokens.colors.blue800,
  blueDarker: tokens.colors.blue900,
  // red
  redLighter: tokens.colors.red500,
  redLight: tokens.colors.red600,
  red: tokens.colors.red700,
  redDark: tokens.colors.red800,
  redDarker: tokens.colors.red900,
  // yellow
  yellowLighter: tokens.colors.yellow500,
  yellowLight: tokens.colors.yellow600,
  yellow: tokens.colors.yellow700,
  yellowDark: tokens.colors.yellow800,
  yellowDarker: tokens.colors.yellow900,
  // green
  greenLighter: tokens.colors.green500,
  greenLight: tokens.colors.green600,
  green: tokens.colors.green700,
  greenDark: tokens.colors.green800,
  greenDarker: tokens.colors.green900,
  // teal
  tealLighter: tokens.colors.teal500,
  tealLight: tokens.colors.teal600,
  teal: tokens.colors.teal700,
  tealDark: tokens.colors.teal800,
  tealDarker: tokens.colors.teal900,
  // purple
  purpleLighter: tokens.colors.purple500,
  purpleLight: tokens.colors.purple600,
  purple: tokens.colors.purple700,
  purpleDark: tokens.colors.purple800,
  purpleDarker: tokens.colors.purple900,
  // pink
  pinkLighter: tokens.colors.pink500,
  pinkLight: tokens.colors.pink600,
  pink: tokens.colors.pink700,
  pinkDark: tokens.colors.pink800,
  pinkDarker: tokens.colors.pink900,
};

const lightTokens = {
  colors: {
    // background
    background: tokens.colors.white,
    // foreground
    foreground: tokens.colors.black,
    // neutral
    neutral50: tokens.colors.lightGray50,
    neutral100: tokens.colors.lightGray100,
    neutral200: tokens.colors.lightGray200,
    neutral300: tokens.colors.lightGray300,
    neutral4000: tokens.colors.lightGray400,
    neutral500: tokens.colors.lightGray500,
    neutral600: tokens.colors.lightGray600,
    neutral700: tokens.colors.lightGray700,
    neutral800: tokens.colors.lightGray800,
    neutral900: tokens.colors.lightGray900,
    neutral950: tokens.colors.lightGray950,
    ...sharedColorTokens,
  },
};

const darkTokens = {
  colors: {
    // background
    background: tokens.colors.black,
    // foreground
    foreground: tokens.colors.white,
    // neutral
    neutral50: tokens.colors.darkGray50,
    neutral100: tokens.colors.darkGray100,
    neutral200: tokens.colors.darkGray200,
    neutral300: tokens.colors.darkGray300,
    neutral4000: tokens.colors.darkGray400,
    neutral500: tokens.colors.darkGray500,
    neutral600: tokens.colors.darkGray600,
    neutral700: tokens.colors.darkGray700,
    neutral800: tokens.colors.darkGray800,
    neutral900: tokens.colors.darkGray900,
    neutral950: tokens.colors.darkGray950,
    ...sharedColorTokens,
  },
};

const baseTokens = {
  fonts: tokens.fonts,
  fontSizes: tokens.fontSizes,
  fontWeights: tokens.fontWeights,
  space: tokens.space,
};

const baseVars = createGlobalThemeContract(baseTokens, getVarName);
const colorVars = createGlobalThemeContract(lightTokens, getVarName);

createGlobalTheme('[data-theme="light"]', colorVars, lightTokens);
createGlobalTheme('[data-theme="dark"]', colorVars, darkTokens);

createGlobalTheme(":root", baseVars, baseTokens);

export const theme = { ...colorVars, ...baseVars };
