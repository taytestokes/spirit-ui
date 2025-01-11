import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";

import { script } from "./script";

type ThemeContextValue = {
  theme: string | undefined;
  setTheme: (theme: string) => void;
};

type Props = {
  children: React.ReactNode;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const useTheme = () =>
  useContext(ThemeContext) ?? { theme: undefined, setTheme: () => {} };

const getInitialTheme = () => {
  if (typeof window === "undefined") return undefined;
  return window.localStorage.getItem("spirit-ui-theme") || "light";
};

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setThemeState] = useState(() => getInitialTheme());

  const setTheme = useCallback((theme: string) => {
    setThemeState(theme);
    localStorage.setItem("spirit-ui-theme", theme);
  }, []);

  /**
   * Update the :root element and apply the new theme value whenever theme changes.
   */
  useEffect(() => {
    if (theme) {
      document.querySelector(":root")?.setAttribute("data-theme", theme);
    }
  }, [theme]);

  /**
   * Provider values that will be available to consume
   * to any component using the theme context.
   */
  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme, setTheme]
  );

  return (
    <ThemeContext.Provider value={value}>
      <script
        dangerouslySetInnerHTML={{ __html: `(${script.toString()})()` }}
        suppressHydrationWarning
      />
      {children}
    </ThemeContext.Provider>
  );
};
