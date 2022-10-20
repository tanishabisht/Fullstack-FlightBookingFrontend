import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FlightDetailCard, TravellerDetailForm } from '../Components';
import axios from 'axios';
import VAR from '../variables';
import './pages.scss';

const BookingPage = () => {
  const params = useParams();

  const [flight, setFlight] = useState(null);
  useEffect(() => {
    axios
      .get(`${VAR.baseURL}/flight/${params.id}`)
      .then((res) => {
        console.log(res.data.flight);
        setFlight(res.data.flight);
      })
      .catch((err) => console.log(err));
  }, [params]);

  return (
    <div className="main_container">
      <div>
        {flight ? <FlightDetailCard {...flight} isDetailPage={true} /> : null}
      </div>
      <div>{flight ? <TravellerDetailForm flightId={flight} /> : null}</div>
    </div>
  );
};

export default BookingPage;
