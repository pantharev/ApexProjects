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
                    Learned to use SSIS to create ETL tasks to transfer data from one API database to our data warehouse.
                </p>
                `
        },
        {
            id: 2,
            title: "Blog 2",
            body: "This is the second blog"
        },
        {
            id: 3,
            title: "Blog 3",
            body: "This is the third blog"
        }
    ]);

    return(
        <>
            <h1 className="mb-5">Blog</h1>
            {blogs.map((b) => {
                return (
                    <div className="ml-3 border border-indigo-500 rounded-lg shadow-lg">
                        <h2>{b.title}</h2>
                        <div dangerouslySetInnerHTML={{ __html: b.body}}></div>
                    </div>
                )
            })}
        </>
    )

}