import { Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import { LIST_ROUTER } from '@/common/constant';
import Button from '@/component/common/button/button';

type Props = {
  typePart?: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onSubmitExam: () => void;
};

const Modal = ({ typePart, isOpen, setIsOpen, onSubmitExam }: Props) => {
  const router = useRouter();

  const onClickSubmit = () => {
    setIsOpen(false);
    onSubmitExam();
    if (typePart === LIST_ROUTER.WRITING) {
      router.push(LIST_ROUTER.THANKS);
      return;
    }
    router.push(LIST_ROUTER.LIST_EXAM);
  };

  return (
    <>
      {isOpen && (
        <>
          <div className='overlay-background' onClick={() => setIsOpen(false)} />
          <div className='modal__centered'>
            <div className='modal-container'>
              <div className='modal-header'>
                <h5 className='title-header'>Submit the answers</h5>
              </div>
              <div className='modal-content'>
                <p className='mt-16'>
                  Are you sure that you want to submit your answers now? Click OK to confirm or
                  Cancel to return to the test.
                </p>
              </div>
              <div className='modal-actions'>
                <button className='button-action mr-50' onClick={() => setIsOpen(false)}>
                  Cancel
                </button>
                <Button text='Cancel' onClick={() => setIsOpen(false)} />
                <Button text='OK' onClick={onClickSubmit} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
