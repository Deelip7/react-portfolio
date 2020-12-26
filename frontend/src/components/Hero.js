import React from 'react';

const Hero = () => {
  return (
    <section className='my-16 px-5 md:my-32 flex flex-col flex-wrap space-y-16 md:space-y-0 patterns'>
      <div className='ml-auto w-72 md:w-96 lg:w-2/5'>
        <img src='./images/Astronaut-01.svg' alt='Astronaut' />
      </div>
      <div className='max-w-md mb-auto space-y-5'>
        <h1 className='text-5xl font-bold md:text-7xl'>Hello. I’m Theelipan</h1>
        <p className='tracking-wide leading-relaxed'>
          I have a passion for developing user-friendly, accessible and responsive websites. I never stop learning and for me, each new project is another adventure.{' '}
        </p>
      </div>
    </section>
  );
};

export default Hero;
