import React from 'react';

export default function Hero() {
  return (
    <div className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Welcome to my website</span>
          </h1>
            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">This is a website where I showcase my projects and share my thoughts on various topics related to programming and technology.</p>
            <p>write a short bio as a full stack web developer</p>
        </div>
        <div className="mt-10">
          <div className="flex justify-center">
            <div className="flex-shrink-0 lg:mx-0 mx-auto">
              <img className=" h-64 w-64 rounded-full" src="./img/Nicolas_Headshot.png" alt="Profile" />
              <p className="h-64 w-64 rounded-full bg-slate-200">Image placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}