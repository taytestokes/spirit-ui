import React from "react";
import { tv } from "tailwind-variants";

interface HeadingProps {
  children?: React.ReactNode;
  className?: string;
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl";
}

const classes = tv({
  base: "font-semibold tracking-tight",
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
    },
  },
});

export const Heading = ({
  children,
  className = "",
  level: Element = "h2",
  size = "xl",
  ...rest
}: HeadingProps) => (
  <Element className={classes({ className, size })} {...rest}>
    {children}
  </Element>
);
