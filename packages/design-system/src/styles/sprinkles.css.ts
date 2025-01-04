import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

import { theme } from "./vars.css";

// Ensure
import "./reset.css";

const {
  vars: {
    borderStyles,
    colors,
    fonts,
    fontSizes,
    fontWeights,
    letterSpacings,
    lineHeights,
    space,
  },
} = theme;

const colorProperties = defineProperties({
  properties: {
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
    borderWidth: borderStyles,
    display: ["block", "flex", "grid", "inline-block", "none", "contents"],
    flexDirection: ["column", "row", "column-reverse", "row-reverse"],
    flexGrow: [0, 1, 2, 3, 4],
    flexShrink: [0, 1, 2, 3, 4],
    flexWrap: ["wrap", "nowrap"],
    fontSize: { ...fontSizes, inherit: "inherit" },
    fontWeight: fontWeights,
    gap: space,
    height: space,
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
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    paddingTop: space,
  },
});

// PICK UP HERE
// - Finish adding the available css properties to sprinkles
// - Revisit tokens naming
// - Finish adding all tokens

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
