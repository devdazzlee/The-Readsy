import React from 'react';

const Image_Text_Comp = ({head1,head2, paragraph, img}) => {
  return (
    <>
      <div className='flex flex-col items-center m-auto  sm:flex-row sm:w-4/6 sm:justify-center'>
        <div className='w-full sm:w-2/4 px-12'>
          <h1 className='text-2xl sm:text-4xl font-bold text-center sm:text-left my-8'>
            {head1} <br />{head2}
          </h1>
          <p className='text-start '>
{paragraph}
          </p>
        </div>
        <div className='w-full sm:w-2/4   mt-4 sm:mt-0'>
          <img className='w-full  rounded-lg' src={img} alt="" />
        </div>
      </div>
    </>
  );
};

export default Image_Text_Comp;
