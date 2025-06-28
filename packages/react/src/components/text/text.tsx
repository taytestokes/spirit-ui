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
  },
});

export const Text = ({
  children,
  className = "",
  size = "xl",
  ...rest
}: TextProps) => (
  <p className={classes({ className, size })} {...rest}>
    {children}
  </p>
);
