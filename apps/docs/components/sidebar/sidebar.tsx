import React from "react";

import { Text } from "@spirit-ui/design-system/server";

import { SidebarLink } from "./sidebar-link";

import { sitemap } from "@/config/sitemap";

import * as classes from "./sidebar.css";

export const Sidebar = () => {
  return (
    <aside className={classes.sidebar}>
      <nav className={classes.content}>
        {sitemap.sidebar.map((section) => (
          <div className={classes.group} key={section.title}>
            <Text
              color="neutral900"
              className={classes.groupLabel}
              variant="extraSmall"
            >
              {section.title}
            </Text>
            <ul className={classes.groupMenu}>
              {section.items.map((item) => (
                <li className={classes.groupMenuItem} key={item.title}>
                  <SidebarLink path={item.href}>{item.title}</SidebarLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};
