import './App.css';
import { About } from './components/about'
import { Contact } from './components/contact'
import { Projects } from './components/projects';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Megan Schertz
        <BrowserRouter>
          <Link to="about">About Me</Link>
          <Link to="projects">My Projects</Link>
          <Link to="contact">Contact Me</Link>

          <Routes>
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Routes>        
        </BrowserRouter>
        <img src="/buff-arya.jpg" alt="cat" width="400" height="600"/>
      </header>
    </div>
  );
}

export default App;
