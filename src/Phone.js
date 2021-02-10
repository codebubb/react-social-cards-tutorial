import './Phone.css';

const Phone = ({ number, type }) => (
    <div className="phoneNumber">
        <p>{type}: {number}</p>
    </div>
);

export default Phone;