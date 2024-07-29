import React, { useState } from 'react';
import Header from "./components/Header";
import MapView from "./components/MapView";
import Itinerary from "./components/Itinerary";

function App() {
  // State for storing locations
  const [locations, setLocations] = useState([]);

  // Add a location
  const addLocation = (location) => {
    setLocations([...locations, location]);
  };
  
  // Remove a location
  const removeLocation = (name) => {
    setLocations(locations.filter((location) => location.name !== name));
  };

  return (
    <div className="App h-dvh">
      <Header />
      <div className="flex items-center justify-between m-1">
        <MapView 
          locations={locations}
        />
        <Itinerary 
          locations={locations} 
          addLocation={addLocation} 
          removeLocation={removeLocation} 
        />
      </div>
    </div>
  );
}

export default App;
