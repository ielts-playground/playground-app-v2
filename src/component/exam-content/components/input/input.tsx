import { ForwardedRef, forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { InputRef } from '../../exam-content.model';

type Props = {
  id: number;
  questionActive: number;
  value: string;
  onClick: () => void;
  onChangeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function QuestionInput(
  { id, questionActive, value, onClick, onChangeValue }: Props,
  ref: ForwardedRef<InputRef>
) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (id === questionActive) {
      inputRef?.current?.focus();
    }
  }, [id, questionActive]);

  useImperativeHandle(ref, () => ({
    focus: () => inputRef?.current?.focus(),
  }));

  return (
    <input
      ref={inputRef}
      style={{ margin: '4px 8px' }}
      autoComplete='off'
      autoCapitalize='off'
      spellCheck='false'
      id={`question${id}`}
      className='input-answer'
      placeholder={String(id)}
      value={value}
      onClick={onClick}
      onChange={onChangeValue}
    />
  );
}

export default forwardRef(QuestionInput);
