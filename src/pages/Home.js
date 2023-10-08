import Hero from "../components/Hero";

export default function Home() {
    return (
        <>
            <div className="flex justify-center">
                <div>
                    <h1 className="mt-2 text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 text-center text-gradient font-extrabold">
                    Welcome to my portfolio.
                    </h1>
                    <div className="flex justify-center my-5">
                        <img className="h-64 w-64 rounded-full" src="./img/Nicolas_Headshot.png" alt="Profile" />
                    </div>
                    <p>My name is Nicolas Arevalo, nice to meet you!</p>
                    <p>
                    I am a full stack developer with experience in Javascript/Html/Css, Jquery, Handlebars, RXJS, and some Angular/React. 
                    I also have experience with back-end development and SQL (server) databases. 
                    And experience with ETL SSIS (python/C# apis) data warehousing tasks.
                    </p>
                    <p>
                    I'm currently working on personal project to create a website (this one!) to showcase my work.
                    <br></br>
                    Additionally I am working on more side projects to extend my knowledge in React, NextJs, TailwindCSS, among other technologies such as OpenAI library, Prisma, Stripe, etc. More to come soon!
                    </p>
                </div>
            </div>
        </>
    );
}