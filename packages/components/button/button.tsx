import { styles } from './button.css';

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
