import React from "react";
import Link from "next/link";

import * as styles from "./sidebar.css";

type NavLinkProps = {
  path: string;
};

const NavLink = ({ children, path }: React.PropsWithChildren<NavLinkProps>) => (
  <Link className={styles.navLink} href={path}>
    {children}
  </Link>
);

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <div className={styles.section}>
          <p className={styles.sectionLabel}>Foundations</p>
          <ul className={styles.sectionLinks}>
            <li>
              <NavLink path="/colors">Colors</NavLink>
            </li>
            <li>
              <NavLink path="/spacing">Spacing</NavLink>
            </li>
            <li>
              <NavLink path="/typography">Typography</NavLink>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <p className={styles.sectionLabel}>Components</p>
          <ul className={styles.sectionLinks}>
            <li>
              <NavLink path="/text">Text</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};
