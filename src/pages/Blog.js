import React, { useState, useEffect } from "react";
import Blogs from "../components/Blogs";
import { useParams } from "react-router-dom";

export default function Blog() {
    const { slugId } = useParams();

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
                        blogs(where: {slugId: "${slugId}"}) {
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
            <div className="flex flex-col gap-y-5">
                {blogs.map((b) => {
                    return (
                        <div className="mx-auto">
                            <div key={b.slugId} className="flex flex-col gap-y-3 ml-3 p-3 lg:w-[800px] w-96">
                                <h1 className="mb-5 text-center" dangerouslySetInnerHTML={{__html: b?.title.split("-").join("<br>")}}></h1>
                                <img src={b?.image?.url} className="w-[30rem] h-[30rem] mx-auto"></img>
                                <div className="mx-auto">
                                    <div dangerouslySetInnerHTML={{ __html: b.content}}></div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}