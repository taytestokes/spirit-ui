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

const disableAnimations = () => {
  const css = document.createElement("style");
  css.appendChild(
    document.createTextNode(
      `*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`
    )
  );
  document.head.appendChild(css);

  return () => {
    window.getComputedStyle(document.body);
    document.head.removeChild(css);
  };
};

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setThemeState] = useState(() => getInitialTheme());

  const setTheme = useCallback((theme: string) => {
    setThemeState(theme);
    localStorage.setItem("spirit-ui-theme", theme);
  }, []);

  useEffect(() => {
    if (theme) {
      const enableAnimatinos = disableAnimations();
      document.querySelector(":root")?.setAttribute("data-theme", theme);
      enableAnimatinos();
    }
  }, [theme]);

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
