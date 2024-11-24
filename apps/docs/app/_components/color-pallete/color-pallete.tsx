import React from "react";
import { tokens } from "@spirit-ui/theme/tokens";

import * as styles from "./color-pallete.css";

const getColorKeys = (colors, key) =>
  Object.keys(colors).filter((color) => color.startsWith(key));

const ColorRow = ({ color }) => {
  const colorKeys = getColorKeys(tokens.colors, color);

  return (
    <div className={styles.colorRow}>
      <p className={styles.rowLabel}>{color}</p>
      <div className={styles.colorBoxes}>
        {colorKeys.reverse().map((color) => (
          <div className={styles.colorBoxVariant[color]} />
        ))}
      </div>
    </div>
  );
};

export const ColorPallete = () => {
  return (
    <div className={styles.colorPallete}>
      <ColorRow color={"gray"} />
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
