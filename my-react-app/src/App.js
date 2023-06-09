import React from 'react';
import StarWarsData from './StarWarsData';
import CharacterSearch from './CharacterSearch';
import './styles/tailwind.css';
import Sidenav from './Sidenav';


function App() {
  return (
    <div className="App">
      <Sidenav />
      <StarWarsData />
      <CharacterSearch />
    </div>
  );
}

export default App;
