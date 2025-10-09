import { useState } from "react";

export default function DestinationForm({ onAdd }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("City"); 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !description.trim()) return;

    const newPlace = {
      id: Date.now(),
      name,
      description,
      category, 
    };

    onAdd(newPlace);
    setName("");
    setDescription("");
    setCategory("City"); 
}
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

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        <option value="City">City</option>
        <option value="Beach">Beach</option>
        <option value="Nature">Nature</option>
        <option value="Historical">Historical</option>
        <option value="Adventure">Adventure</option>
      </select>

      <button type="submit">Add Destination</button>
    </form>
  );
}
