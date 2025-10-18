import { useState, useEffect } from "react";
import DestinationForm from "../components/DestinationForm";
import EditDestinationModal from "../components/EditDestinationModal";

export default function Destinations() {
  const [places, setPlaces] = useState(() => {
    const stored = localStorage.getItem("destinations");
    return stored
      ? JSON.parse(stored)
      : [
          { id: 1, name: "Paris, France", description: "The city of lights and romance.", category: "Europe" },
          { id: 2, name: "Tokyo, Japan", description: "A perfect blend of tradition and modern life.", category: "Asia" },
          { id: 3, name: "Cape Town, South Africa", description: "Breathtaking mountains and coastline.", category: "Africa" },
        ];
  });

  const [editing, setEditing] = useState(null); // store the destination being edited

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

  const handleSaveEdit = (updatedDestination) => {
    setPlaces((prev) =>
      prev.map((place) =>
        place.id === updatedDestination.id ? updatedDestination : place
      )
    );
    setEditing(null);
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
            {place.image && (
              <img
                src={place.image}
                alt={place.name}
                className="destination-image"
              />
            )}
            <h2>{place.name}</h2>
            <p>{place.description}</p>
            {place.category && <p className="category-tag">{place.category}</p>}
            <button onClick={() => setEditing(place)}>Edit</button>
          </div>
        ))}
      </div>

      {editing && (
        <EditDestinationModal
          destination={editing}
          onSave={handleSaveEdit}
          onClose={() => setEditing(null)}
        />
      )}
    </div>
  );
}
