import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function BlogCard({title, image, slugId}) {
    const navigate = useNavigate();

    const handleNavigate = (slugId) => {
        return () => {
            navigate("/blogs/" + slugId);
        }
    }

    return (
        <div onClick={handleNavigate(slugId)} className="flex flex-col justify-center items-center p-5 h-96 gap-x-5 rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:brightness-150 hover:cursor-pointer">
            <img className="w-64 h-64 rounded-full" src={image} alt="Blog" />
            <h2 className="text-2xl text-white font-bold text-center" dangerouslySetInnerHTML={{__html: title.split("-").join("<br>")}}>{}</h2>
        </div>
    )
}