import React from 'react';
import CV from '../assets/DeCatelleJonathan-CV.pdf'
import { AiOutlineDownload } from 'react-icons/ai'

const Home = () => {
  return (
    <div name='home' className='w-full min-h-screen flex justify-center items-center'>
      {/* <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          De Catelle Jonathan
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Student at Hogent.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I am currently studying Computer Science specializing in Mobile & Web Development.
        </p>
        <div>
          <a className='text-white group border-2 px-6 py-3 my-2 w-36 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-500' href={CV} download>
            Resume <AiOutlineDownload size={20} className='text-white ml-3'/>
          </a>
        </div>
      </div> */}
      home
    </div>
  );
};

export default Home;
