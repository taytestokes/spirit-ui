import React from "react";
import Link from "next/link";

import { Text } from "@spirit-ui/design-system/components";

import { ThemeSwitcher } from "../theme-switcher/theme-switcher";

import * as classes from "./header.css";

export const Header = () => (
  <header className={classes.header}>
    <div className={classes.content}>
      <Link className={classes.link} href="/">
        <Text color="neutral950" weight="semibold">
          Spirit UI
        </Text>
      </Link>
      <ThemeSwitcher />
    </div>
  </header>
);
