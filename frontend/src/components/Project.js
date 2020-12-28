import React from 'react';

const Project = () => {
  return (
    <>
      <article className='my-28 px-5' id='projects'>
        <header className='text-2xl font-bold pt-10'>
          <h2>Projects</h2>
        </header>
        <div className='my-7 space-y-24'>
          <div className='flex flex-wrap md:justify-between md:items-center'>
            <img src='./images/rn-mockup.svg' width='380px' height='280px' alt='MERN eCommerce' className='w-full md:w-6/12 rounded-lg shadow-lg' />
            <div className='flex flex-col overflow-auto  space-y-3 my-3 mx-1 w-full md:w-5/12 '>
              <h3 className='uppercase font-bold text-lg'>MERN eCommerce</h3>
              <p>Full featured ecommerce store built with MERN stack and Paypal payments API. Admin page to manage customers, products & orders.</p>
              <div className='flex overflow-auto space-x-3 pb-2'>
                <span className='border border-gray-500 px-2 py-1 rounded-lg text-sm'>React</span>
                <span className='border border-gray-500 px-2 py-1 rounded-lg text-sm'>Redux</span>
                <span className='border border-gray-500 px-2 py-1 rounded-lg text-sm'>MongoDB</span>
                <span className='border border-gray-500 px-2 py-1 rounded-lg text-sm'>JWT</span>
                <span className='border border-gray-500 px-2 py-1 rounded-lg text-sm'>Express</span>
              </div>
              <div className='w-auto flex space-x-5 relative'>
                <a href='https://github.com/Deelip7/react-node-ecommerce' target='_blank' rel='noreferrer'>
                  <img src='./images/icons/github.svg' alt='github' />
                </a>
                <a href='https://rn-store.herokuapp.com/' target='_blank' rel='noreferrer'>
                  <img src='./images/icons/external-link.svg' alt='external link' />
                </a>
              </div>
            </div>
          </div>

          <div className='flex flex-wrap md:justify-between md:items-center'>
            <img src='./images/tmdb-mockup.svg' width='380px' height='280px' alt='Movie App' className='w-full md:w-6/12 rounded-lg shadow-lg md:order-1' />
            <div className='flex flex-col space-y-3 my-3 mx-1 w-full  md:w-5/12'>
              <h3 className='uppercase font-bold text-lg'>Movie App</h3>
              <p>Discover the most popular, top rated and latest movies. Users can also find a movie based on the movie title.</p>
              <div className='flex overflow-auto space-x-2 pb-2'>
                <span className='border border-gray-500 px-2 py-1 rounded-lg text-sm'>React</span>
                <span className='border border-gray-500 px-2 py-1 rounded-lg text-sm'>API</span>
                <span className='border border-gray-500 px-2 py-1 rounded-lg text-sm'>SASS</span>
              </div>
              <div className='w-auto flex space-x-5'>
                <a href='https://github.com/Deelip7/react-tmdb-app' target='_blank' rel='noreferrer'>
                  <img src='./images/icons/github.svg' alt='github' />
                </a>
                <a href='https://festive-wilson-a51c32.netlify.app/' target='_blank' rel='noreferrer'>
                  <img src='./images/icons/external-link.svg' alt='external link' />
                </a>
              </div>
            </div>
          </div>

          <div className='flex flex-wrap md:justify-between md:items-center'>
            <img src='./images/recipeApp-mockup.svg' width='380px' height='280px' alt='Recipe Finder' className='w-full md:w-6/12 rounded-lg shadow-lg' />
            <div className='flex flex-col space-y-3 my-3 mx-1 w-full md:w-5/12'>
              <h3 className='uppercase font-bold text-lg'>Recipe Finder</h3>
              <p>Browse recipes from a variety of sources. Users can save recipes to view them later. API from themealdb.com.</p>
              <div className='flex overflow-auto space-x-2 pb-4'>
                <span className='border border-gray-500 px-2 py-1 rounded-lg text-sm'>Javascript</span>
                <span className='border border-gray-500 px-2 py-1 rounded-lg text-sm'>API</span>
              </div>
              <div className='w-auto flex space-x-5'>
                <a href='https://github.com/Deelip7/RecipesFinder' target='_blank' rel='noreferrer'>
                  <img src='./images/icons/github.svg' alt='github' />
                </a>
                <a href='https://practical-archimedes-a61091.netlify.app/' target='_blank' rel='noreferrer'>
                  <img src='./images/icons/external-link.svg' alt='external link' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
      <a href='https://github.com/Deelip7' target='_blank' rel='noreferrer'>
        <span className='bg-gray block shadow-lg uppercase border border-gray-500 rounded-lg text-center my-12 p-2 max-w-xs m-auto'>See more on Github</span>
      </a>
    </>
  );
};

export default Project;
