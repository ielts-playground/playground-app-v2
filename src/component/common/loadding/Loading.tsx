import './Loading.scss';

const Loading = () => {
  return (
    <div id='loading' className='hide'>
      <div id='loadingInnerWrapper'>
        <span id='load1'>.</span>
        <span id='load2'>.</span>
        <span id='load3'>.</span>
      </div>
    </div>
  );
};

export default Loading;
