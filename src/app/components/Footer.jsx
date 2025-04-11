import React from 'react'

export default function Footer() {
  return (
   <main>
    <div className='flex flex-col items-center justify-center'>
    <div className=' items-center justify-center p-8 md:p-10 w-full md:w-auto'>
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
    <a href="#experience">Experience</a>

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
  <div>
    <p className='text-gray-500 text-sm sm:text-lg p-10'>Copyright © 2025 Papa Yaw Adu-Asare. All Rights Reserved. </p>
  </div>

    </div>
   </main>
  )
}
