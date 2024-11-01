import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

import { theme } from "./theme.css";

// TODO: Revisit using sprinkles
const colorProperties = defineProperties({
  properties: {
    color: theme.colors,
  },
});

export const sprinkles = createSprinkles(colorProperties);
