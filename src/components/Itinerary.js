import LocationDetails from "./LocationDetails";
import LocactionSearch from "./LocationSearch";

const Itinerary = ({ locations, addLocation, removeLocation }) => {
    return (
        <div className="itierary flex-1 flex items-center justify-center">
            <div className="flex flex-col items-start">
                <span className="text-lg font-semibold">Itinerary</span>
                <div className="">
                    {locations.map((location, index) => (
                        <LocationDetails
                            key={index}
                            name={location.name}
                            latitude={location.latitude}
                            longitude={location.longitude}
                            weather={location.weather}
                            removeLocation={removeLocation}
                        />
                    ))}
                </div>

                <LocactionSearch 
                    addLocation={addLocation}
                />
            </div>
        </div>
    );
};

export default Itinerary;