"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeContextValue = {
  mode: string;
  setMode(mode: string): void;
};

type Props = {
  children: React.ReactNode;
  defaultMode?: string;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const ThemeProvider = ({ children, defaultMode = "light" }: Props) => {
  const [mode, setMode] = useState(defaultMode);

  /**
   *
   */
  useEffect(() => {
    const systemColorScheme = window.matchMedia("(prefers-color-scheme: dark)");
  }, []);

  /**
   *
   */
  useEffect(() => {
    const root = document.querySelector(":root");

    if (root) {
      root.setAttribute("data-theme", mode);
    }
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw Error("Must be used within ThemeProvider");
  return context;
};
