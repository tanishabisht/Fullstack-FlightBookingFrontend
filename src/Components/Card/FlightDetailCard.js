import './card.scss';
import { Link } from 'react-router-dom';

const FlightDetailCard = (props) => {
  const {
    airlineName,
    flightNumber,
    fromDate,
    fromPlace,
    fromTerminal,
    price,
    toDate,
    toPlace,
    toTerminal,
    _id,
  } = props;

  return (
    <div className="card_container">
      <p>{airlineName}</p>
      <p>{flightNumber}</p>
      <p>{fromDate}</p>
      <p>{fromPlace}</p>
      <p>{fromTerminal}</p>
      <p>{price}</p>
      <p>{toDate}</p>
      <p>{toPlace}</p>
      <p>{toTerminal}</p>
      <Link to={`/${_id}`}>Book</Link>
    </div>
  );
};

export default FlightDetailCard;
