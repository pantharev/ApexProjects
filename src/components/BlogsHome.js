import { Link } from "react-router-dom";
import BlogCard from "./BlogCard"
import { useEffect } from "react"

export default function BlogsHome({blogs}) {

    useEffect(() => {
        console.log("Blogs Home");
        console.log(blogs);
    }, [])

    return (
        <div className="flex flex-col">
            <h1 className="mt-5">Blogs</h1>
            <div className="mt-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {blogs.map((b) => (
                    <BlogCard key={b?.slugId} title={b?.title} image={b?.image?.url} slugId={b?.slugId} />
                ))}
            </div>
            <div className="mt-5">
                <Link to="/blogs" className="p-3 bg-indigo-500 rounded-lg text-white">Read More</Link>
            </div>
        </div>
    )
}