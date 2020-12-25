import React from 'react';

const Header = () => {
  return (
    <div className='bg-black text-white p-5 text-lg'>
      <ul className='flex flex-row  sm:text-xl justify-center md:justify-end'>
        <li className='px-3'>Projects</li>
        <li className='px-3'>Contact</li>
        <li className='px-3'>Resume</li>
      </ul>
    </div>
  );
};

export default Header;
