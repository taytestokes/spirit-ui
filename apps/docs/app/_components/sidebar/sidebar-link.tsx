"use client";

import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Text } from "@spirit-ui/design-system";

import * as classes from "./sidebar-link.css";

interface Props {
  children: React.ReactNode;
  className?: string;
  path: string;
}

export const SidebarLink = ({ className, children, path }: Props) => {
  const pathname = usePathname();

  return (
    <Link
      className={clsx(
        classes.sidebarLink,
        className,
        pathname === path && classes.active
      )}
      href={path}
    >
      <Text variant="paragraph-sm">{children}</Text>
    </Link>
  );
};
