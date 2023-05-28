import React from 'react';
import Cocktails from '../assets/cocktails.PNG';
import Carteblanche from '../assets/carteblanche.PNG';
import Portfolio from '../assets/portfolio.PNG';

const Work = () => {
  return (
    <div name='work' className='w-full min-h-screen text-gray-300 bg-[#0a192f] flex justify-center items-center'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>These are some of my previous projects</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div style={{ backgroundImage: `url(${Cocktails})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <p className='text-2xl font-bold text-white tracking-wider text-center'>
                React & Node.js Application
              </p>
              <div className='pt-8 text-center'>
                <a className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' href='https://cockatils-v2.vercel.app/' target="_blank" rel="noreferrer">
                  Demo
                </a>
                <a className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' href='https://github.com/JoNaTHaN2303/cockatils_v2' target="_blank" rel="noreferrer">
                  Code
                </a>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${Carteblanche})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <p className='text-2xl font-bold text-white tracking-wider'>
                React Application
              </p>
              <div className='pt-8 text-center'>
                <a className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' href='https://mecarteblanche.be/' target="_blank" rel="noreferrer">
                  Demo
                </a>
                <a className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' href='https://github.com/JoNaTHaN2303/carteblanche' target="_blank" rel="noreferrer">
                  Code
                </a>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${Portfolio})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <p className='text-2xl font-bold text-white tracking-wider'>
                React Application
              </p>
              <div className='pt-8 text-center'>
                <a className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' href='/' target="_blank" rel="noreferrer">
                  Demo
                </a>
                <a className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' href='https://github.com/JoNaTHaN2303/portfolio' target="_blank" rel="noreferrer">
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
