import React from 'react';

import { styles } from './button.css';

// TODO:
// - Implement button states (hover, active)
// - Style button stories

export const Button: React.FC = ({
  size = 'medium',
  variant = 'primary',
  children,
  ...rest
}) => {
  return (
    <button className={styles({ size, variant })} {...rest}>
      {children}
    </button>
  );
};
