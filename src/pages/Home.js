import Hero from "../components/Hero";
import BlogsHome from "../components/BlogsHome";
import Blogs from "../components/Blogs";
import Socials from "../components/Socials";
import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {

    const URL = 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/cln7uwkh5fb4301t797ym0ysd/master'

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch(URL, {
            method: "POST",
            headers: {
                contentType: "application/json",
                accept: "application/json",
            },
            body: JSON.stringify({
                query: `
                    query Blogs {
                        blogs(orderBy: publishedAt_DESC, first: 3) {
                            id
                            slugId
                            title
                            image {
                                url
                            }
                        }
                    }
                `
            })
        }).then((res) => res.json()).then((data) => {
            console.log(data);
            setBlogs(data.data.blogs)
        }
        ).catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <div className="flex flex-col justify-center mt-[50px]">
            <div>
                <h1 className="mt-2 text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 text-center text-gradient font-extrabold">
                Welcome to my portfolio.
                </h1>
                <div className="flex justify-center my-5">
                    <img className="h-64 w-64 rounded-full" src="./img/Nicolas_Headshot.png" alt="Profile" />
                </div>
                <h1 className="my-5">About</h1>
                <p>Hello, my name is Nicolas Arevalo, nice to meet you!</p>
                <p>
                I am a full stack developer with experience in Javascript/Html/Css, Jquery, Handlebars, RXJS, and some Angular/React. 
                I also have experience with back-end development and SQL (server) databases. 
                And experience with ETL SSIS (python/C# apis) data warehousing tasks.
                </p>
                <p>
                <br></br>
                I am currently working on more side projects/courses to extend my knowledge in React, <a href="https://www.nextjs.org/learn">NextJS 14</a>, TailwindCSS, among other technologies such as OpenAI library, Prisma, Stripe, etc. More to come soon!
                </p>
                <Socials />
            </div>
            <div>
                <BlogsHome blogs={blogs} />
            </div>
        </div>
    );
}