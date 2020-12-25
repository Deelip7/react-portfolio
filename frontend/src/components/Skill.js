import React from 'react';

const Skill = () => {
  return (
    <article className=' '>
      <header className='text-2xl font-bold'>
        <h1>Skills & Tools</h1>
      </header>
      <div className='flex flex-row my-6 gap-5 justify-center'>
        <div className='flex flex-col w-15'>
          <img src='./images/javascript-original.svg' alt='github' className='w-16 ' />
          javascript
        </div>
        <div className='flex flex-col w-15'>
          <img src='./images/react-original.svg' alt='github' className='w-16' />
          React Js
        </div>
        <div className='flex flex-col w-15'>
          <img src='./images/nodejs-original.svg' alt='github' className='w-16' />
          <span>Node Js</span>
        </div>
        <div className='flex flex-col w-15'>
          <img src='./images/mongodb-original.svg' alt='github' className='w-16' />
          <span>Mongo DB</span>
        </div>
      </div>
    </article>
  );
};

export default Skill;
