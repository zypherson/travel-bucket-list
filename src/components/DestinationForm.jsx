
import { useState } from "react";   

const DestinationForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    notes: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({ name: "", location: "", notes: "" }); 
  };

  return (
    <form onSubmit={handleSubmit} className="destination-form">
      <div>
        <label>Destination Name: </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Location: </label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Notes: </label>
        <input
          type="text"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Add Destination</button>
    </form>
  );
};

export default DestinationForm;  