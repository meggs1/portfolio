import { Home } from './home'
import { About } from './about'
import { Contact } from "./contact"
import { Projects } from './projects'

export const NavBar = () => {
    return (
        <div>
        <nav className="navbar navbar-expand navbar-light d-flex fixed-top">
            <div className="container-fluid d-flex">
                <div>        
                    <a className="navbar-brand" href="/">
                        <img src="/initals.png" alt="initials" width="30" height="24" className="d-inline-block align-text-top" />
                    </a>
                </div>
                <div>
                    <div className="collapse navbar-collapse" id="navbarNavLightDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">    
                                <a className="nav-link " href="/#" id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Menu &nbsp;
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                    </svg>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarLightDropdownMenuLink">
                                    <li>
                                        <a className="nav-link" href="#about">About</a>
                                    </li>
                                    <li>
                                        <a className="nav-link" href="#skills">Skills</a>
                                    </li>
                                    <li>
                                        <a className="nav-link" href="#projects">Projects</a>
                                    </li>
                                    <li>
                                        <a className="nav-link" href="#blogs">Blogs</a>
                                    </li>
                                    <li>
                                        <a className="nav-link" href="#contact">Contact</a>
                                    </li>
                                    <li>
                                        <a className="nav-link" href="#top">Back to Top</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

        <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="0" className="scrollspy" tabIndex="0">
            <div id="top"><Home /></div>
            <h4 id="about">About Me</h4>
                <div><About /></div>
            <h4 id="projects">Projects</h4>
                <div><Projects /></div>
            <h4 id="contact">Contact</h4>
                <div><Contact /></div>
        </div>
    </div>
    )
} 