import { RefObject, createRef, useRef } from 'react';

export type BaseResponse = {
  getInputRef: (id: number) => RefObject<HTMLInputElement>;
  getAllInputRefs: () => {
    [key: string]: RefObject<HTMLInputElement>;
  };
};

const useGetInputRef = (): BaseResponse => {
  const inputRefs = useRef<{ [key: string]: RefObject<HTMLInputElement> }>({});

  const getAllInputRefs = () => inputRefs.current;

  const getInputRef = (id: number) => {
    const key = `${id}`;
    if (!inputRefs.current[key]) {
      inputRefs.current[key] = createRef();
    }
    return inputRefs.current[key];
  };

  return { getInputRef, getAllInputRefs };
};

export default useGetInputRef;
