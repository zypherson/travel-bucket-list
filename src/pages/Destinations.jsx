import { useState, useEffect } from "react";
import DestinationForm from "../components/DestinationForm";

export default function Destinations() {
  const [places, setPlaces] = useState(() => {
    // Load saved destinations from localStorage 
    const stored = localStorage.getItem("destinations");
    return stored ? JSON.parse(stored) : [
      { id: 1, name: "Paris, France", description: "The city of lights and romance." },
      { id: 2, name: "Tokyo, Japan", description: "A perfect blend of tradition and modern life." },
      { id: 3, name: "Cape Town, South Africa", description: "Breathtaking mountains and coastline." },
    ];
  });

  // Save to local storage when place is added
  useEffect(() => {
    localStorage.setItem("destinations", JSON.stringify(places));
  }, [places]);

  const handleAddPlace = (place) => {
    setPlaces((prev) => [place, ...prev]);
  };

  return (
    <div className="destinations-page">
      <h1>🌍 Destinations</h1>

      <DestinationForm onAdd={handleAddPlace} />

      <div className="destinations-grid">
        {places.map((place) => (
          <div key={place.id} className="destination-card">
            <h2>{place.name}</h2>
            <p>{place.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
