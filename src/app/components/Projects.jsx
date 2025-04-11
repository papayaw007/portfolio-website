import React from 'react'

export default function Projects() {
  return (
    <main>
    <div className='min-h-screen bg-gray-50'>
        <div className='w-full text-center py-8 md:py-5'>
            <p className='text-gray-500 text-xl md:text-2xl'>Browse my recent</p>
            <p className='text-4xl md:text-5xl font-semibold'>Projects</p>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-10 lg:gap-x-20 p-4 md:p-10 lg:p-20'>
            <div className='flex flex-col justify-center items-center p-4 md:p-8 bg-white w-auto h-auto space-y-4 md:space-y-5 rounded-lg shadow-2xl'>
                <div className='w-full max-w-xs h-60 md:h-80 bg-gray-600 rounded-lg'></div>
                <p className='text-xl md:text-2xl font-semibold'>Project One</p>
                <div>
                    <ul className='flex space-x-5'>
                        <li className='bg-blue-100 text-blue-400 px-2 rounded-md'>HTML</li>
                        <li className='bg-red-100 text-red-400 px-2 rounded-md'>CSS</li>
                    </ul>
                </div>
                <div className='space-x-3 md:space-x-5 flex flex-wrap justify-center'>
                    <button className='border border-black px-3 md:px-4 py-2 rounded-full hover:bg-black hover:text-white mb-2'>Github</button>
                    <button className='border border-black px-3 md:px-4 py-2 rounded-full hover:bg-black hover:text-white mb-2'>Live Demo</button>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center p-4 md:p-8 bg-white w-auto h-auto space-y-4 md:space-y-5 rounded-lg shadow-2xl'>
                <div className='w-full max-w-xs h-60 md:h-80 bg-gray-600 rounded-lg'></div>
                <p className='text-xl md:text-2xl font-semibold'>Project One</p>
                <div>
                    <ul className='flex space-x-5'>
                        <li className='bg-blue-100 text-blue-400 px-2 rounded-md'>HTML</li>
                        <li className='bg-red-100 text-red-400 px-2 rounded-md'>CSS</li>
                    </ul>
                </div>
                <div className='space-x-3 md:space-x-5 flex flex-wrap justify-center'>
                    <button className='border border-black px-3 md:px-4 py-2 rounded-full hover:bg-black hover:text-white mb-2'>Github</button>
                    <button className='border border-black px-3 md:px-4 py-2 rounded-full hover:bg-black hover:text-white mb-2'>Live Demo</button>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center p-4 md:p-8 bg-white w-auto h-auto space-y-4 md:space-y-5 rounded-lg shadow-2xl'>
                <div className='w-full max-w-xs h-60 md:h-80 bg-gray-600 rounded-lg'></div>
                <p className='text-xl md:text-2xl font-semibold'>Project One</p>
                <div>
                    <ul className='flex space-x-5'>
                        <li className='bg-blue-100 text-blue-400 px-2 rounded-md'>HTML</li>
                        <li className='bg-red-100 text-red-400 px-2 rounded-md'>CSS</li>
                    </ul>
                </div>
                <div className='space-x-3 md:space-x-5 flex flex-wrap justify-center'>
                    <button className='border border-black px-3 md:px-4 py-2 rounded-full hover:bg-black hover:text-white mb-2'>Github</button>
                    <button className='border border-black px-3 md:px-4 py-2 rounded-full hover:bg-black hover:text-white mb-2'>Live Demo</button>
                </div>
            </div>
        </div>
    </div>
</main>
  )
}
