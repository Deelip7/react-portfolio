import React from 'react';

const Project = () => {
  return (
    <>
      <header className='text-2xl font-bold'>Projects</header>
      <section className=' my-10 bg-gray px-5 py-2 rounded-lg'>
        <img src='./images/recipe-mockup.png' alt='' className='w-100 rounded-lg' />
        <div className='flex flex-col gap-3 my-3 mx-1 '>
          <h2 className='uppercase'>Movie App</h2>
          <p>Movie search app that will search and return movies based on the movie title.</p>
          <h3> React.js | API</h3>
          <div className='w-auto flex gap-3  '>
            <img src='./images/github.svg' alt='github' />
            <img src='./images/link.svg' alt='external link' />
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
