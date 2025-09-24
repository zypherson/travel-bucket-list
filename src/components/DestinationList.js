import "./DestinationList.css";

const DestinationList = ({ destinations }) => {
  if (destinations.length === 0) {
    return <p className="empty-list">No destinations yet. Add your first one!</p>;
  }

  return (
    <ul className="destination-list">
      {destinations.map((dest, index) => (
        <li key={index} className="destination-card">
          <h3>{dest.name}</h3>
          <p className="location">{dest.location}</p>
          {dest.notes && <p className="notes">{dest.notes}</p>}
        </li>
      ))}
    </ul>
  );
};

export default DestinationList;
