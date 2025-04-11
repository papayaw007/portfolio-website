import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contacts() {
  return (
    <main id='contact'>
  <div className="flex justify-center items-center min-h-screen">
    <div className="flex flex-col justify-center items-center px-4 md:px-0">
      <div className="w-full text-center space-y-3 md:space-y-5 py-8 md:py-5">
        <p className="text-4xl md:text-5xl font-semibold">Contact me</p>
        <p className="text-gray-500 text-lg md:text-xl lg:text-2xl">
          I'm open for work and collaborations. <br className="hidden sm:block" /> Feel free to reach
          out if you have a project <br className="hidden sm:block" /> in mind or want to team up!
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-5 -space-x-4 md:space-x-36 border border-gray-400 p-5 md:p-10 rounded-md mt-5 md:mt-10 w-full max-w-md sm:max-w-lg md:max-w-xl">
        <div className="flex justify-center items-center gap-3">
          <FaEnvelope className="text-2xl hover:text-gray-600 transition-colors" />
          <div className="text-xl font-normal">
            <a
              href="mailto:papayawaduasare@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative cursor-pointer transition-colors hover:text-gray-500   after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0    after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Email me
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3">
          <FaLinkedin className="text-black text-2xl hover:text-blue-600 transition-colors" />
          <div className="text-xl font-normal">
            <a
              href="https://linkedin.com/in/papa-yaw-adu-asare-226630212"
              target="_blank"
              rel="noopener noreferrer"
              className="relative cursor-pointer transition-colors hover:text-gray-500   after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0    after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
  );
}
