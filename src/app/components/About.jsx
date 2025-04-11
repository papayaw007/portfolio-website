import React from 'react'
import Image from 'next/image'
import AboutImage from './about.jpg'
import { FaGraduationCap } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';


export default function About() {
  return (
    <main id='about'>
  <div className='flex flex-col min-h-screen bg-gray-50'>
    <div className='w-full text-center mt-10'>
      <p>Get to Know More</p>
      <p className='text-5xl md:text-5xl sm:text-4xl font-semibold'>About Me</p>
    </div>
    
    <div className='flex justify-center items-center px-4 md:px-6'>
      <div className='flex flex-col md:flex-row justify-center items-center gap-x-0 md:gap-x-10 gap-y-8 md:gap-y-0 mt-8 md:mt-18 mx-4 md:mx-20'>
        <div className='w-full md:w-auto'>
          <Image
            alt='about-image'
            src={AboutImage}
            width={100}
            quality={100}
            className='w-full sm:w-80 md:w-96 rounded-lg'
          >
          </Image>
        </div>
        <div className='space-y-5 mb-10 w-full md:w-auto'>
          <div className='flex flex-col sm:flex-row gap-6 sm:gap-10 p-4 sm:p-8'>
            <div className='shadow-xl rounded-lg py-8 sm:py-12 px-10 sm:px-20 text-center bg-white w-full'>
              <p className='text-lg font-semibold'>Experience</p>
              <MdWork className='text-black flex mx-auto sm:ml-18 w-8 h-8'/>
              <p>1+ years</p>
              <p>Font-End Development</p>
            </div>
            <div className='shadow-xl rounded-lg py-8 sm:py-12 px-10 sm:px-20 text-center bg-white w-full'>
              <p className='text-lg font-semibold'>Education</p>
              <FaGraduationCap className="text-black mx-auto sm:ml-22 w-8 h-8" />
              <p>BSc. Computer Engineering</p>
              <p>Ashesi University</p>
            </div>
          </div>
          <div className='mt-10 shadow-2xl rounded-lg bg-white py-8 sm:py-10 px-6 sm:px-8 text-sm sm:text-base'>
            Hey there! I'm P.Y — a curious mind wired for creativity and code.With a background in <br className='hidden md:block' /> Computer Engineering and over a year of hands-on front-end experience, I bring ideas to <br className='hidden md:block' /> life with pixels, coffee, and way too many tabs open. I love building sleek, responsive interfaces <br className='hidden md:block' />and Im always hungry to learn the next cool thing.  Whether it's debugging at 2am or cheering <br className='hidden md:block' /> when a layout finally aligns, Im in it for the craft, the growth, and the occasional "wow" moment.<br className='hidden md:block' /> Lets build something awesome!
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
  )
}
