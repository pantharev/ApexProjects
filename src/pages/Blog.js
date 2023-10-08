import React, { useState } from "react";

export default function Blog() {

    const [blogs, setBlogs] = useState([
        {
            id: 1,
            title: "Learnings from my first job - 10/1/2023",
            body: 
                `
                <p>
                    Learned to use SQL Server, NodeJs, Javascript, html, css, jquery in a professional setting. To create widgets, checkin forms, a calendar, student to faculty mentor assignment crud operations, and assist with reports for student grades and faculty. 
                    <br>
                    This was done with very minimal frameworks and libraries to prevent updates from breaking the website.
                    <br>
                    Additionally, I used a new framework I created while on the job, this uses Handlebars.js and rxjs to create a dynamic re-rendering of the page without having to refresh the page.
                    A link to the framework can be found here: <a href="https://github.com/pantharev/ReactiveHandlebars">Reactive Handlebars</a>
                    <br>
                    Learned to use SSIS to create ETL tasks to transfer data via APIs using python/C# to our data warehouse.
                </p>
                `
        },
        // {
        //     id: 2,
        //     title: "Blog 2",
        //     body: "This is the second blog"
        // },
        // {
        //     id: 3,
        //     title: "Blog 3",
        //     body: "This is the third blog"
        // }
    ]);

  
    let myBlogs = [
        {
            title: "Blog 1 title",
            description: "Blog 1 description"
        },
        {
            title: "Blog 2 title",
            description: "Blog 2 description"
        }
    ];

    // let myBlogs = [];

    // let g_myBlogs = Map();

    // function getMyBlogs(callback) {
    //     fetch("https://localhost:44352/api/Blogs/GetBlogs").then((response) => {
    //         return response.json();
    //     }).then((data) => {
    //         callback(data);
    //     }).catch((err) => {
    //         console.log(err);
    //     });
    // }

    // getMyBlogs((data) => {
    //     console.log(data);
    //     if(g_myBlogs.get("data")) {
    //         console.log("data exists");
    //     }
    //     myBlogs = data;
    // });

    // let ret = "";
    // ret += "<div>"

    // myBlogs.forEach((b) => {
    //     ret += `<div><h1>${b.title}</h1><p>${b.description}</p></div>`;
    // });

    // ret += "</div>"

    // $("#blogs").html(ret);

    return(
        <>
            <h1 className="mb-5">Blog</h1>
            {blogs.map((b) => {
                return (
                    <div className="flex flex-col gap-y-3">
                        <div className="flex flex-col gap-y-3 ml-3 border border-indigo-500 rounded-lg shadow-lg">
                            <h2>{b.title}</h2>
                            <div dangerouslySetInnerHTML={{ __html: b.body}}></div>
                        </div>
                    </div>
                )
            })}
        </>
    )

}