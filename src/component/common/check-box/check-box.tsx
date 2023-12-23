type Props = {
  answer;
};

const CheckBoxAnswer = () => {
  return (
    <label className='container-checkbox'>
      {answer.title}
      <input
        type='checkbox'
        value={answer.value}
        checked={questionTwoAnswer.value?.includes(answer.value)}
        onChange={() => handleChangeTwoValue(questionTwoAnswer.subId, answer.value)}
      />
      <span className='checkmark'></span>
    </label>
  );
};

export default CheckBoxAnswer;
