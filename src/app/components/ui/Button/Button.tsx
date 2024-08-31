import styles from './Button.module.css';

interface IButtonProps {
  children: string;
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, className, onClick }: IButtonProps) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
