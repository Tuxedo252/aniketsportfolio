import React from 'react';
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="flex items-center justify-center bg-gray-900 text-white py-4 w-full static bottom-0">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
                <div className='flex items-center justify-center space-x-4 mb-6 sm:mb-0 sm:ml-[5rem]'>
                    <p className="text-sm">&copy; 2024 Aniket. All rights reserved.</p>
                </div>
                <div className="flex items-center justify-center space-x-4 mb-5 sm:mb-0 sm:mr-[5rem]">
                    <a href="mailto:aniketmarkam@gmail.com" className="border rounded-lg bg-white p-1  hover:text-gray-500 transition">
                        <BiLogoGmail className='text-2xl text-red-900' />
                    </a>
                    <a href="https://www.linkedin.com/in/aniket-markam-97b518221" target="_blank" className="bg-blue-700 rounded-lg p-1 hover:text-gray-500 transition">
                        <FaLinkedinIn className='text-2xl' />
                    </a>
                    <a href="https://github.com/AniketMarkam" target="_blank" className="hover:text-gray-500 transition">
                        <FaGithub className='text-3xl' />
                    </a>
                </div>

            </div>
        </footer>

    )
}

export default Footer
