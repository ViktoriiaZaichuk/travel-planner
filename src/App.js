import Header from "./components/Header";
import MapView from "./components/MapView";
import Itinerary from "./components/Itinerary";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="">
        <MapView />
        <Itinerary />
      </div>
    </div>
  );
}

export default App;
