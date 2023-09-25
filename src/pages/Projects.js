export default function Projects() {
    return (
        <>
            <p>Public live Projects</p>
            <ul className="flex flex-col gap-y-3 list-disc">
                <li className="ml-3 border border-black">
                    Apex Commerce
                    <div className="flex flex-col gap-y-3">
                        <a href="https://apex-commerce.vercel.app/">https://apex-commerce.vercel.app/</a>
                    </div>
                    E Commerce application with shopping cart functionality made with React
                </li>
                <li className="ml-3 border border-black">
                    SurveySpeak (& design). 
                    <div className="flex flex-col gap-y-3">
                        <a href="https://brainspeak.onrender.com/">https://brainspeak.onrender.com/</a>
                        <a href="https://surveyspeak.vercel.app/">https://surveyspeak.vercel.app/</a>
                    </div>
                    Web app prototype that would allow people to take surveys that 'speak' to the user with their own ai personalities. 
                    Has a personal assistaint robot made with OpenAI api that can be interacted with. General wrapper around the OpenAI api that tracks chat history and can be used as a chatbot.
                    Project is on hold as of 9/24/2023.
                    {/* TODO: Carousel of images */}
                </li>
                <li className="ml-3 border border-black">
                    Apex Radio. 
                    <div className="flex flex-col gap-y-3">
                        <a href="https://apex-radio.vercel.app/">https://apex-radio.vercel.app/</a>
                    </div>
                    Made with React. Fun wip side project, where albums can be made and songs are liked/disliked.
                </li>
            </ul>
        </>
    );
}