import { FaHome, FaGithub, FaLinkedin, FaInfo  } from 'react-icons/fa';
import { IoIosSchool } from "react-icons/io";
import { MdWorkHistory } from "react-icons/md";
import { LuMailbox } from "react-icons/lu";
import React, { useState } from 'react';

import { BsFillPersonLinesFill } from 'react-icons/bs';
import CV from '../assets/DeCatelleJonathan-CV.pdf'
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-[100px] h-full flex flex-col justify-between items-center bg-[#292929] text-[#FFFFFF] border-r-2 border-[#616161]'>
      <div className='hidden md:flex flex-col p-6 text-lg'>
        <Link to='home' smooth={true} className="flex group hover:cursor-pointer px-2 duration-500">
          <FaHome size={30}/>
          <div className='z-0 group-hover:ml-[100px] absolute w-0 duration-500'>
            Home
          </div>
        </Link>
      </div>
      <div className='hidden md:flex flex-col space-y-6 text-md'>
        <Link to='about' smooth={true} className="hover:cursor-pointer px-2 duration-500">
          <FaInfo size={30}/>
        </Link>
        <Link to='education' smooth={true} className="hover:cursor-pointer px-2 duration-500">
          <IoIosSchool size={30}/>
        </Link>
        <Link to='work' smooth={true} className="hover:cursor-pointer px-2 duration-500">
          <MdWorkHistory size={30}/>
        </Link>
        <Link to='contact' smooth={true} className="hover:cursor-pointer px-2 duration-500">
          <LuMailbox size={30}/>
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