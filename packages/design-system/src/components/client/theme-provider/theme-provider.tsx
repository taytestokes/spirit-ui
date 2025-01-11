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
  theme: string;
  setTheme: (theme: string) => void;
};

type Props = {
  children: React.ReactNode;
  defaultTheme?: string;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const ThemeProvider = ({ children, defaultTheme = "light" }: Props) => {
  const [theme, setThemeState] = useState(defaultTheme);

  const setTheme = useCallback((theme: string) => {
    setThemeState(theme);
    localStorage.setItem("spirit-ui-theme", theme);
  }, []);

  /**
   * On initial hydration, we will pull the prefered theme from local storage
   * and set the theme state to that value if it exists. If not, we will
   * use the default theme.
   */
  useEffect(() => {
    const storedTheme =
      window.localStorage.getItem("spirit-ui-theme") || defaultTheme;

    setThemeState(storedTheme);
  }, []);

  /**
   * Update the :root element and apply the new theme value whenever theme changes.
   */
  useEffect(() => {
    document.querySelector(":root")?.setAttribute("data-theme", theme);
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
      />
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw Error("Must be used within ThemeProvider");
  return context;
};
