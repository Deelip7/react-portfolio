import React from 'react';

const Header = () => {
  return (
    <div className='space-x-10'>
      <ul className='flex flex-row  space-x-5 md:space-x-10 md:text-xl justify-center md:justify-end font-thin'>
        <li className='py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
          <a href='#projects'>Projects</a>
        </li>
        <li className='py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
          <a href='#contact'>Contact</a>
        </li>
        <li className='py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
          <a href='#'>Resume</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
