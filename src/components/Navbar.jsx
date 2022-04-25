import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import CV from '../assets/DeCatelleJonathan-CV.pdf'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-center items-center px-4 bg-[#0a192f] text-gray-300'>
      <div className='hidden md:flex space-x-6'>
        <Link to='home' smooth={true} className="hover:cursor-pointer border-b-2 border-[#0a192f] hover:border-gray-300 px-2 duration-500">
          Home
        </Link>
        <Link to='about' smooth={true} className="hover:cursor-pointer border-b-2 border-[#0a192f] hover:border-gray-300 px-2 duration-500">
          About
        </Link>
        <Link to='skills' smooth={true} className="hover:cursor-pointer border-b-2 border-[#0a192f] hover:border-gray-300 px-2 duration-500">
          Skills
        </Link>
        <Link to='work' smooth={true} className="hover:cursor-pointer border-b-2 border-[#0a192f] hover:border-gray-300 px-2 duration-500">
          Work
        </Link>
        <Link to='contact' smooth={true} className="hover:cursor-pointer border-b-2 border-[#0a192f] hover:border-gray-300 px-2 duration-500">
          Contact
        </Link> 
      </div>
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center' }>
          <Link onClick={handleClick} to='home' smooth={true} className='duration-500 py-6 text-4xl'>
            Home
          </Link>
          <Link onClick={handleClick} to='about' smooth={true} className='duration-500 py-6 text-4xl'>
            About
          </Link>
          <Link onClick={handleClick} to='skills' smooth={true} className='duration-500 py-6 text-4xl'>
            Skills
          </Link>
          <Link onClick={handleClick} to='work' smooth={true} className='duration-500 py-6 text-4xl'>
            Work
          </Link>
          <Link onClick={handleClick} to='contact' smooth={true} className='duration-500 py-6 text-4xl'>
            Contact
          </Link>
      </div>
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <div className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-blue-600 pr-4'>
            <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/jonathan-de-catelle-9399b620b/' target="_blank" rel="noreferrer">
              Linkedin <FaLinkedin size={30} />
            </a>
          </div>
          <div className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#333333] pr-4'>
            <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/JoNaTHaN2303' target="_blank" rel="noreferrer">
              Github <FaGithub size={30} />
            </a>
          </div>
          <div className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#6fc2b0] pr-4'>
            <a className='flex justify-between items-center w-full text-gray-300' href='mailto:jonathandecatelle@gmail.com'>
              Email <HiOutlineMail size={30} />
            </a>
          </div>
          <div className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#565f69] pr-4'>
            <a className='flex justify-between items-center w-full text-gray-300' href={CV} download>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
