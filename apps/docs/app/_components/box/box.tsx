import React from "react";

type BoxProps<Element extends React.ElementType> = Omit<
  React.ComponentProps<Element>,
  "as"
> & {
  as?: Element;
  children: React.ReactNode;
};

/**
 * Extremely simple version of a typed polymorphic component.
 */
export const Box = <Element extends React.ElementType>({
  as,
  children,
  ...rest
}: BoxProps<Element>) => {
  const Component = as ?? "div";

  return React.createElement(as, {
    children,
    ...rest,
  });

  return <Component {...rest}>{children}</Component>;
};
