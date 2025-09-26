import "./DestinationList.css";

const DestinationList = ({ destinations,onDelete }) => {
    return (
      <div className="destinations-grid">
        {destinations.map((place) => (
          <div key={place.id} className="destination-card">
            <h2>{place.name}</h2>
            <p>{place.description}</p>
            <button
              onClick={() => onDelete(place.id)}
              className="delete-btn"
            >
              ❌ Delete
            </button>
          </div>
        ))}
      </div>
    );
  }

export default DestinationList;
