import React from 'react'
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiTypescript,
    SiGit,
    SiVueDotJs,
    SiTailwindcss,
  } from 'react-icons/si';


  import { FaVuejs } from 'react-icons/fa';

export default function Experience() {
  return (
    <main>
    <div className='min-h-screen'>
        <div className='w-full text-center py-8 md:py-15'>
            <p>Explore my</p>
            <p className='text-4xl md:text-5xl font-semibold'>Experience</p>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center py-8 md:py-15 gap-8 md:gap-20 px-4'>
            <div className='w-full md:w-auto bg-white p-6 md:p-15 space-y-6 md:space-y-10 rounded-xl shadow-2xl mb-8 md:mb-0'>
                <p className='text-xl md:text-2xl font-semibold text-center'>Frontend Development</p>
                <div className='flex'>
                    <ul className='grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-24 w-full'>
                        <li className='flex justify-start items-center space-x-5'>
                            <div>
                                <SiHtml5 className="text-orange-600 text-3xl md:text-4xl" title="HTML5" />
                            </div>
                            <div>
                                <p className='text-base md:text-lg font-semibold text-gray-500'>HTML</p>
                                <p className='bg-orange-100 text-orange-400 px-1 rounded-md text-sm md:text-base'>Experienced</p> 
                            </div>
                        </li>
                        <li className='flex justify-start items-center space-x-5'>
                            <div>
                                <SiCss3 className="text-blue-600 text-3xl md:text-4xl" title="CSS3" />
                            </div>
                            <div>
                                <p className='text-base md:text-lg font-semibold text-gray-500'>CSS</p>
                                <p className='bg-blue-100 text-blue-400 px-1 rounded-md text-sm md:text-base'>Experienced</p> 
                            </div>
                        </li>
                        <li className='flex justify-start items-center space-x-5'>
                            <div>
                                <SiJavascript className="text-yellow-400 text-3xl md:text-4xl" title="JavaScript" />
                            </div>
                            <div>
                                <p className='text-base md:text-lg font-semibold text-gray-500'>JavaScript</p>
                                <p className='bg-yellow-100 text-yellow-400 px-1 rounded-md text-sm md:text-base'>Intermediate</p> 
                            </div>
                        </li>
                        <li className='flex justify-start items-center space-x-5'>
                            <div>
                                <SiTypescript className="text-blue-500 text-3xl md:text-4xl" title="TypeScript" />
                            </div>
                            <div>
                                <p className='text-base md:text-lg font-semibold text-gray-500'>TypeScript</p>
                                <p className='bg-blue-100 text-blue-400 px-1 rounded-md text-sm md:text-base'>Basic</p> 
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='w-full md:w-auto bg-white p-6 md:p-15 space-y-6 md:space-y-10 rounded-xl shadow-2xl'>
                <p className='text-xl md:text-2xl font-semibold text-center'>Frameworks</p>
                <div className='flex'>
                    <ul className='grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-24 w-full'>
                        <li className='flex justify-start items-center space-x-5'>
                            <div>
                                <SiReact className="text-cyan-400 animate-spin-slow text-3xl md:text-4xl" title="React" />
                            </div>
                            <div>
                                <p className='text-base md:text-lg font-semibold text-gray-500'>React</p>
                                <p className='bg-cyan-100 text-cyan-400 px-1 rounded-md text-sm md:text-base'>Experienced</p> 
                            </div>
                        </li>
                        <li className='flex justify-start items-center space-x-5'>
                            <div>
                                <FaVuejs className="text-green-500 text-4xl md:text-5xl" title="Vue.js" />
                            </div>
                            <div>
                                <p className='text-base md:text-lg font-semibold text-gray-500'>VUE</p>
                                <p className='bg-green-100 text-green-400 px-1 rounded-md text-sm md:text-base'>Experienced</p> 
                            </div>
                        </li>
                        <li className='flex justify-start items-center space-x-5'>
                            <div>
                                <SiTailwindcss className="text-sky-400 text-3xl md:text-4xl" title="Tailwind CSS" />
                            </div>
                            <div>
                                <p className='text-base md:text-lg font-semibold text-gray-500'>Tailwind CSS</p>
                                <p className='bg-sky-100 text-sky-400 px-1 rounded-md text-sm md:text-base'>Intermediate</p> 
                            </div>
                        </li>
                        <li className='flex justify-start items-center space-x-5'>
                            <div>
                                <SiGit className="text-red-500 text-4xl md:text-5xl" title="Git" />
                            </div>
                            <div>
                                <p className='text-base md:text-lg font-semibold text-gray-500'>Git</p>
                                <p className='bg-red-100 text-red-400 px-1 rounded-md text-sm md:text-base'>Basic</p> 
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</main>
  )
}
