"use client";

import React from "react";
import { theme } from "@spirit-ui/theme";

import { useTheme } from "../theme-provider/theme-provider";

import * as styles from "./color-palette.css";

const ColorBox = () => {};

const ColorRow = ({ color }: { color: string }) => {
  const { mode } = useTheme();

  const colorKeys = Object.keys(theme.vars.colors).filter((colorVar) =>
    colorVar.startsWith(color)
  );

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

export const ColorPalette = () => {
  // Display color var and token value
  return (
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
};
