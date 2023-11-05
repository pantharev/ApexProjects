import { useEffect } from 'react';

export default function Blogs({blogs}) {

    useEffect(() => {
        console.log("Blogs");
        console.log(blogs);
    }, []);

    return (
        <div className="w-full mt-[75px]">
            <h1 className="mb-5">Blog</h1>
            <div className="flex flex-col gap-y-5">
                {blogs.map((b) => {
                    return (
                        <div key={b.slugId} className="flex flex-col gap-y-3 ml-3 p-3 border border-indigo-500 rounded-lg shadow-lg">
                            <img src={b?.image?.url} className="w-64 h-64 rounded-full"></img>
                            <h2>{b.title}</h2>
                            <div dangerouslySetInnerHTML={{ __html: b.content}}></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}