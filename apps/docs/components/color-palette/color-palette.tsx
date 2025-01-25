import React from "react";
import { vars } from "@spirit-ui/design-system/theme";

import * as styles from "./color-palette.css";

type ThemeVarColor = keyof typeof vars.colors;

type ColorRowProps = {
  color:
    | "neutral"
    | "blue"
    | "red"
    | "yellow"
    | "green"
    | "teal"
    | "purple"
    | "pink";
};

const ColorRow = ({ color }: ColorRowProps) => {
  const colorKeys = Object.keys(vars.colors).filter((colorVar) =>
    colorVar.startsWith(color)
  );

  return (
    <div className={styles.colorRow}>
      <p className={styles.rowLabel}>{color}</p>
      <div className={styles.colorBoxes}>
        {colorKeys.map((color) => (
          <div
            className={styles.colorBoxVariant[color as ThemeVarColor]}
            key={color}
          />
        ))}
      </div>
    </div>
  );
};

export const ColorPalette = () => (
  <div className={styles.palette}>
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
