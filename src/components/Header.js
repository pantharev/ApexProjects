
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Switch } from "@headlessui/react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Header({ theme, toggleTheme }) {
    return (
        <div className={`flex justify-center ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
            <div className="flex justify-center">
                <header className="flex flex-col justify-center">
                    <p className="text-lg text-center">Nicolas Arevalo</p>
                    <ul className="flex gap-x-2">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                    </ul>
                    <div className="mt-3 flex justify-center">
                            <FiSun className="mr-2" />
                            <Switch
                            checked={theme === "dark"}
                            onChange={toggleTheme}
                            className={`${theme === "dark" ? "bg-gray-900" : "bg-gray-200"
                                } relative inline-flex items-center h-6 rounded-full w-11`}
                            >
                            <span className="sr-only">Toggle theme</span>
                            <span
                                className={`${theme === "dark" ? "translate-x-6" : "translate-x-1"
                                } inline-block w-4 h-4 transform bg-white rounded-full`}
                            />
                            </Switch>
                            <FiMoon className="mr-2" />
                    </div>
                </header>
            </div>
        </div>
    );
}