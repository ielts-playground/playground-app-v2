import './button.scss';

type Props = {
  text: string;
  className?: string;
  style?: {
    width?: string;
    height?: string;
    fontSize?: string;
    margin?: string;
    lineHeight?: string;
  };
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};
const Button = ({ text, className, style, type, onClick }: Props) => {
  return (
    <button className={`button-common ${className}`} style={style} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
