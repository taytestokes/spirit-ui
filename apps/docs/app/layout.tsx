import type { Metadata } from "next";

/**
 * Imports the external style sheets from spirit-ui
 * design system. This will include all of the variables
 * and utility classes from the design system.
 */
import "@spirit-ui/design-system/styles";

import "../styles/globals.css";

import { ThemeProvider } from "@spirit-ui/design-system/components";

import { Header } from "@/components/header";

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
          <Header />
          <main className={classes.main}>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
