import React, { useEffect, useState } from 'react';

function StarWarsData() {
  const [searchTerm, setSearchTerm] = useState('');
  const [people, setPeople] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = event => {
    event.preventDefault();

    if (searchTerm.trim() === '') {
      setErrorMessage('Enter a name');
      return;
    }

    fetch(`https://swapi.dev/api/people/?search=${searchTerm}`)
      .then(response => response.json())
      .then(data => {
        setPeople(data.results);
        setErrorMessage('');
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  };

  const getImageUrl = characterId => {
    return `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`;
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Star Wars Character Search</h2>
      <form onSubmit={handleSearchSubmit} className="mb-4 text-center">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Enter character name"
          className="border border-gray-300 rounded px-3 py-2 mr-2"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2"
        >
          Search
        </button>
      </form>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <ul>
        {people.map(person => (
          <li key={person.url} className="border border-gray-300 rounded p-4 mb-4">
            <h3 className="text-xl font-bold mb-2">{person.name}</h3>
            <img
              src={getImageUrl(person.url.split('/')[5])}
              alt={person.name}
              className="w-32 h-32 rounded-xl"
            />
            <p className="mb-2">Birth Year: {person.birth_year}</p>
            <p className="mb-2">Eye Color: {person.eye_color}</p>
            <p className="mb-2">Gender: {person.gender}</p>
            <p className="mb-2">Hair Color: {person.hair_color}</p>
            <p className="mb-2">Height: {person.height} cm</p>
            <p className="mb-2">Mass: {person.mass} kg</p>
            <p className="mb-2">Skin Color: {person.skin_color}</p>
            <ul>
              {person.films.map(film => (
                <li key={film}>{film}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StarWarsData;
