import React, { useState } from 'react';

const LocationSearch = ({ addLocation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    setSearchTerm(e.target.value);
  };

  const searchLocation = async () => {
    if (searchTerm.trim() === '') return;
    setLoading(true);

    try {
      // Use a geocoding service like OpenCage or Mapbox
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          searchTerm
        )}`
      );
      const data = await response.json();

      if (data.length === 0) {
        alert('No results found. Please try another location.');
        setLoading(false);
        return;
      }

      const location = data[0];
      const { display_name, lat, lon } = location;

      // Fetch weather data for the location
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m`
      );
      const weatherData = await weatherResponse.json();
      const weather = `Temp: ${weatherData.hourly.temperature_2m[0]}°C`;

      addLocation({
        name: display_name,
        latitude: parseFloat(lat),
        longitude: parseFloat(lon),
        weather: weather,
      });
      setSearchTerm('');
    } catch (error) {
      console.error('Error searching location:', error);
      alert('An error occurred while searching for the location.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex mt-4">
      <input
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
        type="text"
        placeholder="Search for a location"
        value={searchTerm}
        onChange={handleSearch}
      />
      <button
        onClick={searchLocation}
        disabled={loading}
        className="ml-2 p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none transition duration-300"
      >
        {loading ? 'Loading...' : 'Add Location'}
      </button>
    </div>
  );
};

export default LocationSearch;