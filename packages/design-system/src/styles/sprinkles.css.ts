import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

import { vars } from "./vars.css";

import "./reset.css";

const {
  borderStyles,
  borderWidths,
  breakPoints,
  colors,
  durations,
  easings,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  opacity,
  radii,
  shadows,
  spacing,
} = vars;

const colorProperties = defineProperties({
  properties: {
    background: colors,
    backgroundColor: colors,
    borderColor: colors,
    color: colors,
  },
  conditions: {
    light: {},
    dark: {},
  },
  defaultCondition: "light",
});

const responsiveProperties = defineProperties({
  properties: {
    alignItems: ["flex-start", "center", "flex-end", "stretch", "baseline"],
    alignSelf: ["flex-start", "center", "flex-end", "stretch", "baseline"],
    borderRadius: radii,
    borderStyle: borderStyles,
    borderWidth: borderWidths,
    display: ["block", "flex", "grid", "inline-block", "none", "contents"],
    flexDirection: ["column", "row", "column-reverse", "row-reverse"],
    flexGrow: [0, 1, 2, 3, 4],
    flexShrink: [0, 1, 2, 3, 4],
    flexWrap: ["wrap", "nowrap"],
    fontSize: { ...fontSizes, inherit: "inherit" },
    fontWeight: fontWeights,
    gap: spacing,
    height: spacing,
    justifyContent: [
      "flex-start",
      "center",
      "flex-end",
      "stretch",
      "space-around",
      "space-between",
    ],
    justifySelf: [
      "flex-start",
      "center",
      "flex-end",
      "stretch",
      "space-around",
      "space-between",
    ],
    letterSpacing: letterSpacings,
    lineHeight: lineHeights,
    margin: spacing,
    marginBottom: spacing,
    marginLeft: spacing,
    marginRight: spacing,
    marginTop: spacing,
    padding: spacing,
    paddingBottom: spacing,
    paddingLeft: spacing,
    paddingRight: spacing,
    paddingTop: spacing,
    width: spacing,
  },
});

const unresponsiveProperties = defineProperties({
  properties: {
    cursor: ["cursor", "pointer"],
    fontFamily: fonts,
  },
});

export const sprinkles = createSprinkles(
  colorProperties,
  responsiveProperties,
  unresponsiveProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
