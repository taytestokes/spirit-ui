import React from 'react';

import { styles } from './button.css';

export const Button: React.FC = ({
  color = 'default',
  size = 'medium',
  children,
  ...rest
}) => {
  return (
    <button className={styles({ color, size })} {...rest}>
      {children}
    </button>
  );
};
