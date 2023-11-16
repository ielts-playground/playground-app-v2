import styles from './Button.module.scss';

type Props = {
  text: string;
  style?: {
    width?: string;
    height?: string;
    fontSize?: string;
  };
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
};
const Button = ({ text, style, type, onClick }: Props) => {
  return (
    <button className={styles.button} style={style} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
