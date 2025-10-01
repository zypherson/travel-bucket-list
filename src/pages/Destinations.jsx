import { useState, useEffect } from "react";
import DestinationForm from "../components/DestinationForm";
import DestinationList from "../components/DestinationList";

export default function Destinations() {
  const [searchTerm, setSearchTerm] = useState("");

  const [places, setPlaces] = useState(() => {
    const stored = localStorage.getItem("destinations");
    return stored ? JSON.parse(stored) : [
      { id: 1, name: "Paris, France", description: "The city of lights and romance." },
      { id: 2, name: "Tokyo, Japan", description: "A perfect blend of tradition and modern life." },
      { id: 3, name: "Cape Town, South Africa", description: "Breathtaking mountains and coastline." },
    ];
  });

  useEffect(() => {
    localStorage.setItem("destinations", JSON.stringify(places));
  }, [places]);

  const handleAddPlace = (place) => {
    setPlaces((prev) => [place, ...prev]);
  };
  const filteredPlaces = places.filter((place) =>
    place.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to clear all destinations?")) {
      setPlaces([]);
    }
  };
  const handleDelete = (id) => {
    setPlaces((prev) => prev.filter((place) => place.id !== id));
  };
  

  return (
    <div className="destinations-page">
      <h1>🌍 Destinations</h1>

      <DestinationForm onAdd={handleAddPlace} />
      <button onClick={handleClearAll} className="clear-btn">
        Clear All Destinations
      </button>
      <input
  type="text"
  placeholder="Search destinations..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="search-bar"
/>

      <DestinationList destinations={places} />
      <DestinationList destinations={filteredPlaces} onDelete={handleDelete} />

    </div>
  );
}
