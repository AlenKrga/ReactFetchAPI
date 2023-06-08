import React, { useEffect, useState } from 'react';

function StarWarsData() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then(response => response.json())
      .then(data => {
        setPeople(data.results);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <ul>
        {people.map(person => (
          <li key={person.url}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default StarWarsData;
