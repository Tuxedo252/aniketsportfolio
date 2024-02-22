import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='flex gap-[2rem] flex-wrap items-center justify-center md:justify-between w-full p-3 fixed z-10'>
            <div className=' w-full sm:w-[20rem] flex items-center justify-center mt-[1.5rem] sm:mt-[0rem]'><Link to="/" className='text-2xl text-white font-bold uppercase p-3 rounded-lg backdrop-blur-lg fixed sm:relative'>Aniket Markam</Link></div>
            <div className=''>
                <ul className=' flex flex-wrap gap-2 sm:gap-[0rem] items-center justify-center'>
                    <li className='font-bold  text-white hover:text-slate-700 active:text-slate-700 mr-2  sm:mr-8 p-3 border  border-slate-500 rounded-lg backdrop-blur-lg'><Link className='' to='/resume'>Resume</Link></li>
                    <li className='font-bold  text-white hover:text-slate-700 active:text-slate-700 mr-2  sm:mr-8 p-3 border  border-slate-500 rounded-lg rounded-lg backdrop-blur-lg'><Link className='' to='/projects'>Projects</Link></li>
                    <li className='font-bold  text-white hover:text-slate-700 active:text-slate-700 mr-2 sm:mr-8 p-3 border  border-slate-500 rounded-lg backdrop-blur-lg'><Link className='' to='/contact'>Contact</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header
