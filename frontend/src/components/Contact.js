import React from 'react';

const Contact = () => {
  return (
    <article className='my-24'>
      <header className='text-2xl font-bold'>
        <h1>Contact Me</h1>
        <p className='text-base font-thin'>I'd love to hear your thoughts!</p>
      </header>
      <div className='bg-gray px-4 py-7 rounded-lg shadow-lg my-7'>
        <div>
          <p className='font-bold'>Theelipan Prabakar</p>
          <p className='font-thin'>Middletown, Connecticut</p>
          <p className='border-b-2 mt-3 inline-block border-gray-500'>Theelipan@gmail.com</p>
        </div>
        <p className='border-b-2 mt-3 inline-block border-gray-500'>Resume</p>
        <div className='flex flex-row flex-wrap mt-5 space-x-3 '>
          <div className='mr-1  flex flex-row gap-1 items-end border border-gray-500 py-1.5 px-2 rounded-lg text-sm'>
            <img src='./images/github.svg' alt='github' />
          </div>
          <div className='mr-1  flex flex-row gap-1 items-end border border-gray-500 py-1.5 px-2 rounded-lg text-sm'>
            <img src='./images/linkedin.svg' alt='linkedin' />
          </div>
          <div className='mr-1  flex flex-row gap-1 items-end border border-gray-500 py-1.5 px-2 rounded-lg text-sm'>
            <img src='./images/codepen.svg' alt='codepen' />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Contact;
