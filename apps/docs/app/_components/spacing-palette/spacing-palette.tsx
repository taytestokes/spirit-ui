import React from "react";
import { theme } from "@spirit-ui/theme";

import * as styles from "./spacing-palette.css";

const { vars } = theme;

export const SpacingPalette = () => {
  const spacingKeys = Object.keys(vars.space);

  return (
    <div className={styles.spacingPalette}>
      {spacingKeys.map((spaceKey) => {
        return (
          <div className={styles.spacerRow}>
            <div>{spaceKey}</div>
            <div className={styles.spacerVariant[spaceKey]} />
          </div>
        );
      })}
    </div>
  );
};
