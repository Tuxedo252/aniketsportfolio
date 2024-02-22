import React, { useEffect, useState } from 'react';
// import ProfileImage from '../image/people-3338167_1920.jpg';
import BharatClock from '../image/BharatClock.png';
import Fragments from '../image/Fragments.png';
import PerfectEstate from '../image/PerfectEstate.png';
import PerfectEstate_1 from '../image/PerfectEstate_1.png';
import SimpleCalculator from '../image/SimpleCalculator.png';
import SocialMedia from '../image/SocialMedia.png';
import TodoApp from '../image/TodoApp.png';
import ReactReduxCounter from '../image/counter-react-redux.png';

const Project = ({ projectLink }) => {
    const [profileImage, setProfileImage] = useState("");
    const [projectTitle, setProjectTitle] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [projectTags, setProjectTags] = useState("");
    const Tags = projectTags.split("#").filter((tag) => tag !== "");

    useEffect(() => {
        if (projectLink === "https://perfectestate.onrender.com/") {
            setProjectTitle("PerfectEstate");
            setProjectDescription("Real estate app created using MERN stack, Tailwindcss, google authenticaton using firebase authentication, with search functionality.")
            setProjectTags("#MERN#tailwindcss#authentication");
            setProfileImage(PerfectEstate);
        }
        else if (projectLink === "https://bharatclock.onrender.com/") {
            setProjectTitle("BharatClock");
            setProjectDescription("Bharat clock react based static site that is created to learn useEffect concept of react and handling infinite rendering using useeffect. This uses Html, css, JSX-React-Vite");
            setProjectTags("#Reactjs#Html#Css#static");
            setProfileImage(BharatClock);
        }
        else if (projectLink === "https://calculator-llg5.onrender.com/") {
            setProjectTitle("SimpleCalculator");
            setProjectDescription("Simple calculator created to learn about states of reactjs.This uses Html, css, JSX-React-Vite as well as some Tailwindcss");
            setProjectTags("#Reactjs#Html#Css#static#Tailwindcss ");
            setProfileImage(SimpleCalculator);
        }
        else if (projectLink === "https://fragmments.onrender.com/") {
            setProjectTitle("Fragments");
            setProjectDescription("Fragemnts also created to learn basic concept of rendering and Creation of Components using Reactjs.");
            setProjectTags("#Reactjs#Html#Css#useEffect-React");
            setProfileImage(Fragments);
        }
        else if (projectLink === "https://todoslist-vjg8.onrender.com/") {
            setProjectTitle("Todo UI");
            setProjectDescription("Simple todo ui app created. Teaches Event Handeling, component randerin and also used react-icons.");
            setProjectTags("#React#tailwindcss#react-icons#Html#css#js");
            setProfileImage(TodoApp)
        }
        else if (projectLink === "https://socialmedia-2rsq.onrender.com/") {
            setProjectTitle("SocialMedia");
            setProjectDescription("React app created to learn state management using react contexts as well as fetch methods. Used technologyies reactjs, tailwindcss, Html, Css, External apis.");
            setProjectTags("#Reactjs#tailwindcss#react-icons#Html#css#js");
            setProfileImage(SocialMedia)
        }
        else if (projectLink === "https://counter-react-redux.onrender.com/") {
            setProjectTitle("ReactReduxCounter");
            setProjectDescription("This app created to learn state menagement using Redux. Used technologies Html, Css, Js, Reactjs, Reduxjs, React-Icons.");
            setProjectTags("#Reactjs#tailwindcss#react-icons#Html#css#js#Reduxjs");
            setProfileImage(ReactReduxCounter)
        }
    }, [projectLink])

    return (
        <a href={`${projectLink}`} target='_blank'>
            <div className="max-w-sm rounded overflow-hidden hover:shadow-lg">
                <img className="w-full h-[15rem]" src={profileImage} alt="Sunset in the mountains" />
                <div className="px-6 py-4 flex flex-col items-center justify-center">
                    <div className="font-bold text-xl mb-2">{projectTitle}</div>
                    <p className="text-gray-700 text-base text-center">
                        {projectDescription}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2 flex flex-wrap items-center justify-center">
                    {Tags.map((tag) => <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {tag}
                    </span>
                    )}
                </div>
            </div>
        </a>
    )
}

export default Project
