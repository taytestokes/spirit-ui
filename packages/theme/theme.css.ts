import {
  createGlobalTheme,
  createGlobalThemeContract,
} from "@vanilla-extract/css";

import { tokens } from "./tokens";

const getVarName = (_val: string | null, path: string[]) =>
  `spirit-ui-${path.join("-")}`;

const commonColors = {
  blueLightest: tokens.colors.blue400,
  blueLighter: tokens.colors.blue500,
  blueLight: tokens.colors.blue600,
  blueDark: tokens.colors.blue700,
  blueDarker: tokens.colors.blue800,
  blueDarkest: tokens.colors.blue900,
  greenLightest: tokens.colors.green400,
  greenLighter: tokens.colors.green500,
  greenLight: tokens.colors.green600,
  greenDark: tokens.colors.green700,
  greenDarker: tokens.colors.green800,
  greenDarkest: tokens.colors.green900,
  pinkLightest: tokens.colors.pink400,
  pinkLighter: tokens.colors.pink500,
  pinkLight: tokens.colors.pink600,
  pinkDark: tokens.colors.pink700,
  pinkDarker: tokens.colors.pink800,
  pinkDarkest: tokens.colors.pink900,
  purpleLightest: tokens.colors.purple400,
  purpleLighter: tokens.colors.purple500,
  purpleLight: tokens.colors.purple600,
  purpleDark: tokens.colors.purple700,
  purpleDarker: tokens.colors.purple800,
  purpleDarkest: tokens.colors.purple900,
  redLightest: tokens.colors.red400,
  redLighter: tokens.colors.red500,
  redLight: tokens.colors.red600,
  redDark: tokens.colors.red700,
  redDarker: tokens.colors.red800,
  redDarkest: tokens.colors.red900,
  tealLightest: tokens.colors.teal400,
  tealLighter: tokens.colors.teal500,
  tealLight: tokens.colors.teal600,
  tealDark: tokens.colors.teal700,
  tealDarker: tokens.colors.teal800,
  tealDarkest: tokens.colors.teal900,
  yellowLightest: tokens.colors.yellow400,
  yellowLighter: tokens.colors.yellow500,
  yellowLight: tokens.colors.yellow600,
  yellowDark: tokens.colors.yellow700,
  yellowDarker: tokens.colors.yellow800,
  yellowDarkest: tokens.colors.yellow900,
};

const lightNeutrals = {
  neutral0: tokens.colors.gray0,
  neutral50: tokens.colors.gray50,
  neutral100: tokens.colors.gray100,
  neutral200: tokens.colors.gray200,
  neutral300: tokens.colors.gray300,
  neutral400: tokens.colors.gray400,
  neutral500: tokens.colors.gray500,
  neutral600: tokens.colors.gray600,
  neutral700: tokens.colors.gray700,
  neutral800: tokens.colors.gray800,
  neutral900: tokens.colors.gray900,
  neutral950: tokens.colors.gray950,
  neutral1000: tokens.colors.gray1000,
};

const darkNeutrals = {
  neutral0: tokens.colors.zinc1000,
  neutral50: tokens.colors.zinc950,
  neutral100: tokens.colors.zinc900,
  neutral200: tokens.colors.zinc800,
  neutral300: tokens.colors.zinc700,
  neutral400: tokens.colors.zinc600,
  neutral500: tokens.colors.zinc500,
  neutral600: tokens.colors.zinc400,
  neutral700: tokens.colors.zinc300,
  neutral800: tokens.colors.zinc200,
  neutral900: tokens.colors.zinc100,
  neutral950: tokens.colors.zinc50,
  neutral1000: tokens.colors.zinc0,
};

const getColorTokensByMode = (mode: string) => ({
  ...commonColors,
  ...(mode === "light" ? lightNeutrals : darkNeutrals),
});

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
