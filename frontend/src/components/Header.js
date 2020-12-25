import React from 'react';

const Header = () => {
  return (
    <div className='bg-black text-white p-5 text-lg'>
      <ul className='flex flex-row  sm:text-xl justify-center md:justify-end '>
        <li className='py-1 px-3 hover:bg-gray focus:bg-gray rounded-lg'>Projects</li>
        <li className='py-1 px-3 hover:bg-gray focus:bg-gray rounded-lg'>Contact</li>
        <li className='py-1 px-3 hover:bg-gray focus:bg-gray rounded-lg'>Resume</li>
      </ul>
    </div>
  );
};

export default Header;
