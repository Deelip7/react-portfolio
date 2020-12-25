import React from 'react';

const Project = () => {
  return (
    <article>
      <header className='text-2xl font-bold '>
        <h1>Projects</h1>
      </header>
      <div className='my-7 space-y-10'>
        <div>
          <img src='./images/rn3-mockup.png' alt='' className='w-100 rounded-lg' />
          <div className='flex flex-col gap-3 my-3 mx-1 '>
            <h2 className='uppercase'>MERN eCommerce</h2>
            <p>Full featured, responsive eCommerce store with PayPal payments system.</p>
            <div className='flex overflow-auto space-x-2 pb-4'>
              <span className='border border-gray-500 px-2 py-1 rounded-lg text-sm'>React.js</span>
              <span className='border border-gray-500 px-2 py-1 rounded-lg text-sm'>Redux</span>
              <span className='border border-gray-500 px-2 py-1 rounded-lg text-sm'>MongoDB</span>
              <span className='border border-gray-500 px-2 py-1 rounded-lg text-sm'>JWT</span>
              <span className='border border-gray-500 px-2 py-1 rounded-lg text-sm'>Express</span>
            </div>
            <div className='w-auto flex gap-3'>
              <img src='./images/github.svg' alt='github' />
              <img src='./images/external-link.svg' alt='external link' />
            </div>
          </div>
        </div>

        <div>
          <img src='./images/tmdb2-mockup.png' alt='' className='w-100 rounded-lg' />
          <div className='flex flex-col gap-3 my-3 mx-1 '>
            <h2 className='uppercase'>Movie App</h2>
            <p>Movie search app that will search and return movies based on the movie title.</p>
            <div className='flex overflow-auto space-x-2 pb-4'>
              <span className='border border-gray-500 px-2 py-1 rounded-lg text-sm'>React.js</span>
              <span className='border border-gray-500 px-2 py-1 rounded-lg text-sm'>API</span>
              <span className='border border-gray-500 px-2 py-1 rounded-lg text-sm'>SASS</span>
            </div>
            <div className='w-auto flex gap-3  '>
              <img src='./images/github.svg' alt='github' />
              <img src='./images/external-link.svg' alt='external link' />
            </div>
          </div>
        </div>

        <div>
          <img src='./images/recipe2-mockup.png' alt='' className='w-100 rounded-lg' />
          <div className='flex flex-col gap-3 my-3 mx-1 '>
            <h2 className='uppercase'>Recipe Finder</h2>
            <p>Simple app to find and save recpies. API from themealdb.com.</p>
            <div className='flex overflow-auto space-x-2 pb-4'>
              <span className='border border-gray-500 px-2 py-1 rounded-lg text-sm'>Javascript</span>
              <span className='border border-gray-500 px-2 py-1 rounded-lg text-sm'>API</span>
            </div>
            <div className='w-auto flex gap-3  '>
              <img src='./images/github.svg' alt='github' />
              <img src='./images/external-link.svg' alt='external link' />
            </div>
          </div>
        </div>
      </div>

      <div className='bg-gray text-white shadow-lg uppercase text-center p-2 w-2/3 m-auto border border-gray-500  rounded-lg my-12'>See more on Github</div>
    </article>
  );
};

export default Project;
