import React from 'react';
import ProfileImage from '../image/people-3338167_1920.jpg';
import ProfileImage_2 from '../image/torn-paper-7864694_1920.png'

const Introduction = () => {
    return (
        <>
            <div className='flex-wrap sm:flex-nowrap md:mx-4 flex items-center justify-center mt-[8rem] md:mt-[3rem]  w-full h-[100vh] mb-[15rem] sm:mb-0'>
                <div className='w-full flex items-center justify-center'>
                    <div className='w-[100%] sm:w-[80%] h-[30rem] sm:h-[37rem]  rounded-lg shadow-lg' style={{ background: `url(${ProfileImage}) no-repeat center/cover` }}>
                    </div>
                </div>
                <div className='w-full p-8'>
                    <h1 className='text-5xl'>Welcome to Aniket Markam's Portfolio</h1>
                    <p className='mt-[1rem]'>Enthusiastic MERN stack developer with a fervor for crafting seamless and innovative web applications. Proficient in MongoDB, Express.js, React, and Node.js, I thrive on transforming ideas into dynamic and user-centric solutions. Eager to contribute expertise in full-stack development to elevate digital experiences.</p>
                </div>
            </div>
        </>
    )
}

export default Introduction
