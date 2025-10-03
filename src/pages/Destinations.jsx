import { useState, useEffect } from "react";
import DestinationForm from "../components/DestinationForm";
import DestinationList from "../components/DestinationList";

export default function Destinations() {
  
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
  
      <div className="destinations-grid">
        {places.map((place) => (
          <div key={place.id} className="destination-card">
            <h2>{place.name}</h2>
            <p>{place.description}</p>
            <span className="category-badge">🏷 {place.category}</span>
            <button onClick={() => handleDelete(place.id)} className="delete-btn">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}  
