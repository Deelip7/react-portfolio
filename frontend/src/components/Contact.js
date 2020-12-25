import React from 'react';

const Contact = () => {
  return (
    <article className='my-10'>
      <header className='text-2xl font-bold'>
        <h1>Contact Me</h1>
        <p className='text-base font-thin'>I'd love to hear your thoughts!</p>
      </header>
      <div className='bg-gray px-4 py-7 rounded-lg shadow-lg my-5 '>
        <div>
          <p className='font-bold'>Theelipan Prabakar</p>
          <p className='font-thin'>Middletown, Connecticut</p>
          <p className='border-b-2 w-3/6 mt-3 border-gray-300'>Theelipan@gmail.com</p>
        </div>
        <div className='flex flex-row mt-5 justify-around'>
          <div className='mr-1  flex flex-row gap-1 items-end border border-white py-1.5 px-2 rounded-lg text-sm'>
            <img src='./images/github.svg' alt='github' /> Github
          </div>
          <div className='mr-1  flex flex-row gap-1 items-end border border-white py-1.5 px-2 rounded-lg text-sm'>
            <img src='./images/linkedin.svg' alt='linkedin' /> Linkedin
          </div>
          <div className='mr-1  flex flex-row gap-1 items-end border border-white py-1.5 px-2 rounded-lg text-sm'>
            <img src='./images/codepen.svg' alt='codepen' />
            Codepen
          </div>
        </div>
      </div>
    </article>
  );
};

export default Contact;
