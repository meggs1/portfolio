import './App.css';
// import { About } from './components/about'
// import { Contact } from './components/contact'
// import { Projects } from './components/projects'
// import { Home } from './components/home'
import { NavBar } from './components/navbar'
// import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <NavBar />
          {/* <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="about" element={<About />} />
            <Route exact path="projects" element={<Projects />} />
            <Route exact path="contact" element={<Contact />} />
          </Routes>   */}
        </div>
      </header>
    </div>
  );
}

export default App;
