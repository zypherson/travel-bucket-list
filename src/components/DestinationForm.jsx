import { useState } from "react";

export default function DestinationForm({ onAdd }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Beaches");
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result); // Base64 encoded image
      };
      reader.readAsDataURL(file);
      setImageFile(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !description.trim()) return;

    const newPlace = {
      id: Date.now(),
      name,
      description,
      category,
      imageUrl: imageUrl || "https://via.placeholder.com/400x250?text=No+Image",
    };

    onAdd(newPlace);
    setName("");
    setDescription("");
    setImageUrl("");
    setCategory("Beaches");
    setImageFile(null);
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

      <div className="upload-container">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        <p>or paste an image URL:</p>
        <input
          type="text"
          placeholder="Image URL"
          value={imageFile ? "" : imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>

      {imageUrl && (
        <img
          src={imageUrl}
          alt="Preview"
          className="preview-image"
        />
      )}

      <button type="submit">Add Destination</button>
    </form>
  );
}
