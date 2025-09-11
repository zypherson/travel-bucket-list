export default function Destinations() {
    const places = [
      { id: 1, name: "Paris, France", description: "The city of lights and romance." },
      { id: 2, name: "Tokyo, Japan", description: "A perfect blend of tradition and modern life." },
      { id: 3, name: "Cape Town, South Africa", description: "Breathtaking mountains and coastline." },
    ];
  
    return (
      <div className="destinations-page">
        <h1>🌍 Destinations</h1>
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
  