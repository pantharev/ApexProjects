import React, { useState, useEffect } from 'react';
import { useSpring } from 'react-spring';

export default function Projects() {

    const [expanded, setExpanded] = useState(false);

    //expand the project description slowly with animation
    // const styles = useSpring({
    //     height: expanded ? 'auto' : '0px',
    //     opacity: expanded ? 1 : 0,
    //     overflow: 'hidden',
    //     config: {
    //         duration: 500
    //     }
    // });

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
                <li className="ml-3 border border-indigo-500 rounded-lg shadow-lg hover:bg-green-300">
                    Apex Commerce
                    <div className="flex flex-col gap-y-3">
                        <a href="https://apex-commerce.vercel.app/">https://apex-commerce.vercel.app/</a>
                    </div>
                    <div className={`expanding-container ${expanded ? 'expanding-content' : 'collapsed-content'}`}>
                        E Commerce application with shopping cart functionality made with React
                    </div>
                </li>
                <li className="ml-3 border border-indigo-500 rounded-lg shadow-lg hover:bg-green-300">
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
                <li className="ml-3 border border-indigo-500 rounded-lg shadow-lg hover:bg-green-300">
                    Apex Radio. 
                    <div className="flex flex-col gap-y-3">
                        <a href="https://apex-radio.vercel.app/">https://apex-radio.vercel.app/</a>
                    </div>
                    <div className={`expanding-container ${expanded ? 'expanding-content' : 'collapsed-content'}`}>
                        Made with React. Fun wip side project, where albums can be made and songs are liked/disliked.
                    </div>
                </li>
                <li className="ml-3 border border-indigo-500 rounded-lg shadow-lg hover:bg-green-300">
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
            <ul className="mt-3 flex flex-col gap-y-3 list-disc">
                <li className="ml-3 border border-indigo-500 rounded-lg shadow-lg hover:bg-green-300"></li>
            </ul>

            <h2>Desktop projects</h2>


            <h2>Misc projects</h2>
        </>
    );
}