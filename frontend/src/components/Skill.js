import React from 'react';

const Skill = () => {
  return (
    <article className='bg-gray px-4 py-6 rounded-lg shadow-lg'>
      <header className='text-2xl font-bold'>
        <h1>Skills & Tools</h1>
        <p className='text-base font-thin'>I'd love to hear your thoughts!</p>
      </header>
      <div className=' my-6'>
        <p className='font-bold'>Theelipan Prabakar</p>
        <p className='font-thin'>Middletown, Connecticut</p>
        <p className='border-b-2 w-3/6 mt-3 border-gray-300'>Theelipan@gmail.com</p>
      </div>
      <div className='flex flex-row gap-5'>
        <img src='./images/github.svg' alt='github' />
        <img src='./images/linkedin.svg' alt='linkedin' />
        <img src='./images/codepen.svg' alt='codepen' />
      </div>
    </article>
  );
};

export default Skill;
