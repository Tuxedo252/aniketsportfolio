import React from 'react'
import Project from '../components/Project'

const Projects = () => {
    const projectLink = [
        "https://perfectestate.onrender.com/",
        "https://socialmedia-2rsq.onrender.com/",
        "https://counter-react-redux.onrender.com/",
        "https://bharatclock.onrender.com/",
        "https://calculator-llg5.onrender.com/",
        "https://fragmments.onrender.com/",
        "https://todoslist-vjg8.onrender.com/",
    ]
    return (
        <div className='p-3 md:p-8 flex flex-col flex-wrap items-center justify-center w-full h-full mt-[10rem] md:mt-[5rem]'>
            <div className=' w-full flex flex-wrap  items-center justify-between'>
                <h1 className='text-5xl md:text-8xl uppercase font-bold w-[70%] text-center text-slate-100'>Project</h1>
                <h1 className='text-4xl md:text-8xl uppercase font-bold text-slate-700 w-[30%]'>23 - 24</h1>
            </div>
            <div className='flex flex-wrap gap-8 mt-[2rem] items-start justify-center  w-full'>
                {projectLink.map((link) => <Project key={link} projectLink={link} />)}
            </div>
            <div className='flex items-center justify-start w-[80%] mt-[3rem]'>
                <h1 className='text-3xl'>Download my projects through github. To go to my github account click on the github icon.<a href="https://github.com/Tuxedo252" target='_blank' className='text-3xl text-blue-700 underline w-full'>Click Here To Go To My Github Account</a></h1>

            </div>
            <div className='flex items-center w-full mt-[3rem]'>
                <hr className='w-full h-[3px] border border-slate-900' />
                <span className='text-2xl font-bold'>Ending...</span>
                <hr className='w-full h-[3px] border border-slate-900' />
            </div>
        </div>
    )
}

export default Projects
