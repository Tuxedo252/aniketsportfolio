import React from 'react';
import { PiMapPinFill } from "react-icons/pi";

const Resume = () => {
    const resumePdfPath = import.meta.env.BASE_URL + 'Resume.pdf';
    return (
        <div className=' flex flex-col mt-[10rem] md:mt-[5rem]  w-full p-0 md:pl-[5rem] pr-0 md:pr-[5rem] '>
            <div className='mt-3 mb-8 p-3 flex flex-col md:flex-row  items-start justify-center w-full '>
                <div className='flex  items-center justify-center md:justify-start w-[100%] md:w-[25%] h-full  '>
                    <h1 className='flex flex-start text-6xl font-bold text-slate-100'>RESUME</h1>
                </div>
                <div className='flex items-center justify-center md:justify-start w-[100%] md:w-[75%] h-full  mt-4 md:mt-0'>
                    <a href={resumePdfPath} download='Aniket_Markams_Resume.pdf'>
                        <button className="bg-red-500 text-white font-bold p-2 shadow-lg">Resume.pdf</button>
                    </a>
                </div>
            </div>

            <div className='mb-8 p-3 flex flex-col md:flex-row pt-4 md:pt-3 items-start justify-center  w-full'>
                <div className='flex items-center justify-center md:justify-start w-[100%] md:w-[25%]  h-full  '>
                    <h1 className='flex flex-start text-4xl font-bold uppercase text-slate-100'>Education</h1>
                </div>
                <div className='flex flex-col items-start justify-center w-[100%] md:w-[75%] h-full   p-3 sm:p-3'>
                    <div>
                        <div>
                            <h2 className='text-2xl underline mb-4 mt-4 font-bold'>School</h2>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-col items-start justify-center gap-1'>
                                <div className='flex items-center justify-center gap-1' >
                                    <h3 className='font-bold'>Government Higher Secondary School Rampur, Jabalpur, Madhya Pradesh</h3><a href="https://maps.app.goo.gl/MWqWHPXKVeUWi2Ap6" target="_blank"><PiMapPinFill className='text-4xl text-green-700 p-1 ' /></a>
                                </div>
                                <p>Secured first place in 10th board with 83.5 percentage in my class.</p>
                            </div>
                            <div className='flex flex-col items-start justify-center gap-1'>
                                <div className='flex items-center justify-center gap-1' >
                                    <h3 className='font-bold'>Balak mandir higher secondary school</h3><a href="https://maps.app.goo.gl/tixYVfbmGw2JELJm8" target="_blank"><PiMapPinFill className='text-4xl text-green-700 p-1 ' /></a>
                                </div>
                                <p>Secured third place in 12th board with 81 percentage in my class.</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col items-start justify-center'>
                        <div >
                            <h2 className='text-2xl underline mb-4 mt-4 font-bold'>Collage</h2>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-col items-start justify-center gap-1'>
                                <div className='flex items-center justify-center gap-1' >
                                    <h3 className='font-bold'>Jabalpur Engineering Collage</h3><a href="https://maps.app.goo.gl/DZp7nQeZLFHESu8Z7" target="_blank"><PiMapPinFill className='text-4xl text-green-700 p-1 ' /></a>
                                </div>
                                <p><b>Betchelors of Technology</b> Degree in <b>Information Technology</b> field.</p>
                                <p>Graduated from <b>Jabalpur Engineering Collage</b> with 7.05 <b>CGPA</b> score.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mb-8 p-3 flex flex-col md:flex-row  items-start justify-center w-full '>
                <div className='flex  items-center justify-center md:justify-start w-[100%] md:w-[25%] h-full  '>
                    <h1 className='flex flex-start text-4xl font-bold uppercase text-slate-100'>Skills</h1>
                </div>
                <div className='flex items-center justify-center w-[100%] md:w-[75%] mt-3 md:mt-0 h-full  '>
                    <div className='flex flex-col items-center justify-Start w-full'>
                        <div className=' -slate-900 w-full'>
                            <h2 className='text-2xl underline mb-4 mt-4 font-bold w-full'>Technical Skills</h2>
                        </div>

                        <div className='flex flex-col  md:flex-row  -slate-900 w-full'>
                            <div className='flex items-center  -green-300 w-[100%] md:w-[25%]'><h3 className='font-bold'>HTML</h3></div>
                            <div className='flex items-center  -green-300 w-[100%] md:w-[75%] pt-4 pb-4'>
                                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                    <div className="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "80%" }}> 80%</div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col  md:flex-row  -slate-900 w-full'>
                            <div className='flex items-center  -green-300 w-[100%] md:w-[25%]'><h3 className='font-bold'>CSS</h3></div>
                            <div className='flex items-center  -green-300 w-[100%] md:w-[75%] pt-4 pb-4'>
                                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                    <div className="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "80%" }}> 80%</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col  md:flex-row  -slate-900 w-full'>
                            <div className='flex items-center  -green-300 w-[100%] md:w-[25%]'><h3 className='font-bold'>TailwindCSS</h3></div>
                            <div className='flex items-center  -green-300 w-[100%] md:w-[75%] pt-4 pb-4'>
                                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "75%" }}> 75%</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col  md:flex-row  -slate-900 w-full'>
                            <div className='flex items-center  -green-300 w-[100%] md:w-[25%]'><h3 className='font-bold'>JavaScript</h3></div>
                            <div className='flex items-center  -green-300 w-[100%] md:w-[75%] pt-4 pb-4'>
                                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "70%" }}> 70%</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col  md:flex-row  -slate-900 w-full'>
                            <div className='flex items-center  -green-300 w-[100%] md:w-[25%]'><h3 className='font-bold'>ReactJs</h3></div>
                            <div className='flex items-center  -green-300 w-[100%] md:w-[75%] pt-4 pb-4'>
                                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                    <div className="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "80%" }}> 80%</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col  md:flex-row  -slate-900 w-full'>
                            <div className='flex items-center  -green-300 w-[100%] md:w-[25%]'><h3 className='font-bold'>NodeJs</h3></div>
                            <div className='flex items-center  -green-300 w-[100%] md:w-[75%] pt-4 pb-4'>
                                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                    <div className="bg-red-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "50%" }}> 50%</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col  md:flex-row  -slate-900 w-full'>
                            <div className='flex items-center  -green-300 w-[100%] md:w-[25%]'><h3 className='font-bold'>MongoDB</h3></div>
                            <div className='flex items-center  -green-300 w-[100%] md:w-[75%] pt-4 pb-4'>
                                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                    <div className="bg-red-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "45%" }}> 45%</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col  md:flex-row  -slate-900 w-full'>
                            <div className='flex items-center  -green-300 w-[100%] md:w-[25%]'><h3 className='font-bold'>SQL</h3></div>
                            <div className='flex items-center  -green-300 w-[100%] md:w-[75%] pt-4 pb-4'>
                                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "60%" }}> 60%</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col  md:flex-row  -slate-900 w-full'>
                            <div className='flex items-center  -green-300 w-[100%] md:w-[25%]'><h3 className='font-bold'>C++</h3></div>
                            <div className='flex items-center  -green-300 w-[100%] md:w-[75%] pt-4 pb-4'>
                                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                    <div className="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "80%" }}> 80%</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className='mb-8 p-3 flex flex-col md:flex-row  items-start justify-center w-full '>
                <div className='flex  items-center justify-center md:justify-start w-[100%] md:w-[25%] h-full  '>
                    <h1 className='flex flex-start text-4xl font-bold uppercase pl-[5rem] sm:pl-0 text-slate-100'>Language & Interests</h1>
                </div>
                <div className='flex flex-col items-center justify-center w-[100%] md:w-[75%] mt-3 md:mt-0 h-full '>
                    <div className=' w-full'>
                        <h2 className='text-2xl underline mb-4 mt-4 font-bold w-full'>
                            Languages
                        </h2>
                    </div>
                    <div className='flex flex-nowrap md:flex-wrap items-center w-full pb-4'>
                        <div className='w-[100%] md:w-[25%]'>
                            <h2 className='font-bold'>Hindi</h2>
                        </div>
                        <div className='flex items-center w-[100%] md:w-[75%]'>
                            <div className='w-full p-2 bg-slate-500 text-white text-center rounded-lg'>Native</div>
                        </div>
                    </div>
                    <div className='flex items-center w-full'>
                        <div className='w-[100%] md:w-[25%]'>
                            <h2 className='font-bold'>English</h2>
                        </div>
                        <div className='flex items-center w-[100%] md:w-[75%]'>
                            <div className='w-full p-2 bg-slate-500 text-center text-white rounded-lg'>Conversational</div>
                        </div>
                    </div>


                    <div className=' w-full'>
                        <h2 className='text-2xl underline mb-4 mt-4 font-bold w-full'>
                            Interests
                        </h2>
                    </div>
                    <div className='flex items-center w-full'>
                        <ul className='w-full'>
                            <li className='font-bold'>Cricket</li>
                            <li className='font-bold'>Fitness</li>
                            <li className='font-bold'>Food</li>
                            <li className='font-bold'>Self-Improvement</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume
