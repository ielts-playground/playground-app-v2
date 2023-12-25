import './check-box.scss';

type Props = {
  title: string;
  value: string;
  checked: boolean;
  onChangeValue: () => void;
};

const CheckBoxAnswer = ({ title, value, checked, onChangeValue }: Props) => {
  return (
    <label className='checkbox-container' style={{ lineHeight: '18px' }}>
      {title}
      <input type='checkbox' value={value} checked={checked} onChange={onChangeValue} />
      <span className='checkmark'></span>
    </label>
  );
};

export default CheckBoxAnswer;
