import { createGlobalTheme } from "@vanilla-extract/css";

import { tokens } from "./tokens";

const light = {
  colors: {
    // background
    backgroundPrimary: tokens.colors.white,
    backgroundPrimaryHover: tokens.colors.gray100,
    backgroundPrimaryActive: tokens.colors.gray200,
    backgroundSecondary: tokens.colors.white50,
    backgroundSecondaryHover: tokens.colors.gray200,
    backgroundSecondaryActive: tokens.colors.gray300,
    // borders
    border: tokens.colors.gray200,
    borderHover: tokens.colors.gray400,
    borderActive: tokens.colors.gray500,
    // text
    textPrimary: tokens.colors.gray950,
    textSecondary: tokens.colors.gray900,
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
  fonts: tokens.fonts,
  fontSizes: tokens.fontSizes,
  fontWeights: tokens.fontWeights,
  space: tokens.space,
};

export const theme = createGlobalTheme(":root", light);
