
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
        <header>
            <ul className="flex gap-x-2">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
            </ul>
        </header>
        </div>
    );
}