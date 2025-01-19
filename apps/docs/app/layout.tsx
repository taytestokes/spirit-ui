import type { Metadata } from "next";

/**
 * Imports the external style sheets from spirit-ui
 * design system. This will include all of the variables
 * and utility classes from the design system.
 */
import "@spirit-ui/design-system/styles";

import { ThemeProvider } from "@spirit-ui/design-system/client";
import { Text } from "@spirit-ui/design-system/server";

import { Sidebar } from "./_components/sidebar/sidebar";
import { ThemeSwitcher } from "./_components/theme-switcher/theme-switcher";

import * as classes from "./layout.css";

export const metadata: Metadata = {
  title: "Spirit UI",
  description: "Documentation for the Spirit UI Design System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={classes.html} lang="en" suppressHydrationWarning>
      <body className={classes.body}>
        <ThemeProvider>
          <header className={classes.header}>
            <Text weight="semibold">Spirit Design System</Text>
            <ThemeSwitcher />
          </header>
          <main className={classes.main}>
            <Sidebar />
            <div className={classes.content}>{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
