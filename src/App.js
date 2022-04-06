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
          <Link to="about">About</Link>
          <Link to="projects">Projects</Link>
          <Link to="contact">Contact</Link>

          <Routes>
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Routes>        
        </BrowserRouter>
        <img src="/msse.png" alt="logo"/>
        {/* <img src="/mscircle.png" alt="logo"/> */}
      </header>
    </div>
  );
}

export default App;
