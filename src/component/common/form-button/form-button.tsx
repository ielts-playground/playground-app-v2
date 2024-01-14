import { ReactNode } from 'react';
import './form-button.scss';

type Props = {
  type?: 'button' | 'submit' | 'reset';
  text: string;
  icon?: ReactNode;
  style?: {
    width?: string;
    marginTop?: string;
  };
  onClick?: () => void;
};

const FormButton = ({ type = 'submit', text, icon, style, onClick }: Props) => {
  return (
    <button className='button form__submit' type={type} style={style} onClick={() => onClick?.()}>
      <span className='button__text'>{text}</span>
      {icon}
    </button>
  );
};

export default FormButton;
