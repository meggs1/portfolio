import {  Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <div>
            <Link to="about">About</Link>
            <Link to="projects">Projects</Link>
            <Link to="contact">Contact</Link>
        </div>
    )
} 