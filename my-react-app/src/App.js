import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/tailwind.css';
import Sidenav from './Sidenav';
import StarWarsData from './StarWarsData';
import CharacterSearch from './CharacterSearch';
import About from './About';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidenav />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<>
            <StarWarsData />
            <CharacterSearch />
          </>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
