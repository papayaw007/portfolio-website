import React from 'react'
import Image from 'next/image'
import Profile from './profile.JPG'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Hero() {
  return (
    <main>
        <div className='h-screen flex justify-center items-center'>
            <div className='flex flex-col md:flex-row justify-center items-center md:space-x-24 space-y-8 md:space-y-0 mb-30 px-4'>
            <div>
                <Image
                src={Profile}
                alt = "profile-pic"
                width ={400}
                quality={100}
                className='w-64 md:w-80 lg:w-100 h-64 md:h-80 lg:h-100 rounded-full object-cover'
                ></Image>
            </div>
            <div className='space-y-4'>
              <p className='text-xl font-semibold text-center text-zinc-500'>Hello i'm</p>
              <p className='text-3xl md:text-5xl font-semibold'>Papa Yaw Adu-Asare</p>
              <div>
              <p className='text-center text-2xl md:text-3xl font-medium text-zinc-500'>Front-End Developer</p>
              <p className='text-center text-xl font-medoium text-zinc-500'>&lt;AI Prompt Engineer&gt;</p>
              </div>
              <div className=' justify-center items-center space-y-3 md:space-y-0 md:space-x-8 flex flex-col md:flex-row'>
                <button className='px-4 py-2 border-2 border-black rounded-full cursor-pointer hover:bg-black hover:text-white'>Download CV</button>
                <button className='px-6 py-3 bg-black text-white rounded-full cursor-pointer hover:opacity-75'>Contact Info</button>
            </div>
            <div className=' flex justify-center items-center space-x-4'>
                <div>
                <FaGithub className="w-8 h-8 text-black cursor-pointer" />
                </div>
                <div>
                <FaLinkedin className="w-8 h-8 text-black cursor-pointer" />
                </div>
            </div>
            </div>
            </div>
        </div>
    </main>
  )
}