import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Cryptosmart.</h1>
      <ul className='hidden md:flex uppercase'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contacts</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] text-[#000000] h-full border-r border-r-gray-900 bg-[#00df9a] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%] top-0 bottom-0'}>
        <h1 className='w-full text-3xl font-bold m-4'>Cryptosmart.</h1>
          <li className='p-4 uppercase border-b border-t border-black'>Home</li>
          <li className='p-4 uppercase border-b border-black'>Company</li>
          <li className='p-4 uppercase border-b border-black'>Resources</li>
          <li className='p-4 uppercase border-b border-black'>About</li>
          <li className='p-4 uppercase border-b border-black'>Contacts</li>
      </ul>
    </div>
  );
};


export default Navbar