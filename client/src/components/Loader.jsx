import React from 'react';

const Loader = () => {
  return (
    <div className='inset-0 fixed z-30 w-full top-0 left-0'>
        <div className='flex items-center justify-center h-screen'>
      <div className=" border-t-transparent border-solid border-4 border-blue-400  rounded-full w-16 h-16 animate-spin"></div>
        </div>
    </div>
  );
};

export default Loader;
