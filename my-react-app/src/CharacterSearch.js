import React, { useState } from 'react';

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
    <div>
      <h2>Star Wars Character Search</h2>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Enter character name"
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {people.map(person => (
          <li key={person.url}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default StarWarsData;
