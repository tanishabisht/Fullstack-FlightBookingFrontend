import './card.scss';

const TravellerDetailCard = ({ name, email, number }) => {
  return (
    <div className="traveller_card_container">
      <p>
        <span>Name: </span>
        {name}
      </p>
      <p>
        <span>Email ID: </span>
        {email}
      </p>
      <p>
        <span>Phone Number: </span>
        {number}
      </p>
    </div>
  );
};

export default TravellerDetailCard;
