import { createGlobalTheme } from "@vanilla-extract/css";

const color = {
  // Neutrals
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

  // Green
  green100: "#e1fdd9",
  green200: "#bdfbb4",
  green300: "#8ff58d",
  green400: "#6feb78",
  green500: "#42de5c",
  green600: "#30be55",
  green700: "#219f4e",
  green800: "#158045",
  green900: "#0c6a3f",

  // Pink
  pink100: "#fdd9ea",
  pink200: "#fbb4db",
  pink300: "#f58dd0",
  pink400: "#eb6fca",
  pink500: "#de42c4",
  pink600: "#be30b4",
  pink700: "#9d219f",
  pink800: "#741580",
  pink900: "#560c6a",

  // Blue
  blue100: "#ccfaff",
  blue200: "#99f0ff",
  blue300: "#66deff",
  blue400: "#3fcaff",
  blue500: "#00a9ff",
  blue600: "#0083db",
  blue700: "#0062b7",
  blue800: "#004593",
  blue900: "#00317a",

  // Orange
  orange100: "#ffeecc",
  orange200: "#ffd899",
  orange300: "#ffbd66",
  orange400: "#ffa23f",
  orange500: "#ff7600",
  orange600: "#db5900",
  orange700: "#b74100",
  orange800: "#932c00",
  orange900: "#7a1e00",

  // Red
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

export const theme = createGlobalTheme(":root", {
  color,
});
