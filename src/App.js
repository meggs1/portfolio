import './App.css';
import { About } from './components/about'
import { Contact } from './components/contact'
import { Projects } from './components/projects'
import { NavBar } from './components/navbar'
import { Routes, Route } from 'react-router-dom';
// import { BrowserRouter, Route, Routes, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Megan Schertz

          <NavBar />
          <Routes>
            <Route exact path="about" element={<About />} />
            <Route exact path="projects" element={<Projects />} />
            <Route exact path="contact" element={<Contact />} />
          </Routes>  

        <>

        </>     
        <img src="/msse.png" alt="logo"/>
        {/* <img src="/mscircle.png" alt="logo"/> */}
      </header>
    </div>
  );
}

export default App;
