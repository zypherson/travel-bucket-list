import { useState } from "react";

export default function DestinationForm({ onAdd }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !description.trim()) return;

    const newDestination = {
      id: Date.now(),
      name,
      description,
    };

    onAdd(newDestination);

    // Clear fotm
    setName("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="destination-form">
      <input
        type="text"
        placeholder="Destination name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Destination</button>
    </form>
  );
}
