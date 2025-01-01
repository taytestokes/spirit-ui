import type { Metadata } from "next";

// import { ThemeProvider } from "./_components/theme-provider/theme-provider";
import { ThemeProvider } from "@spirit-ui/design-system/client";
import { Sidebar } from "./_components/sidebar/sidebar";

/**
 * Imports the external style sheets from spirit-ui
 * design system.
 */
import "@spirit-ui/design-system/reset";
import "@spirit-ui/design-system/styles";

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
