/* eslint-disable no-unused-vars */
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
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);

  useEffect(() => {
    localStorage.setItem("destinations", JSON.stringify(places));
  }, [places]);

  const handleAddPlace = (place) => {
    setPlaces((prev) => [place, ...prev]);
  };
  const handleDeleteClick = (id) => {
    setDeleteTarget(id);
    setShowConfirm(true);
  };
  const confirmDelete = () => {
    setPlaces((prev) => prev.filter((place) => place.id !== deleteTarget));
    setShowConfirm(false);
    setDeleteTarget(null);
  };
  const cancelDelete = () => {
    setShowConfirm(false);
    setDeleteTarget(null);
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
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this destination?")) {
      setPlaces((prev) => prev.filter((place) => place.id !== id));
    }
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

      <div className="card-actions">
        <button className="edit-btn" onClick={() => setEditing(place)}>
          ✏️ Edit
        </button>
        <button
          className="delete-btn"
          onClick={() => handleDelete(place.id)}
        >
          🗑️ Delete
        </button>
      </div>
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
