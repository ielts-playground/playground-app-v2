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
  disabled?: boolean;
  onClick?: () => void;
};
const Button = ({ text, className, style, type, disabled, onClick }: Props) => {
  return (
    <button
      className={`button-common ${disabled ? 'button-disable' : 'button-enable'} ${className}`}
      style={style}
      type={type}
      disabled={disabled}
      onClick={() => (disabled ? null : onClick?.())}
    >
      {text}
    </button>
  );
};

export default Button;
