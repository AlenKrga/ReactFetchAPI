import React from 'react';
import StarWarsData from './StarWarsData';
import CharacterSearch from './CharacterSearch';
import './styles/tailwind.css';


function App() {
  return (
    <div className="App">
      <StarWarsData />
      <CharacterSearch />
    </div>
  );
}

export default App;
