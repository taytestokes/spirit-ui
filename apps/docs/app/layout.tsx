import type { Metadata } from "next";

import "@spirit-ui/react/styles";

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
    <html lang="en">
      <body className={styles.body}>
        <div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
