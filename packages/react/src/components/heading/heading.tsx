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
  weight:
    | "thin"
    | "extralight"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "thin"
    | "extrabold"
    | "black";
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
    weight: {
      thin: "font-thin",
      extralight: "font-extralight",
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-thin",
      extrabold: "font-extrabold",
      black: "font-black",
    },
  },
});

export const Heading = ({
  children,
  className = "",
  level: Element = "h2",
  size = "xl",
  weight = "semibold",
  ...rest
}: HeadingProps) => (
  <Element className={classes({ className, size, weight })} {...rest}>
    {children}
  </Element>
);
