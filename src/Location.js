import './Location.css';

const Location = ({ location }) => {
  return <div className="location">
      <p>{location.street.number}</p>
      <p>{location.street.name}</p>
      <p>{location.city}</p>
      <p>{location.state}</p>
      <p>{location.postcode}</p>
      <p>{location.country}</p>
    </div>;
};

export default Location;
