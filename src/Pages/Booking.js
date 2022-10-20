import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FlightDetailCard, TravellerDetailForm, Loader } from '../Components';
import axios from 'axios';
import VAR from '../variables';
import './pages.scss';

const BookingPage = () => {
  const params = useParams();

  const [flight, setFlight] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${VAR.baseURL}/flight/${params.flightId}`)
      .then((res) => {
        console.log(res.data.flight);
        setFlight(res.data.flight);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [params]);

  return (
    <div className="main_container">
      <div>
        {flight ? (
          <FlightDetailCard {...flight} isDetailPage={true} />
        ) : isLoading === true ? (
          <Loader />
        ) : null}
      </div>
      <div>{flight ? <TravellerDetailForm flightId={flight._id} /> : null}</div>
    </div>
  );
};

export default BookingPage;
