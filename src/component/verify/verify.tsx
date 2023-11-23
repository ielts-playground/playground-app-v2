import { ClipboardEvent, useEffect, useState } from 'react';
import './verify.scss';

const CODE_VERIFY_LENGTH = 6;
const KEYBOARDS = {
  backspace: 8,
  arrowLeft: 37,
  arrowRight: 39,
};

const Verify = () => {
  const [listValueInCodeVerify, setListValueInCodeVerify] = useState<string[]>([]);

  useEffect(() => {
    const initListValue: string[] = [];
    Array.from(Array(CODE_VERIFY_LENGTH).keys()).forEach((_) => {
      initListValue.push('');
    });
    setListValueInCodeVerify(initListValue);
  }, []);

  useEffect(() => {
    const isSubmit = listValueInCodeVerify.every((item) => !!item);
    if (isSubmit) {
      setListValueInCodeVerify((prev) => {
        return prev.map((item) => {
          item = '';
          return item;
        });
      });
      console.log('Submit here');
    }
  }, [listValueInCodeVerify]);

  const handleChange = (e: { target: any }, indexChange: number) => {
    const input = e.target;

    setListValueInCodeVerify((prev) => {
      return prev.map((item, index) => {
        if (index === indexChange) {
          item = input.value;
        }
        return item;
      });
    });

    const nextInput = input.nextElementSibling;
    if (nextInput && input.value) {
      nextInput.focus();
      if (nextInput.value) {
        nextInput.select();
      }
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>, index: number) => {
    e.preventDefault();

    const paste = e.clipboardData.getData('text');
    if (!index) {
      setListValueInCodeVerify((prev) => {
        return prev.map((item, index) => {
          item = paste[index];
          return item;
        });
      });
    }
  };

  const handleBackspace = (e: { target: any }, indexChange: number) => {
    const input = e.target;
    if (input.value) {
      setListValueInCodeVerify((prev) => {
        return prev.map((item, index) => {
          if (index === indexChange) {
            item = '';
          }
          return item;
        });
      });
      return;
    }
    if (indexChange) {
      input.previousElementSibling.focus();
    }
  };

  const handleArrowLeft = (e: { target: { previousElementSibling: any } }) => {
    const previousInput = e.target.previousElementSibling;
    if (!previousInput) return;
    previousInput.focus();
  };

  const handleArrowRight = (e: { target: { nextElementSibling: any } }) => {
    const nextInput = e.target.nextElementSibling;
    if (!nextInput) return;
    nextInput.focus();
  };

  const handleKeydown = (e: any, index: number) => {
    switch (e.keyCode) {
      case KEYBOARDS.backspace:
        handleBackspace(e, index);
        break;
      case KEYBOARDS.arrowLeft:
        handleArrowLeft(e);
        break;
      case KEYBOARDS.arrowRight:
        handleArrowRight(e);
        break;
      default:
        break;
    }
  };

  return (
    <div className='container-vefiry'>
      <form action='#'>
        <div className='d-flex flex-column align-items-center justify-content-center'>
          <h3>OTP VERIFICATION</h3>
          <p className='info'>An otp has been sent to </p>
          <p>********k876@gmail.com</p>
          <p className='msg'>Please enter OTP to verify</p>
        </div>
        <div className='d-flex mb-3'>
          {listValueInCodeVerify.map((item, index) => (
            <input
              key={index}
              type='tel'
              maxLength={1}
              pattern='[0-9]'
              className='form-control shadow-none'
              value={item}
              onChange={(e) => handleChange(e, index)}
              onPaste={(e) => handlePaste(e, index)}
              onKeyDown={(e) => handleKeydown(e, index)}
            />
          ))}
        </div>
      </form>
    </div>
  );
};

export default Verify;
