import React from 'react';
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { PiGradientBold } from 'react-icons/pi';

const Contact = () => {
    return (
        <div className='p-3 md:p-8 flex flex-col flex-wrap items-center justify-start  w-full mt-[10rem] md:mt-[5rem]'>
            <div className='flex flex-col items-center justify-center p-[2rem] mb-[2rem]'>
                <h1 className='text-center text-6xl text-slate-100 font-bold'>Contact <span className='text-slate-700'>Me</span></h1>
                <span className='font-bold' style={{ fontFamily: "cursive" }}>Let's grow together</span>
            </div>


            <div className=" w-[50%] flex gap-8 md:gap-0 flex-row  items-center justify-center  mb-[2rem]">
                <div className='w-full flex flex-col items-center justify-center'>
                    <a href="mailto:aniketmarkam@gmail.com" className="border rounded-lg bg-white p-1  hover:text-gray-500 transition">
                        <BiLogoGmail className='text-2xl md:text-8xl text-red-900 hover:text-gray-500 transition' />
                    </a>
                    <h3 className='p-1 font-bold text-center'>Email</h3>
                </div>
                <div className='w-full flex flex-col items-center justify-center'>
                    <a href="https://www.linkedin.com/in/aniket-markam-97b518221" target="_blank" className="bg-blue-700 rounded-lg p-1 hover:bg-gray-100 transition">
                        <FaLinkedinIn className='text-white text-2xl md:text-8xl hover:text-gray-500 transition' />
                    </a>
                    <h3 className='p-1 font-bold text-center'>LinkedIn</h3>
                </div>

                <div className='w-full flex flex-col items-center justify-center'>
                    <a href="https://github.com/AniketMarkam" target="_blank" className="hover:text-gray-500 transition">
                        <FaGithub className='text-2xl md:text-8xl' />
                    </a>
                    <h3 className='p-1 font-bold text-center'>GitHub</h3>
                </div>

                <div className='w-full flex flex-col items-center justify-center'>
                    <a href="https://www.instagram.com/__anikettt__26?igsh=ZTY3eHp5bnVjbW5w" target="_blank" className="hover:text-gray-500 transition">
                        <FaSquareInstagram className='text-2xl md:text-8xl rounded-lg hover:bg-gray-500' style={{
                            background: "linear-gradient(to top, #fec501, #ff9000,#ff462b,#ff0965,#e601a3,#db01b4,#d202c4,#9d21e3,#8433f4)"
                        }} />
                    </a>
                    <h3 className='p-1 font-bold text-center'>Instagram</h3>
                </div>
            </div>

            <div className=' w-full flex flex-col items-center justify-center'>
                <div className='flex items-center w-full mt-[3rem]'>
                    <hr className='w-full h-[3px] border border-slate-900 bg-slate-900' />
                </div>
                <div className='w-full h-full flex items-center justify-center'>
                    <h1 className='text-6xl md:text-9xl text-slate-100 text-center font-bold' style={{ fontFamily: "arial" }}>Aniket Markam</h1>
                </div>
                <div className='flex items-center w-full '>
                    <hr className='w-full h-[3px] border border-slate-900 bg-slate-900' />
                    <span className='text-2xl font-bold text-slate-700 '>ThanksForVisiting</span>
                    <hr className='w-full h-[3px] border border-slate-900 bg-slate-900' />
                </div>
            </div>
        </div>
    )
}

export default Contact
