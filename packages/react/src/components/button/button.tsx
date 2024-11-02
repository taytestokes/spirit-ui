import React from 'react';

import { styles } from './button.css';

export const Button: React.FC = ({
  disabled = false,
  size = 'medium',
  variant = 'primary',
  children,
  ...rest
}) => {
  return (
    <button className={styles({ size, variant })} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};
