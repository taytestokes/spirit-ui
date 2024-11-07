import type { Metadata } from "next";

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
    <html className={styles.html} lang="en">
      <body>
        <div className={styles.container}>
          <header className={styles.header}></header>
          <main className={styles.main}>{children}</main>
        </div>
      </body>
    </html>
  );
}
