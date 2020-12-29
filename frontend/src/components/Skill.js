import React from 'react';

const Skill = () => {
  return (
    <article className='my-28  px-5'>
      <header className='text-2xl font-bold pt-10'>
        <h2>Skills & Tools</h2>
      </header>
      <div className='my-7 grid gap-5 grid-cols-3 md:grid-cols-6  text-center place-items-center '>
        <div>
          <img src='./images/icons/javascript-original.svg' alt='github' className='w-16' width='64px' height='64px' />
          Javascript
        </div>
        <div>
          <img src='./images/icons/react-original.svg' alt='github' className='w-16' width='64px' height='64px' />
          React Js
        </div>
        <div>
          <img src='./images/icons/nodejs-original.svg' alt='github' className='w-16' width='64px' height='64px' />
          <span>Node Js</span>
        </div>
        <div>
          <img src='./images/icons/mongodb-original.svg' alt='github' className='w-16' width='64px' height='64px' />
          <span>Mongo DB</span>
        </div>
        <div>
          <img src='./images/icons/html5-original.svg' alt='github' className='w-16' width='64px' height='64px' />
          <span>HTML 5</span>
        </div>
        <div>
          <img src='./images/icons/css3-original.svg' alt='github' className='w-16' width='64px' height='64px' />
          <span>CSS 3</span>
        </div>
      </div>
    </article>
  );
};

export default Skill;
