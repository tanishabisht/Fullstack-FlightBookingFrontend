import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import VAR from '../variables';
import './pages.scss';

const ConfirmationPage = () => {
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
      <Link to={`/`}>Go Home Page</Link>
      <div className="card_container">
        <h1>{flight ? flight.airlineName : null}</h1>
        <p>{flight ? flight.flightNumber : null}</p>
        <p>{flight ? flight.fromDate : null}</p>
        <p>{flight ? flight.fromPlace : null}</p>
        <p>{flight ? flight.fromTerminal : null}</p>
        <p>{flight ? flight.price : null}</p>
        <p>{flight ? flight.toDate : null}</p>
        <p>{flight ? flight.toPlace : null}</p>
        <p>{flight ? flight.toTerminal : null}</p>
      </div>
    </div>
  );
};

export default ConfirmationPage;
