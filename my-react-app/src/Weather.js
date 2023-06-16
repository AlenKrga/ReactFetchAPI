import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`https://wttr.in/${city.replace(/ /g, '+')}?format=%C+%t+%w`);

      setWeatherData(response.data);
      setError('');
    } catch (error) {
      setError('Error fetching weather data');
      setWeatherData('');
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Weather App</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleFormSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="city" className="sr-only">City</label>
              <input
                id="city"
                name="city"
                type="text"
                autoComplete="off"
                value={city}
                onChange={handleInputChange}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter a city name"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Get Weather
            </button>
          </div>
        </form>

        {error && <div className="text-red-600">{error}</div>}

        {weatherData && (
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Weather Information</h3>
            <p>{weatherData}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
