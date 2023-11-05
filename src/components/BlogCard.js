export default function BlogCard({title, image}) {
    return (
        <>
            <div className="flex flex-col justify-center items-center w-1/3 h-96 gap-x-5 rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:brightness-150">
                <img className="w-64 h-64 rounded-full" src={image} alt="Blog" />
                <h2 className="text-2xl text-white font-bold">{title}</h2>
            </div>
        </>
    )
}