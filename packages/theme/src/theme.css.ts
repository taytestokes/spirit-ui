import { createGlobalTheme } from "@vanilla-extract/css";
import { tokens } from "./tokens";

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export const theme = createGlobalTheme(":root", tokens);
