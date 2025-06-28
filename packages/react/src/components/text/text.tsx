import React from "react";
import { tv } from "tailwind-variants";

interface TextProps {
  children?: React.ReactNode;
  className?: string;
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
  base: "font-normal",
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

export const Text = ({
  children,
  className = "",
  size = "xl",
  weight = "normal",
  ...rest
}: TextProps) => (
  <p className={classes({ className, size, weight })} {...rest}>
    {children}
  </p>
);
