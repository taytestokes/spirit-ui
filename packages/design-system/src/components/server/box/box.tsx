import React, { forwardRef } from "react";
import clsx, { ClassValue } from "clsx";

import { atoms, Atoms } from "../../../styles/atoms";
import { sprinkles } from "../../../styles/sprinkles.css";

type NativeHTMLProps = React.AllHTMLAttributes<HTMLElement>;

type Props = Atoms &
  NativeHTMLProps & {
    as?: React.ElementType;
    className?: ClassValue;
  };

export const Box = forwardRef<HTMLElement, Props>(
  ({ as: Component = "div", children, className, ...props }: Props, ref) => {
    const atomProps: Record<string, unknown> = {};
    const nativeProps: Record<string, unknown> = {};

    /**
     * This will extract all of the atom props (css properties) from
     * the component props and seperate them from the native props (html attributes).
     *
     * This allows us to pass the atom props to the atoms function to build
     * the utility classNames and pass them to the component className and then
     * forward the rest of the native props onto the element.
     */
    for (const key in props) {
      if (sprinkles.properties.has(key as keyof Atoms)) {
        atomProps[key] = props[key as keyof typeof props];
      } else {
        nativeProps[key] = props[key as keyof typeof props];
      }
    }

    const atomicClasses = atoms({
      // TODO: Add resets
      ...atomProps,
    });

    return (
      <Component
        className={clsx(atomicClasses, className)}
        {...nativeProps}
        ref={ref}
      >
        {children}
      </Component>
    );
  }
);

export type BoxProps = Parameters<typeof Box>[0];
