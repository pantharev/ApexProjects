import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import CubeAnimation from '../components/CubeAnimation';
import Animation2 from '../components/Animation2';
import ETLAnimation from '../components/ETLAnimation';

export default function Projects() {

    const [expanded, setExpanded] = useState(false);
    const [privateExpanded, setPrivateExpanded] = useState(false);
    const [expandedText, setExpandedText] = useState("Expand All");
    const [privateExpandedText, setPrivateExpandedText] = useState("Expand All");

    useEffect(() => {
        console.log("useEffect called");
    }, [expanded])
    
    const handleExpandToggle = () => {
        // based on toggle, change between 'Expand All' and 'Collapse All'
        setExpanded((prev) => !prev);
        if (expandedText === "Expand All") {
            setExpandedText("Collapse All");
        } else {
            setExpandedText("Expand All");
        }
    }

    const handlePrivateExpandToggle = () => {
        setPrivateExpanded((prev) => !prev);

        if (privateExpandedText === "Expand All") {
            setPrivateExpandedText("Collapse All");
        } else {
            setPrivateExpandedText("Expand All");
        }
    }

    return (
        <div className="w-full mt-[75px] h-full">
            <h1 className="mb-5">Web projects</h1>
            
            <div className="flex gap-x-2">
                <h2>Public projects</h2>
                <button className="bg-indigo-500 rounded-lg p-1" onClick={handleExpandToggle}>{expandedText}</button>
                {/* <button className="bg-indigo-500 rounded-lg p-2 hover:bg-indigo-300 focus:ring-2 ring-indigo-800" onClick={() => setExpanded(false)}>Collapse All</button> */}
            </div>
            <ul className="mt-3 flex flex-col gap-y-3 list-disc">
                <li className="ml-3 border border-indigo-500 rounded-lg shadow-lg p-2">
                    ACME Dashboard (NextJS14 Tutorial)
                    <div className="flex flex-col gap-y-3">
                        <a href="https://nextjs-dashboard-acme-seven.vercel.app/dashboard/">https://nextjs-dashboard-acme-seven.vercel.app/dashboard</a>
                    </div>
                    <div className={`expanding-container ${expanded ? 'expanding-content' : 'collapsed-content'}`}>
                        Dashboard application that allows users to view and track invoices and revenue. Also allows users to create, update, delete invoices and customers. Made with NextJS14, TailwindCSS, NextAuth, Postgres. 
                        <br></br>
                        <br></br>
                        The main purpose of the application was to learn how to use NextJS14, a full stack web framework for building React based applications, by following the tutorial.
                        The tutorial can be found: <a href="https://nextjs.org/learn">https://nextjs.org/learn</a>
                        and is very well written and easy to follow.
                        <br></br>
                        Some of the things I learned from the tutorial include:
                        using the App router to create pages and routes, handling form validations and errors, mutating data using server actions, authentication and authorization, and more.
                        <br></br>
                        <br></br>
                        <Carousel showArrows={true} className="w-full">
                            <div>
                                <img src="./img/Login.JPG" alt="Login" />
                                <p className="legend">Login</p>
                            </div>
                            <div>
                                <img src="./img/ACME_Dashboard.JPG" alt="Dashboard Home" />
                                <p className="legend">Dashboard Home</p>
                            </div>
                            <div>
                                <img src="./img/Invoices_Table.JPG" alt="Invoices" />
                                <p className="legend">Invoices</p>
                            </div>
                            <div>
                                <img src="./img/Create_Invoice.JPG" alt="Create Invoice" />
                                <p className="legend">Create Invoice</p>
                            </div>
                            <div>
                                <img src="./img/Customers_Table.JPG" alt="Customers" />
                                <p className="legend">Customers</p>
                            </div>
                            <div>
                                <img src="./img/Create_Customer.JPG" alt="Create Customer" />
                                <p className="legend">Create Customer</p>
                            </div>
                        </Carousel> 
                    </div> 
                </li>
                <li className="ml-3 border border-indigo-500 rounded-lg shadow-lg p-2">
                    Apex Commerce
                    <div className="flex flex-col gap-y-3">
                        <a href="https://apex-commerce.vercel.app/">https://apex-commerce.vercel.app/</a>
                    </div>
                    <div className={`expanding-container ${expanded ? 'expanding-content' : 'collapsed-content'}`}>
                        E-Commerce application with shopping cart functionality made with React
                    </div>
                </li>
                <li className="ml-3 border border-indigo-500 rounded-lg shadow-lg p-2">
                    NextAuthTemplate
                    <div className="flex flex-col gap-y-3">
                        <a href="https://nextauthprisma.vercel.app/">https://nextauthprisma.vercel.app/</a>
                    </div>
                    <div className={`expanding-container ${expanded ? 'expanding-content' : 'collapsed-content'}`}>
                        A reusable NextJS14 template with NextAuth and Prisma for future projects.
                        <br></br>
                        It works by using NextAuth to handle authentication, and Prisma to handle the database.
                        <br></br>
                        The template has sign in and sign out functionality, and the following protected pages:
                        <ul className="list-disc ml-5">
                            <li>Protected Page (Profile page of the logged in user)</li>
                            <li>Posts (With CRUD functionality for the logged in user)</li>
                        </ul>
                        <br></br>
                        A user guide to use the template can be found here: <a href="https://github.com/pantharev/nextauthprisma">https://github.com/pantharev/nextauthprisma</a>
                    </div>
                </li>
                <li className="ml-3 border border-indigo-500 rounded-lg shadow-lg p-2">
                    SurveySpeak (& design). 
                    <div className="flex flex-col gap-y-3">
                        <a href="https://brainspeak.onrender.com/">https://brainspeak.onrender.com/</a>
                        <a href="https://surveyspeak.vercel.app/">https://surveyspeak.vercel.app/</a>
                    </div>
                    <div className={`expanding-container ${expanded ? 'expanding-content' : 'collapsed-content'}`}>
                        Web application prototype that would allow people to take surveys that 'speak' to the user with their own ai personalities. 
                        Has a personal assistaint robot made with OpenAI api that can be interacted with. General wrapper around the OpenAI api that tracks chat history and can be used as a chatbot.
                        <br></br>
                        This project was made alongside a designer and is on hold as of 9/24/2023.
                    </div>
                    {/* TODO: Carousel of images */}
                </li>
                <li className="ml-3 border border-indigo-500 rounded-lg shadow-lg p-2">
                    LMS FIU.
                    <div className="flex flex-col gap-y-3">
                        <a href="https://github.com/pantharev/lms-fiu-fb-client">https://github.com/pantharev/lms-fiu-fb-client</a>
                    </div>
                    <div className={`expanding-container ${expanded ? 'expanding-content' : 'collapsed-content'}`}>
                        A learning management system that is integrated into Facebook. It was created for underdeveloped regions to access through Facebook with no data charges.
                        <br></br>
                        Some core functionality includes allowing professors/admins to create courses and course content (pdfs/links/qualtrics quizzes), and students to enroll in courses and view course content.
                        <br></br>
                        Used the MEAN full-stack (MySql, Express, Angular, NodeJS).
                    </div>
                </li>
                <li className="ml-3 border border-indigo-500 rounded-lg shadow-lg p-2">
                    Reactive Handlebars
                    <div className="flex flex-col gap-y-3">
                        <a href="https://github.com/pantharev/ReactiveHandlebars">Reactive Handlebars github repository</a>
                    </div>
                    <div className={`expanding-container ${expanded ? 'expanding-content' : 'collapsed-content'}`}>
                        This was made with Handlebars and RXJS, to create reactive Handlebars components that refresh when the data changes.
                        Influenced by frameworks such as Angular, React, and Vuejs.
                    </div>
                </li>
            </ul>

            {/* <hr className="border border-b-purple-300 my-5"></hr> */}

            <div className="flex gap-x-2 mt-5 mb-2">
                <h2>Private projects</h2>
                <button className="bg-indigo-600 rounded-lg p-1" onClick={handlePrivateExpandToggle}>{privateExpandedText}</button>
            </div>
            <ul className="mt-3 flex flex-col gap-y-3 list-disc">
                <li className="ml-3 border border-indigo-500 rounded-lg shadow-lg p-2">
                    Parking System
                    <div className={`expanding-container ${privateExpanded ? 'expanding-content' : 'collapsed-content'}`}>
                        <div>
                            Made with React, NodeJs, and Sql Server CTEs and Stored Procedures. Under development as of 9/27/2023.
                            <br></br>
                            A parking system that allows admins to manage parking lots for the residents/renters, that are part of multi family condo buildings, and sends notifications if the monthly payment is late/expired/expiring soon.
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

            <div className="flex gap-x-2 mt-5 mb-2">
                <h2>Pending projects</h2>
            </div>
            <ul className="mt-3 flex flex-col gap-y-3 list-disc">
                <li className="ml-3 border border-indigo-500 rounded-lg shadow-lg p-2">
                    Apex Commerce v2
                        <div>
                            An e-commerce application with functionality such as product search, shopping cart, and checkout. Will also contain reviews, ratings, and a user profile page. And will allow the user to connect to a payment provider such as paypal or stripe or shopify.
                            May be extended to allow users to create their own stores and sell their own products.
                            <br></br>
                            To be made with React, NextJS, NextAuth, TailwindCSS, and Prisma + Neon Database for storage.
                            Expected to have a working, first-draft prototype by 2/1/2024.
                        </div>                      
                </li>
            </ul>

            {/* <hr className="border border-b-purple-300 my-5"></hr> */}

            <section className="mt-5 mb-2">
                <h2 className="mb-2">ETL/ELT/BI process</h2>
                <p>Experience building SSIS/ETL data pipelines (using C#/python/SQL server) to extract information from a source vendor API, and load it into a data warehouse for business reporting purposes. Ultimately, the reports and data is used to enhance decision making for the company.</p>
                <br></br>
                <p>
                    The ETL/ELT process involves <strong>extracting</strong> data from diverse sources such as APIs, databases, or files (CSV, XLSX, XML, JSON). 
                    This data is then <strong>transformed</strong> through processes like data cleansing, aggregation, normalization, and enrichment, to prepare it for analysis and reporting. 
                    Finally, the transformed data is <strong>loaded</strong> into a source destination, such as a database or a data warehouse. 
                    This resulting data model is then utilized to generate insightful reports for business intelligence purposes.
                </p>
                <div className="mt-5 mb-5">
                    {/* <CubeAnimation /> */}
                    <ETLAnimation />
                    {/* <Animation2 /> */}
                </div>
            </section>

            {/* <hr className="border border-b-purple-300 my-5"></hr> */}

            <section>
                <h2>Desktop projects</h2>
                <p>-</p>
            </section>

            {/* <hr className="border border-b-purple-300 my-5"></hr> */}

            <section>
                <h2>Misc projects</h2>

                <ul className="mt-3 flex flex-col gap-y-3 list-disc">
                    <li className="ml-3 border border-indigo-500 rounded-lg shadow-lg p-2 hover:bg-gradient-to-r from-transparent from-30% via-cyan-300 via-50% to-purple-300 to-90%">
                        Apex Radio. 
                        <div className="flex flex-col gap-y-3">
                            <a href="https://apex-radio.vercel.app/">https://apex-radio.vercel.app/</a>
                        </div>
                        <div className={`expanding-container ${expanded ? 'expanding-content' : 'collapsed-content'}`}>
                            Made with React. Fun wip side project, where albums can be made and songs are liked/disliked.
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );
}