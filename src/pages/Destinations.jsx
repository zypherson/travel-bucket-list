import { useState, useEffect } from "react";
import DestinationForm from "../components/DestinationForm";

export default function Destinations() {
  const [places, setPlaces] = useState(() => {
    const stored = localStorage.getItem("destinations");
    return stored
      ? JSON.parse(stored)
      : [
          { id: 1, name: "Paris, France", description: "The city of lights and romance.", category: "City" },
          { id: 2, name: "Tokyo, Japan", description: "A perfect blend of tradition and modern life.", category: "City" },
          { id: 3, name: "Cape Town, South Africa", description: "Breathtaking mountains and coastline.", category: "Nature" },
        ];
  });

  const [filter, setFilter] = useState("All");

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
    setPlaces((prev) => prev.filter((p) => p.id !== id));
  };

  
  const filteredPlaces =
    filter === "All" ? places : places.filter((p) => p.category === filter);

  
  const categories = ["All", ...new Set(places.map((p) => p.category))];

  return (
    <div className="destinations-page">
      <h1>🌍 Destinations</h1>

      <DestinationForm onAdd={handleAddPlace} />

      <div className="filters">
        <label>Filter by Category: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <button onClick={handleClearAll} className="clear-btn">
        Clear All Destinations
      </button>

      <div className="destinations-grid">
        {filteredPlaces.map((place) => (
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
