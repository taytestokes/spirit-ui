import React from "react";
import { theme } from "@spirit-ui/theme";

import * as styles from "./spacing-palette.css";

export const SpacingPalette = () => {
  const spacingKeys = Object.keys(theme.space);

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
