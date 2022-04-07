import {  Link } from "react-router-dom";

export const NavBar = () => {
    return (
        // <nav class="navbar navbar-expand-lg navbar-light">
        //       <div class="container-fluid">
        //         <a class="navbar-brand" href="/">
        //         <img src="/initals.png" alt="initials" width="30" height="24" class="d-inline-block align-text-top" />
        //             Home
        //         </a>
        //     </div>
        //     <div class="container-fluid">
        //         <Link to="about">About</Link>
        //         <Link to="projects">Projects</Link>
        //         <Link to="contact">Contact</Link>
        //     </div>
        // </nav>

    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <div>
                <a class="navbar-brand" href="/">
                    <img src="/initals.png" alt="initials" width="30" height="24" class="d-inline-block align-text-top" />
                </a>
            </div>
            <div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavLightDropdown" aria-controls="navbarNavLightDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarNavLightDropdown">
                <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Menu
                    </a>
                    <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                    <li><a class="dropdown-item" href="#">{<Link to="about">About</Link>}</a></li>
                    <li><a class="dropdown-item" href="#">{<Link to="projects">Projects</Link>}</a></li>
                    <li><a class="dropdown-item" href="#">{<Link to="contact">Contact</Link>}</a></li>
                    </ul>
                </li>
                </ul>
            </div>
            </div>
        </div>
    </nav>
    )
} 