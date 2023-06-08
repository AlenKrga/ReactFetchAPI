import React, { useEffect, useState } from 'react';

function StarWarsData() {
  const [searchTerm, setSearchTerm] = useState('');
  const [people, setPeople] = useState([]);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = event => {
    event.preventDefault();
    fetch(`https://swapi.dev/api/people/?search=${searchTerm}`)
      .then(response => response.json())
      .then(data => {
        setPeople(data.results);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Star Wars Character Search</h2>
      <form onSubmit={handleSearchSubmit} className="mb-4">
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
      <ul>
        {people.map(person => (
          <li key={person.url} className="border border-gray-300 rounded p-4 mb-4">
            <h3 className="text-xl font-bold mb-2">{person.name}</h3>
            <p className="mb-2">Birth Year: {person.birth_year}</p>
            <p className="mb-2">Eye Color: {person.eye_color}</p>
            <p className="mb-2">Gender: {person.gender}</p>
            <p className="mb-2">Hair Color: {person.hair_color}</p>
            <p className="mb-2">Height: {person.height} cm</p>
            <p className="mb-2">Mass: {person.mass} kg</p>
            <p className="mb-2">Skin Color: {person.skin_color}</p>
            
            <h4 className="text-lg font-bold mb-2">Films:</h4>
            <ul className="list-disc list-inside ml-4">
              {person.films.map(film => (
                <li key={film} className="mb-1">{film}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StarWarsData;
