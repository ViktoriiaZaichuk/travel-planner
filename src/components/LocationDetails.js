import React, { useState } from 'react';

const LocationDetails = ({ name, latitude, longitude, weather, removeLocation }) => {
    // State to track the visibility of the accordion
    const [isExpanded, setIsExpanded] = useState(false);
  
    // Function to toggle the accordion
    const toggleAccordion = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
      <div className="my-4 p-4 border rounded-lg shadow-md bg-white">
        <div className="location flex items-center justify-between">
          <div className="text-lg font-semibold mr-5">
            <span>Name{name}</span>
          </div>
          <button
            onClick={toggleAccordion}
            className="text-sm mr-4 text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded focus:outline-none transition duration-300"
          >
            {isExpanded ? 'Hide Info' : 'Show Info'}
          </button>
          <button 
            className="text-red-500 hover:text-red-600 font-semibold focus:outline-none"
            onClick={() => removeLocation(name)}
          >
            Remove Location
          </button>
        </div>
  
        {/* Accordion content */}
        {isExpanded && (
          <div className="location-info mt-3 transition-all duration-500 ease-in-out">
            <div className="mb-2">
              <strong>Coordinates:</strong>
              <div className="ml-4">
                Latitude: <span>{latitude}</span>
              </div>
              <div className="ml-4">
                Longitude: <span>{longitude}</span>
              </div>
            </div>
            <div>
              <strong>Weather:</strong> <span>{weather}</span>
            </div>
          </div>
        )}
      </div>
    );
  };

export default LocationDetails;