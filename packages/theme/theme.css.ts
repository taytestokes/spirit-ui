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

const lightTokens = {
  colors: {
    // background
    backgroundPrimary: tokens.colors.white,
    backgroundPrimaryHover: tokens.colors.lightGray100,
    backgroundPrimaryActive: tokens.colors.lightGray200,
    backgroundSecondary: tokens.colors.white50,
    backgroundSecondaryHover: tokens.colors.lightGray200,
    backgroundSecondaryActive: tokens.colors.lightGray300,
    // borders
    border: tokens.colors.lightGray200,
    borderHover: tokens.colors.lightGray400,
    borderActive: tokens.colors.lightGray500,
    // text
    textPrimary: tokens.colors.lightGray950,
    textSecondary: tokens.colors.lightGray900,
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
  },
};

const darkTokens = {
  colors: {
    // background
    backgroundPrimary: tokens.colors.black50,
    backgroundPrimaryHover: tokens.colors.darkGray100,
    backgroundPrimaryActive: tokens.colors.darkGray200,
    backgroundSecondary: tokens.colors.black,
    backgroundSecondaryHover: tokens.colors.darkGray200,
    backgroundSecondaryActive: tokens.colors.darkGray300,
    // borders
    border: tokens.colors.darkGray200,
    borderHover: tokens.colors.darkGray400,
    borderActive: tokens.colors.darkGray500,
    // text
    textPrimary: tokens.colors.darkGray950,
    textSecondary: tokens.colors.darkGray900,
    // blue
    blueLighter: tokens.colors.blue900,
    blueLight: tokens.colors.blue800,
    blue: tokens.colors.blue700,
    blueDark: tokens.colors.blue600,
    blueDarker: tokens.colors.blue500,
    // red
    redLighter: tokens.colors.red900,
    redLight: tokens.colors.red800,
    red: tokens.colors.red700,
    redDark: tokens.colors.red600,
    redDarker: tokens.colors.red500,
    // yellow
    yellowLighter: tokens.colors.yellow900,
    yellowLight: tokens.colors.yellow800,
    yellow: tokens.colors.yellow700,
    yellowDark: tokens.colors.yellow600,
    yellowDarker: tokens.colors.yellow500,
    // green
    greenLighter: tokens.colors.green900,
    greenLight: tokens.colors.green800,
    green: tokens.colors.green700,
    greenDark: tokens.colors.green600,
    greenDarker: tokens.colors.green500,
    // teal
    tealLighter: tokens.colors.teal900,
    tealLight: tokens.colors.teal800,
    teal: tokens.colors.teal700,
    tealDark: tokens.colors.teal600,
    tealDarker: tokens.colors.teal500,
    // purple
    purpleLighter: tokens.colors.purple900,
    purpleLight: tokens.colors.purple800,
    purple: tokens.colors.purple700,
    purpleDark: tokens.colors.purple600,
    purpleDarker: tokens.colors.purple500,
    // pink
    pinkLighter: tokens.colors.pink900,
    pinkLight: tokens.colors.pink800,
    pink: tokens.colors.pink700,
    pinkDark: tokens.colors.pink600,
    pinkDarker: tokens.colors.pink500,
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
