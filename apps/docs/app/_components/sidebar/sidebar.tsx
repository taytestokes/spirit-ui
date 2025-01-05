import React from "react";

import { Text } from "@spirit-ui/design-system/server";

import { SidebarLink } from "./sidebar-link";
import { ThemeSwitcher } from "../theme-switcher/theme-switcher";
import { GhostIcon } from "../icons/ghost-icon";

import * as classes from "./sidebar.css";

export const Sidebar = () => {
  return (
    <aside className={classes.sidebar}>
      <div className={classes.header}>
        {/* <div className={classes.icon}> */}
        <GhostIcon height="24" width="24" />
        {/* </div> */}
        {/* <Text weight="semibold">Spirit</Text> */}
      </div>
      <nav className={classes.content}>
        <div className={classes.group}>
          <Text
            color="neutral_900"
            className={classes.groupLabel}
            variant="extraSmall"
          >
            Getting Started
          </Text>
          <ul className={classes.groupMenu}>
            <li className={classes.groupMenuItem}>
              <SidebarLink path="/introduction">Introduction</SidebarLink>
            </li>
          </ul>
        </div>
        <div className={classes.group}>
          <Text
            color="neutral_900"
            className={classes.groupLabel}
            variant="extraSmall"
          >
            Foundations
          </Text>
          <ul className={classes.groupMenu}>
            <li className={classes.groupMenuItem}>
              <SidebarLink path="/colors">Colors</SidebarLink>
            </li>
            <li className={classes.groupMenuItem}>
              <SidebarLink path="/spacing">Spacing</SidebarLink>
            </li>
            <li className={classes.groupMenuItem}>
              <SidebarLink path="/typography">Typography</SidebarLink>
            </li>
          </ul>
        </div>
        <div className={classes.group}>
          <Text
            color="neutral_900"
            className={classes.groupLabel}
            variant="extraSmall"
          >
            Components
          </Text>
          <ul className={classes.groupMenu}>
            <li className={classes.groupMenuItem}>
              <SidebarLink path="/box">Box</SidebarLink>
            </li>
            <li className={classes.groupMenuItem}>
              <SidebarLink path="/heading">Heading</SidebarLink>
            </li>
            <li className={classes.groupMenuItem}>
              <SidebarLink path="/text">Text</SidebarLink>
            </li>
            <li className={classes.groupMenuItem}>
              <SidebarLink path="/theme-provider">Theme Provider</SidebarLink>
            </li>
          </ul>
        </div>
      </nav>

      <div className={classes.footer}>
        <ThemeSwitcher />
      </div>
    </aside>
  );
};
