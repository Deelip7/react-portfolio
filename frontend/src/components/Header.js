import React from 'react';

const Header = () => {
  return (
    <div className='bg-black space-x-10'>
      <ul className='flex flex-row  space-x-5 md:space-x-10 md:text-xl justify-center md:justify-end font-thin'>
        <li className='py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>Projects</li>
        <li className='py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>Contact</li>
        <li className='py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>Resume</li>
      </ul>
    </div>
  );
};

export default Header;
