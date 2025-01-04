import clsx from "clsx";

import { sprinkles, Sprinkles } from "./sprinkles.css";

export type Atoms = Sprinkles;

/**
 * Atoms will receive the reset styles and the sprinkles
 * styles and combine them into a single className.
 */
export const atoms = (atoms: Atoms) => {
  // TODO: Comeback to handle resets

  const { ...rest } = atoms;
  const sprinklesClassNames = sprinkles(rest);

  return clsx(sprinklesClassNames);
};
