import './card.scss';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import VAR from '../../variables';

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
    isDetailPage = false,
  } = props;

  const convertToAbbreviation = (cityName) => {
    const _airportObj = VAR.airportStateNamesImp.find(
      (airportObj) => airportObj.city_name === cityName
    );
    return _airportObj.IATA_code;
  };

  return (
    <div className="flight_card_container row">
      <div className="col">
        <p className="data_airlineName">{airlineName}</p>
        <p className="data_flightNumber">{flightNumber}</p>
      </div>
      <div className="col">
        <div className="row_sub">
          <span className="data_place">{convertToAbbreviation(fromPlace)}</span>
          <span className="data_time">
            {format(parseISO(fromDate), 'HH:mm')}
          </span>
        </div>
        <p className="data_date">
          {format(parseISO(fromDate), 'eee, d MMM yyyy')}
        </p>
        <br />
        <p className="data_terminal">{fromTerminal}</p>
      </div>
      <div className="col">
        <div className="row_sub">
          <span className="data_place">{convertToAbbreviation(toPlace)}</span>
          <span className="data_time">{format(parseISO(toDate), 'HH:mm')}</span>
        </div>
        <p className="data_date">
          {format(parseISO(toDate), 'eee, d MMM yyyy')}
        </p>
        <br />
        <p className="data_terminal">{toTerminal}</p>
      </div>
      <div className="col">
        <p className="data_price">{price}</p>
        {isDetailPage ? null : (
          <Link className="data_btn" to={`/booking/${_id}`}>
            Book
          </Link>
        )}
      </div>
    </div>
  );
};

export default FlightDetailCard;
