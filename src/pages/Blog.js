import React, { useState, useEffect } from "react";
import Blogs from "../components/Blogs";

export default function Blog() {

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
                        blogs {
                            id
                            slugId
                            title
                            image {
                                id
                                url
                            }
                            content
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

    return(
        <div className="w-full mt-[75px]">
            <h1 className="mb-5 text-center">Blog</h1>
            <div className="flex flex-col gap-y-5 mx-96">
                {blogs.map((b) => {
                    return (
                        <div key={b.slugId} className="flex flex-col gap-y-3 ml-3 p-3 border border-indigo-500 rounded-lg shadow-lg">
                            <img src={b?.image?.url} className="w-[30rem] h-[30rem] mx-auto"></img>
                            <div>
                                <h2>{b.title}</h2>
                                <div dangerouslySetInnerHTML={{ __html: b.content}}></div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}