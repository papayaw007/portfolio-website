import React from 'react'


export default function Navbar() {
  return (
    <main id='home'>
         <div className='flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-40 py-10 md:py-6 w-full'>
  <div className='text-2xl md:text-3xl font-bold mb-4 md:mb-0' >
    <a href="#home">
    dev.py
    </a>
    </div>
  <div className='w-full md:w-auto'>
    <ul className='flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 lg:gap-10 text-lg md:text-xl lg:text-2xl font-light'>
    <li
     className="relative cursor-pointer transition-colors hover:text-gray-500
  after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
  after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full">
    <a href="#about">About</a>
  
</li>

<li className="relative cursor-pointer transition-colors hover:text-gray-500
  after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
  after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full">
    <a href="#experience">Skills</a>

</li>
<li className="relative cursor-pointer transition-colors hover:text-gray-500
  after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
  after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full">
   <a href="#projects">Projects</a>
</li>
      <li className='cursor-pointer border-2 border-black px-3 rounded-md hover:text-white hover:bg-black transition-colors hover:border-b-2 hover:border-gray-500'>
        
        <a href="#contact">Contact</a>
        </li>
    </ul>
  </div>
</div>
    </main>
  )
}
