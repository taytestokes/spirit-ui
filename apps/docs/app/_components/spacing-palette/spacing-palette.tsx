import React from "react";
import { theme } from "@spirit-ui/theme";

import * as styles from "./spacing-palette.css";

const calcRem = (px: string | number, base: number = 16) => {
  const tempPx = `${px}`.replace("px", "");
  return `${parseInt(tempPx) / base}rem`;
};

const headers = ["Token", "Multiplier", "REM", "PX", "Visual"];

const rows = Object.keys(theme.tokens.space).map((token) => {
  const multiplier = `x${token.replace("spacing_", "").split("_").join(".")}`;
  const px = theme.tokens.space[token];
  const rem = calcRem(px);

  return {
    multiplier,
    px,
    rem,
    token,
  };
});

export const SpacingPalette = () => (
  <div className={styles.wrapper}>
    <table className={styles.table}>
      <thead>
        <tr className={styles.tr}>
          {headers.map((header) => (
            <th className={styles.th} key={header}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr className={styles.tr} key={row.token}>
            <td className={styles.td}>
              <span className={styles.token}>{row.token}</span>
            </td>
            <td className={styles.td}>{row.multiplier}</td>
            <td className={styles.td}>{row.rem}</td>
            <td className={styles.td}>{row.px}</td>
            <td className={styles.td}>
              <div className={styles.visualVariant[row.token]} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
