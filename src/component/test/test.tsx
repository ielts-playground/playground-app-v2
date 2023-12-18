import React from 'react';

import './test.scss';

const Test = () => {
  return (
    <div className='container'>
      <div className='box box-1'>
        <div className='noni noni--1'>
          <div className='happy'></div>
        </div>
        <div className='noni noni--2'>
          <div className='surprised'></div>
        </div>
      </div>
      <div className='box box-2'>
        <div className='noni noni--1'>
          <div className='surprised'></div>
        </div>
        <div className='noni noni--2'>
          <div className='happy'></div>
        </div>
      </div>
    </div>
  );
};

export default Test;
