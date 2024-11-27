import React from "react";
import { theme } from "@spirit-ui/theme";

import * as styles from "./color-pallete.css";

const getColorKeys = (colors, key) =>
  Object.keys(colors).filter((color) => color.startsWith(key));

const ColorRow = ({ color }) => {
  const colorKeys = getColorKeys(theme.colors, color);

  return (
    <div className={styles.colorRow}>
      <p className={styles.rowLabel}>{color}</p>
      <div className={styles.colorBoxes}>
        {colorKeys.map((color) => (
          <div className={styles.colorBoxVariant[color]} key={color} />
        ))}
      </div>
    </div>
  );
};

export const ColorPallete = () => {
  return (
    <div className={styles.colorPallete}>
      <ColorRow color={"background"} />
      <ColorRow color={"foreground"} />
      <ColorRow color={"neutral"} />
      <ColorRow color={"blue"} />
      <ColorRow color={"red"} />
      <ColorRow color={"yellow"} />
      <ColorRow color={"green"} />
      <ColorRow color={"teal"} />
      <ColorRow color={"purple"} />
      <ColorRow color={"pink"} />
    </div>
  );
};
