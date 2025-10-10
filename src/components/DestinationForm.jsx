import { useState } from "react";

export default function DestinationForm({ onAdd }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Beaches");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !description.trim()) return;

    const newPlace = {
      id: Date.now(),
      name,
      description,
      category,
      imageUrl: imageUrl || "https://via.placeholder.com/400x250?text=No+Image", // fallback
    };

    onAdd(newPlace);
    setName("");
    setDescription("");
    setImageUrl("");
    setCategory("Beaches");
  };

  return (
    <form onSubmit={handleSubmit} className="destination-form">
      <input
        type="text"
        placeholder="Destination Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Why do you want to go?"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Beaches</option>
        <option>Mountains</option>
        <option>City Escapes</option>
        <option>Nature</option>
        <option>Historical</option>
      </select>
      <input
        type="text"
        placeholder="Image URL (optional)"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <button type="submit">Add Destination</button>
    </form>
  );
}
