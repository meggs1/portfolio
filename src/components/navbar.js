import { Home } from './home'
import { About } from './about'
import { Contact } from "./contact"
import { Projects } from './projects'

export const NavBar = () => {
    return (
        <div>
        <nav class="navbar navbar-expand navbar-light d-flex fixed-top">
            <div class="container-fluid d-flex">
                <div>        
                    <a class="navbar-brand" href="/">
                        <img src="/initals.png" alt="initials" width="30" height="24" class="d-inline-block align-text-top" />
                    </a>
                </div>
                <div>
                    <div class="collapse navbar-collapse" id="navbarNavLightDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">    
                                <a class="nav-link " href="/#" id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Menu &nbsp;
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                    </svg>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarLightDropdownMenuLink">
                                    <li>
                                        <a class="nav-link" href="#about">About</a>
                                    </li>
                                    <li>
                                        <a class="nav-link" href="#projects">Projects</a>
                                    </li>
                                    <li>
                                        <a class="nav-link" href="#contact">Contact</a>
                                    </li>
                                    <li>
                                        <a class="nav-link" href="#top">Back to Top</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

        <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="0" class="scrollspy" tabindex="0">
            <p id="top"><Home /></p>
            <h4 id="about">About Me</h4>
                <p><About /></p>
            <h4 id="projects">Projects</h4>
                <p><Projects /></p>
            <h4 id="contact">Contact</h4>
                <p><Contact /></p>
        </div>
    </div>
    )
} 