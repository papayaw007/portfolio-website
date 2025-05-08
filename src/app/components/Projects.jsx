import React from 'react'
import Link from 'next/link'


export default function Projects() {
  return (
    <main id='projects'>
    <div className='min-h-screen bg-gray-50'>
        <div className='w-full text-center py-8 md:py-5'>
            <p className='text-gray-500 text-xl md:text-2xl'>Browse my recent</p>
            <p className='text-4xl md:text-5xl font-semibold'>Projects</p>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-10 lg:gap-x-20 p-4 md:p-8 lg:p-8'>
            <div className='flex flex-col justify-center items-center p-4 md:p-8 bg-white w-auto h-auto space-y-4 md:space-y-5 rounded-lg shadow-2xl'>
                <div className='w-full max-w-xs h-60 md:h-80 bg-gray-600 rounded-lg'>
                    <img src='/denovo.jpeg' alt="" className='w-full h-full object-cover' />
                </div>
                <p className='text-xl md:text-2xl font-semibold'>Denovo App</p>
                <div>
                    <p>Full-stack web application enabling lawyers to share and access legal notes with AI-powered summarization functionality.</p>
                </div>
                <div>
                    <ul className='flex space-x-5'>
                        <li className='bg-blue-100 text-blue-400 px-2 rounded-md'>React</li>
                        <li className='bg-red-100 text-red-400 px-2 rounded-md'>Tailwind</li>
                        <li className='bg-indigo-100 text-indigo-400 px-2 rounded-md'>Firebase</li>
                        <li className='bg-green-100 text-green-400 px-2 rounded-md'>Postman</li>
                    </ul>
                </div>
                <div className='space-x-3 md:space-x-5 flex flex-wrap justify-center'>
                    <button className='border border-black px-3 md:px-4 py-2 rounded-full hover:bg-black hover:text-white mb-2'>
                        <Link href={'https://github.com/papayaw007/denovo-app'} target='__blank'>
                        Github
                        </Link>
                        </button>
                    <button className='border border-black px-3 md:px-4 py-2 rounded-full hover:bg-black hover:text-white mb-2'>
                        <Link href={'https://denovo-app.vercel.app'} target='__blank'>
                        Live Demo
                        </Link>
                       
                        </button>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center p-4 md:p-8 bg-white w-auto h-auto space-y-4 md:space-y-5 rounded-lg shadow-2xl'>
                <div className='w-full max-w-xs h-60 md:h-80 bg-gray-600 rounded-lg'>
                <img src='/otumfuo.jpeg' alt="" className='w-full h-full object-cover' />
                </div>
                <p className='text-xl md:text-2xl font-semibold'>Otumfuo Foundation Web App</p>
                <div>
                    <p>A dynamic web app using Next.js, TypeScript, and Sanity CMS for fast, content-driven pages</p>
                </div>
                <div>
                    <ul className='flex space-x-5'>
                        <li className='bg-blue-100 text-blue-400 px-2 rounded-md'>TypeScript</li>
                        <li className='bg-red-100 text-red-400 px-2 rounded-md'>Next.js</li>
                    </ul>
                </div>
                <div className='space-x-3 md:space-x-5 flex flex-wrap justify-center'>
                    <button className='border border-black px-3 md:px-4 py-2 rounded-full hover:bg-black hover:text-white mb-2'>
                    <Link href={'https://github.com/papayaw007/otumfuo-foundation-website'} target='__blank'>
                        Github
                        </Link></button>
                    <button className='border border-black px-3 md:px-4 py-2 rounded-full hover:bg-black hover:text-white mb-2'>
                    <Link href={'https://otumfuor-foundation.vercel.app'} target='__blank'>
                        Live Demo
                        </Link>
                    </button>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center p-4 md:p-8 bg-white w-auto h-auto space-y-4 md:space-y-5 rounded-lg shadow-2xl'>
                <div className='w-full max-w-xs h-60 md:h-80 bg-gray-600 rounded-lg'>
                <img src='/generator.jpeg' alt="" className='w-full h-full object-cover' />
                </div>
                <p className='text-xl md:text-2xl font-semibold'>AI password Generator</p>
                <div>
                    <p>An AI-assisted password generator built with Next.js and TypeScript, using a backend API for prompt-based secure password creation.</p>
                </div>
                <div>
                    <ul className='flex space-x-5'>
                        <li className='bg-yellow-100 text-yellow-400 px-2 rounded-md'>JS</li>
                        <li className='bg-red-100 text-red-400 px-2 rounded-md'>Tailwind CSS</li>
                        <li className='bg-blue-100 text-blue-400 px-2 rounded-md'>Open Ai</li>
                    </ul>
                </div>
                <div className='space-x-3 md:space-x-5 flex flex-wrap justify-center'>
                <button className='border border-black px-3 md:px-4 py-2 rounded-full hover:bg-black hover:text-white mb-2'>
                    <Link href={'https://github.com/papayaw007/ai-password-generator'} target='__blank'>
                        Github
                        </Link></button>
                    <button className='border border-black px-3 md:px-4 py-2 rounded-full hover:bg-black hover:text-white mb-2'>
                    <Link href={'https://ai-password-generator.vercel.app/'} target='__blank'>
                        Live Demo
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    </div>
</main>
  )
}
