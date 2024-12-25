import type { Metadata } from "next";
import { ThemeProvider } from "./_components/theme-provider/theme-provider";
import { ThemeSwitcher } from "./_components/theme-switcher/theme-switcher";
import { Sidebar } from "./_components/sidebar/sidebar";

import "@spirit-ui/design-system/reset";
import "@spirit-ui/design-system/styles";

import * as styles from "./layout.css";

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
      <html className={styles.html} lang="en">
        <body>
          <div className={styles.headerWrapper}>
            <header className={styles.header}>
              <div className={styles.headerContent}>
                <h3>Spirit UI</h3>
                <ThemeSwitcher />
              </div>
            </header>
          </div>

          <main className={styles.main}>
            <Sidebar />
            <div className={styles.content}>{children}</div>
          </main>
        </body>
      </html>
    </ThemeProvider>
  );
}
