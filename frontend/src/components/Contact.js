import React from 'react';

const Contact = () => {
  return (
    <article className='my-28' id='contact'>
      <header className='px-5 text-2xl font-bold pt-10'>
        <h2>Contact Me</h2>
        <p className='text-base font-thin'>I'd love to hear your thoughts!</p>
      </header>
      <div className='md:mx-6 flex flex-col md:flex-row justify-between md:items-end'>
        <div className='bg-gray px-6 py-8 md:rounded-lg shadow-lg justify-center my-7 md:w-6/12  '>
          <div>
            <p className='font-bold'>Theelipan Prabakar</p>
            <p className='font-thin'>Middletown, Connecticut</p>
            <a href='mailto: Theelipan@gmail.com' className='border-b-2 mt-3 inline-block border-gray-500'>
              Theelipan@gmail.com
            </a>
          </div>
          <p className='border-b-2 mt-3 inline-block border-gray-500'>Resume</p>
          <div className='flex flex-row flex-wrap mt-7 gap-4'>
            <a href='https://www.linkedin.com/in/theelipan-prabakar-096437199/' target='_blank' rel='noreferrer'>
              <span className='gap-1 mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm'>
                <img src='./images/icons/linkedin.svg' alt='linkedin' />
                Linkedin
              </span>
            </a>

            <a href='https://github.com/Deelip7' target='_blank' rel='noreferrer'>
              <span className='gap-1 mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm'>
                <img src='./images/icons/github.svg' alt='github' />
                Github
              </span>
            </a>

            <a href='https://codepen.io/deelip7' target='_blank' rel='noreferrer'>
              <span className='gap-1 mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm'>
                <img src='./images/icons/codepen.svg' alt='codepen' />
                Codepen
              </span>
            </a>
          </div>
        </div>
        <div className='m-auto mt-10 md:mt-0 max-w-xs md:max-w-sm'>
          <img src='./images/rocket.svg' alt='' />
        </div>
      </div>
    </article>
  );
};

export default Contact;
