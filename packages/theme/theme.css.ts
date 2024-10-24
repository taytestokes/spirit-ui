import { createGlobalTheme } from "@vanilla-extract/css";

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

const fontSizes = {
  // Heading sizes move in units of 8 pixels
  heading5XL: "72px",
  heading4XL: "64px",
  heading3XL: "56px",
  heading2XL: "48px",
  headingXL: "40px",
  headingL: "32px",
  headingM: "24px",
  headingS: "16px",

  // Text sizes move in units of 4 pixels
  textXL: "24px",
  textL: "20px",
  textM: "16px",
  textS: "12px",
  textXS: "8px",
};

const fontWeights = {
  regular: "400",
  semibold: "600",
  bold: "700",
};

const colors = {
  neutral50: "#ffffff",
  neutral100: "#fafafa",
  neutral200: "#eaeaea",
  neutral300: "#999999",
  neutral400: "#888888",
  neutral500: "#666666",
  neutral600: "#444444",
  neutral700: "#333333",
  neutral800: "#111111",
  neutral900: "#000000",

  green100: "#e1fdd9",
  green200: "#bdfbb4",
  green300: "#8ff58d",
  green400: "#6feb78",
  green500: "#42de5c",
  green600: "#30be55",
  green700: "#219f4e",
  green800: "#158045",
  green900: "#0c6a3f",

  pink100: "#fdd9ea",
  pink200: "#fbb4db",
  pink300: "#f58dd0",
  pink400: "#eb6fca",
  pink500: "#de42c4",
  pink600: "#be30b4",
  pink700: "#9d219f",
  pink800: "#741580",
  pink900: "#560c6a",

  blue100: "#ccfaff",
  blue200: "#99f0ff",
  blue300: "#66deff",
  blue400: "#3fcaff",
  blue500: "#00a9ff",
  blue600: "#0083db",
  blue700: "#0062b7",
  blue800: "#004593",
  blue900: "#00317a",

  orange100: "#ffeecc",
  orange200: "#ffd899",
  orange300: "#ffbd66",
  orange400: "#ffa23f",
  orange500: "#ff7600",
  orange600: "#db5900",
  orange700: "#b74100",
  orange800: "#932c00",
  orange900: "#7a1e00",

  red100: "#ffe4d8",
  red200: "#ffc2b2",
  red300: "#ff9a8b",
  red400: "#ff746f",
  red500: "#ff3f49",
  red600: "#db2e46",
  red700: "#b71f42",
  red800: "#93143c",
  red900: "#7a0c39",
};

const spacings = {
  spacing2XS: "2px",
  spacingXS: "4px",
  spacingS: "8px",
  spacingM: "12px",
  spacingL: "16px",
  spacingXL: "24px",
  spacing2XL: "32px",
  spacing3XL: "40px",
  spacing4XL: "48px",
  spacing5XL: "56px",
  spacing6XL: "64px",
  spacing7XL: "72px",
  spacing8XL: "80px",
  spacing9XL: "88px",
  spacing10XL: "96px",
  spacing11XL: "104px",
  spacing12XL: "112px",
};

export const theme = createGlobalTheme(":root", {
  colors,
  fontSizes,
  fontWeights,
  spacings,
});
