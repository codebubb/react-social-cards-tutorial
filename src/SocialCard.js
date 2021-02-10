import './SocialCard.css';
import Location from './Location';
import Phone from './Phone';

const SocialCard = ({ userData }) => {
    return (
        <div className="card">
            <div className="card__title">{userData.name.first} {userData.name.last}</div>
            <div className="card__body">
                <Location location={userData.location}/>
                <Phone number={userData.phone} type="Home"/>
                <Phone number={userData.cell} type="Cell"/>
                <div className="card__image"><img src={userData.picture.medium}/></div>
            </div>

        </div>
    )
};

export default SocialCard;