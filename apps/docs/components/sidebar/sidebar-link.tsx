import React from "react";
import clsx from "clsx";
import Link from "next/link";

import { Text } from "@spirit-ui/design-system/components";

import * as classes from "./sidebar-link.css";

interface Props {
  children: React.ReactNode;
  className?: string;
  path: string;
}

export const SidebarLink = ({ className, children, path }: Props) => {
  return (
    <Link className={clsx(classes.sidebarLink, className)} href={path}>
      <Text variant="small">{children}</Text>
    </Link>
  );
};
