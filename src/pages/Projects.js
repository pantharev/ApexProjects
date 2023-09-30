import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import CubeAnimation from '../components/CubeAnimation';
import Animation2 from '../components/Animation2';
import ETLAnimation from '../components/ETLAnimation';

export default function Projects() {

    const [expanded, setExpanded] = useState(false);
    const [privateExpanded, setPrivateExpanded] = useState(false);

    useEffect(() => {
        console.log("useEffect called");
    }, [expanded])
    console.log(expanded);

    return (
        <>
            <h1 className="mb-5">Web projects</h1>
            <h2>Public live Projects</h2>
            <div className="flex gap-x-2">
                <button className="bg-indigo-500 rounded-lg p-2 hover:bg-indigo-300 focus:ring-2 ring-indigo-800" onClick={() => setExpanded(true)}>Expand</button>
                <button className="bg-indigo-500 rounded-lg p-2 hover:bg-indigo-300 focus:ring-2 ring-indigo-800" onClick={() => setExpanded(false)}>Collapse</button>
            </div>
            <ul className="mt-3 flex flex-col gap-y-3 list-disc">
                <li className="ml-3 border border-indigo-500 rounded-lg shadow-lg">
                    Apex Commerce
                    <div className="flex flex-col gap-y-3">
                        <a href="https://apex-commerce.vercel.app/">https://apex-commerce.vercel.app/</a>
                    </div>
                    <div className={`expanding-container ${expanded ? 'expanding-content' : 'collapsed-content'}`}>
                        E Commerce application with shopping cart functionality made with React
                    </div>
                </li>
                <li className="ml-3 border border-indigo-500 rounded-lg shadow-lg">
                    SurveySpeak (& design). 
                    <div className="flex flex-col gap-y-3">
                        <a href="https://brainspeak.onrender.com/">https://brainspeak.onrender.com/</a>
                        <a href="https://surveyspeak.vercel.app/">https://surveyspeak.vercel.app/</a>
                    </div>
                    <div className={`expanding-container ${expanded ? 'expanding-content' : 'collapsed-content'}`}>
                        Web app prototype that would allow people to take surveys that 'speak' to the user with their own ai personalities. 
                        Has a personal assistaint robot made with OpenAI api that can be interacted with. General wrapper around the OpenAI api that tracks chat history and can be used as a chatbot.
                        Project is on hold as of 9/24/2023.
                    </div>
                    {/* TODO: Carousel of images */}
                </li>
                <li className="ml-3 border border-indigo-500 rounded-lg shadow-lg">
                    Apex Radio. 
                    <div className="flex flex-col gap-y-3">
                        <a href="https://apex-radio.vercel.app/">https://apex-radio.vercel.app/</a>
                    </div>
                    <div className={`expanding-container ${expanded ? 'expanding-content' : 'collapsed-content'}`}>
                        Made with React. Fun wip side project, where albums can be made and songs are liked/disliked.
                    </div>
                </li>
                <li className="ml-3 border border-indigo-500 rounded-lg shadow-lg">
                    LMS FIU.
                    <div className="flex flex-col gap-y-3">
                        <a href="https://github.com/pantharev/lms-fiu-fb-client">https://github.com/pantharev/lms-fiu-fb-client</a>
                    </div>
                    <div className={`expanding-container ${expanded ? 'expanding-content' : 'collapsed-content'}`}>
                        A learning management system that is integrated into Facebook. It was created for underdeveloped regions to access through Facebook with no data charges.
                        <br></br>
                        Some core functionality includes allowing professors/admins to create courses and course content (pdfs/links/qualtrics quizzes), and students to enroll in courses and view course content.
                        <br></br>
                        Used the MEAN full-stack (MySql, Express, Anuglar, NodeJS).
                    </div>
                </li>
            </ul>
            <h2>Private projects</h2>
            <div className="flex gap-x-2">
                <button className="bg-indigo-600 rounded-lg p-2 hover:bg-indigo-400 focus:ring-2 ring-indigo-800" onClick={() => setPrivateExpanded(true)}>Expand</button>
                <button className="bg-indigo-600 rounded-lg p-2 hover:bg-indigo-400 focus:ring-2 ring-indigo-800" onClick={() => setPrivateExpanded(false)}>Collapse</button>
            </div>
            <ul className="mt-3 flex flex-col gap-y-3 list-disc">
                <li className="ml-3 border border-indigo-500 rounded-lg shadow-lg">
                    Parking System
                    <div className={`expanding-container ${privateExpanded ? 'expanding-content' : 'collapsed-content'}`}>
                        <div>
                            Made with React, nodeJs, and Sql Server CTEs and Stored Procedures. Under development as of 9/27/2023.
                            <br></br>
                            A parking system that allows admins to manage parking lots for the residents/renters and sends notifications if the monthly payment is late/expired/expiring soon.
                        </div>
                        <Carousel showArrows={true} className="w-full">
                            <div>
                                <img src="./img/BTH_Login.png" alt="Login" />
                                <p className="legend">Login</p>
                            </div>
                            <div>
                                <img src="./img/BTH_Dashboard_Home.png" alt="Dashboard Home" />
                                <p className="legend">Dashboard Home</p>
                            </div>
                            <div>
                                <img src="./img/BTH_Parking_Renters.png" alt="Parking Renters" />
                                <p className="legend">Parking Renters</p>
                            </div>
                            <div>
                                <img src="./img/BTH_Notifications.png" alt="Notifications" />
                                <p className="legend">Notifications</p>
                            </div>
                        </Carousel>                        
                    </div>
                </li>
            </ul>

            <h2>ETL/BI process</h2>
            <div>
                {/* <CubeAnimation /> */}
                <ETLAnimation />
                {/* <Animation2 /> */}
            </div>

            <h2>Desktop projects</h2>


            <h2>Misc projects</h2>
        </>
    );
}