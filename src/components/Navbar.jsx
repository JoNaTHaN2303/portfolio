import { FaBars, FaGithub, FaLinkedin, FaTimes } from 'react-icons/fa';
import React, { useState } from 'react';

import { BsFillPersonLinesFill } from 'react-icons/bs';
import CV from '../assets/DeCatelleJonathan-CV.pdf'
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-[80px] h-full flex flex-col justify-between items-center bg-[#292929] text-[#FFFFFF] border-r-2 border-[#616161]'>
      <div className='hidden md:flex flex-col space-y-6 text-lg'>
        <Link to='home' smooth={true} className="hover:cursor-pointer border-b-2 border-[#292929] hover:border-[#FFFFFF] px-2 duration-500">
          Home
        </Link>
      </div>
      <div className='hidden md:flex flex-col space-y-6 text-md'>
        
        <Link to='about' smooth={true} className="hover:cursor-pointer border-b-2 border-[#292929] hover:border-[#FFFFFF] px-2 duration-500">
          About
        </Link>
        <Link to='education' smooth={true} className="hover:cursor-pointer border-b-2 border-[#292929] hover:border-[#FFFFFF] px-2 duration-500">
          Education
        </Link>
        <Link to='work' smooth={true} className="hover:cursor-pointer border-b-2 border-[#292929] hover:border-[#FFFFFF] px-2 duration-500">
          Work
        </Link>
        <Link to='contact' smooth={true} className="hover:cursor-pointer border-b-2 border-[#292929] hover:border-[#FFFFFF] px-2 duration-500">
          Contact
        </Link> 
      </div>
      <div className='hidden md:flex flex-col'>
          <div className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-blue-600 p-4'>
            <a className='flex justify-between items-center w-full text-[#FFFFFF]' href='https://www.linkedin.com/in/jonathan-de-catelle-9399b620b/' target="_blank" rel="noreferrer">
              Linkedin <FaLinkedin size={30} />
            </a>
          </div>
          <div className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#333333] p-4'>
            <a className='flex justify-between items-center w-full text-[#FFFFFF]' href='https://github.com/JoNaTHaN2303' target="_blank" rel="noreferrer">
              Github <FaGithub size={30} />
            </a>
          </div>
          <div className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#6fc2b0] p-4'>
            <a className='flex justify-between items-center w-full text-[#FFFFFF]' href='mailto:jonathandecatelle@gmail.com'>
              Email <HiOutlineMail size={30} />
            </a>
          </div>
          <div className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#565f69] p-4'>
            <a className='flex justify-between items-center w-full text-[#FFFFFF]' href={CV} download>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </div>
      </div>
    </div>
  );
};

export default Navbar;


{/* <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#292929] flex flex-col justify-center items-center' }>
          <Link onClick={handleClick} to='home' smooth={true} className='duration-500 py-6 text-4xl'>
            Home
          </Link>
          <Link onClick={handleClick} to='about' smooth={true} className='duration-500 py-6 text-4xl'>
            About
          </Link>
          <Link onClick={handleClick} to='education' smooth={true} className='duration-500 py-6 text-4xl'>
            Education
          </Link>
          <Link onClick={handleClick} to='work' smooth={true} className='duration-500 py-6 text-4xl'>
            Work
          </Link>
          <Link onClick={handleClick} to='contact' smooth={true} className='duration-500 py-6 text-4xl'>
            Contact
          </Link>
      </div> */}