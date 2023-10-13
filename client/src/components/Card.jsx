import React from 'react';

const Card = ({ name, photo, job, desc }) => {
  return (
    <div className='bg-white w-full md:w-[45%] lg:w-[50%] lg:h-[70%] mx-auto p-4 group rounded-md overflow-hidden relative'>
      <img
        src={photo}
        alt={name}
        className='w-full h-[100%] object-cover group-hover:opacity-75 transition-opacity duration-300'
      />
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-center text-center'>
        <h1 className='font-integral font-bold text-4xl'>{name}</h1>
        <p className='text-lg mt-2'>{job}</p>
        <div className='p-2'>
          <p className='text-md font-inter'>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
/*const Card = ({ name, photo, job, desc }) => {
  return (
    <div className='flex items-center justify-center'>
      <div className='bg-white w-full md:w-[40%] lg:w-1/4 max-h-[100%] md:h-full p-4 group rounded-md hover:shadow-lg transition-shadow transform-gpu'>
        <img src={photo} alt={name} className='w-full h-[60%] object-cover group-hover:opacity-0 transition-opacity' />
        <div className='p-2'>
          <h1 className='font-integral font-bold text-4xl mt-2 w-full'>{name}</h1>
          <p className='text-lg mt-2'>{job}</p>
        </div>
        <p className='hidden group-hover:block text-md font-inter p-2 transition-opacity'>{desc}</p>
      </div>
    </div>
  );
};

export default Card;*/
