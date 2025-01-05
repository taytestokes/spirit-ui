import type { Metadata } from "next";

/**
 * Imports the external style sheets from spirit-ui
 * design system. This will include all of the variables
 * and utility classes from the design system.
 */
import "@spirit-ui/design-system/styles";

import { ThemeProvider } from "@spirit-ui/design-system/client";
import { Sidebar } from "./_components/sidebar/sidebar";

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
    <ThemeProvider>
      <html className={classes.html} lang="en">
        <body>
          <main className={classes.main}>
            <Sidebar />
            <section className={classes.content}>{children}</section>
          </main>
        </body>
      </html>
    </ThemeProvider>
  );
}
