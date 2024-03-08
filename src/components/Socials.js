import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Socials() {
    return (
        <>
            <div className="py-5">
                You can reach me at <a href="mailto:nicolas.arevaloabc@gmail.com">nicolas.arevaloabc@gmail.com</a> 
                <br></br>
                Check out my LinkedIn and Github profiles here:
                <br></br>
                <div className="flex">
                    <a href="https://www.linkedin.com/in/nicolas-arevalo-5602451a7/">LinkedIn <FaLinkedin className="h-20 w-20 text-blue-500"/></a>
                    <a href="https://github.com/pantharev">Github <FaGithub className="h-20 w-20 text-white" /></a>
                </div>
            </div>
        </>
    )
}