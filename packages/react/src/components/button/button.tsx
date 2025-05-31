import React from "react";
import { tv } from "tailwind-variants";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "tertiary" | "destructive";
}

const classes = tv({
  base: "active:opacity-80 font-medium rounded-md cursor-pointer flex items-center justify-center shadow-[0_0_0_1px] shadow-transparent transition duration-150 ease-in",
  variants: {
    size: {
      small: "h-[32px] text-sm px-3",
      medium: "h-[40px] text-sm px-4",
      large: "h-[48px] text-md px-5",
    },
    variant: {
      primary: "bg-zinc-900 hover:bg-zinc-800 shadow-zinc-900 text-zinc-50",
      secondary:
        "bg-transparent hover:bg-zinc-100 shadow-zinc-200 text-zinc-950",
      tertiary:
        "bg-transparent hover:bg-zinc-200 shadow-transparent hover:shadow-zinc-200 text-zinc-950",
      destructive:
        "bg-red-600 hover:bg-red-700 shadow-red-600 hover:shadow-red-700 text-zinc-50",
    },
  },
  defaultVariants: {
    size: "medium",
    variant: "primary",
  },
});

export const Button = ({
  children,
  className,
  size,
  variant,
  ...rest
}: ButtonProps) => {
  return (
    <button className={classes({ size, variant, className })} {...rest}>
      {children}
    </button>
  );
};
