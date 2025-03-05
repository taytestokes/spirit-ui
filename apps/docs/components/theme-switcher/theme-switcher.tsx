"use client";

import React from "react";
import { Icon, useTheme } from "@spirit-ui/design-system/components";

import * as styles from "./theme-switcher.css";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      className={styles.themeSwitcher}
      onClick={() => setTheme(isLight ? "dark" : "light")}
    >
      {isLight ? <Icon name="MoonIcon" /> : <Icon name="SunIcon" />}
    </button>
  );
};
