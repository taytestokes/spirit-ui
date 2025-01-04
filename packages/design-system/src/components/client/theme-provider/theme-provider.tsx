import React, { createContext, useContext, useEffect, useState } from "react";

// TODO:
// - Figure out how to prevent flash of theme - need inject the theme script into the html to run on the server
// - https://www.joshwcomeau.com/react/dark-mode/

type ThemeContextValue = {
  theme: string;
  toggleTheme(): void;
};

type Props = {
  attribute?: string;
  children: React.ReactNode;
  defaultTheme?: "light" | "dark";
  element?: string;
  storageKey?: string;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const ThemeProvider = ({
  attribute = "data-theme",
  children,
  defaultTheme = "light",
  element = ":root",
  storageKey = "spirit-ui-theme",
}: Props) => {
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem(storageKey, newTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem(storageKey);
    if (!storedTheme) return localStorage.setItem(storageKey, defaultTheme);
    if (storedTheme === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    document.querySelector(element)?.setAttribute(attribute, theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw Error("Must be used within ThemeProvider");
  return context;
};
