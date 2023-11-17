import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';
import { useState, useEffect } from 'react';

export default function Blogs() {

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
                        blogs(orderBy: publishedAt_DESC) {
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

    useEffect(() => {
        console.log("Blogs");
        console.log(blogs);
    }, []);

    return (
        <div className="flex flex-col mt-[50px]">
            <div className="mt-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {blogs.map((b) => (
                    <BlogCard key={b?.slugId} title={b?.title} image={b?.image?.url} slugId={b?.slugId} />
                ))}
            </div>
        </div>
    )

    // return (
    //     <div className="w-full mt-[75px]">
    //         <h1 className="mb-5">Blog</h1>
    //         <div className="flex flex-col gap-y-5">
    //             {blogs.map((b) => {
    //                 return (
    //                     <div key={b.slugId} className="flex flex-col gap-y-3 ml-3 p-3 border border-indigo-500 rounded-lg shadow-lg">
    //                         <img src={b?.image?.url} className="w-64 h-64 rounded-full"></img>
    //                         <h2>{b.title}</h2>
    //                         <div dangerouslySetInnerHTML={{ __html: b.content}}></div>
    //                     </div>
    //                 )
    //             })}
    //         </div>
    //     </div>
    // )
}