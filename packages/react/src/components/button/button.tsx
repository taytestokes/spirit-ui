import React from "react";
import { tv } from "tailwind-variants";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "tertiary" | "destructive";
}

const classes = tv({
  base: "font-medium rounded-md cursor-pointer flex items-center justify-center shadow-[0_0_0_1px] shadow-transparent transition duration-150 ease-in",
  variants: {
    size: {
      sm: "h-[32px] text-sm px-3",
      md: "h-[40px] text-sm px-4",
      lg: "h-[48px] text-md px-5",
    },
    variant: {
      primary:
        "bg-neutral-900 hover:bg-neutral-800 shadow-neutral-900 text-neutral-50",
      secondary:
        "bg-transparent hover:bg-neutral-100 shadow-neutral-200 text-neutral-950",
      tertiary:
        "bg-transparent hover:bg-neutral-200 shadow-transparent hover:shadow-neutral-200 text-neutral-950",
      destructive:
        "bg-red-600 hover:bg-red-700 shadow-red-600 hover:shadow-red-700 text-neutral-50",
    },
  },
});

export const Button = ({
  children,
  className = "",
  size = "md",
  variant = "primary",
  ...rest
}: ButtonProps) => {
  return (
    <button className={classes({ size, variant, className })} {...rest}>
      {children}
    </button>
  );
};
