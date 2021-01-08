import React from 'react';

const Contact = () => {
  return (
    <section className='my-28' id='contact'>
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
          <a className='border-b-2 mt-3 inline-block border-gray-500' href='./Resume.pdf' target='_blank' rel='noreferrer'>
            Resume
          </a>
          <div className='flex flex-row flex-wrap mt-7'>
            <div className='mr-4'>
              <a href='https://www.linkedin.com/in/theelipan-prabakar-096437199/' target='_blank' rel='noreferrer'>
                <span className='mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm'>
                  <img src='./images/icons/linkedin.svg' alt='' width='24px' height='24px' className='mr-1' />
                  LinkedIn
                </span>
              </a>
            </div>

            <div className='mr-4'>
              <a href='https://github.com/Deelip7' target='_blank' rel='noreferrer'>
                <span className='mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm'>
                  <img src='./images/icons/github.svg' alt='' width='24px' height='24px' className='mr-1' />
                  GitHub
                </span>
              </a>
            </div>

            <a href='https://codepen.io/Theelipan' target='_blank' rel='noreferrer'>
              <span className='mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm'>
                <img src='./images/icons/codepen.svg' alt='' width='24px' height='24px' className='mr-1' />
                CodePen
              </span>
            </a>
          </div>
        </div>
        <div className='m-auto mt-10 md:mt-0 max-w-xs md:max-w-sm' onClick={() => window.scroll(0, 0)}>
          <picture>
            <source src='./images/rocket.webp' srcSet='./images/rocket-320.webp 320w, ./images/rocket.webp 768w' type='image/webp' />
            <source src='./images/rocket.png' srcSet='./images/rocket.png' sizes='(min-width: 768px) 50vw, 100vw' type='image/png' />

            <img width='500px' height='500px' loading='lazy' alt='red rocket flying' />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Contact;
