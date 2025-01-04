import clsx from "clsx";

import { sprinkles, Sprinkles } from "./sprinkles.css";

export interface Atoms extends Sprinkles {
  className?: string | string[];
}

// TODO: Comeback to handle resets

/**
 * Atoms will receive the reset styles and the sprinkles
 * styles and combine them into a single className.
 */
export const atoms = (atoms: Atoms) => {
  const { className, ...rest } = atoms;
  const sprinklesClassNames = sprinkles(rest);

  return clsx(sprinklesClassNames, className);
};
