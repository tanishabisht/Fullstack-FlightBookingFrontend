import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { TravellerDetailCard, FlightDetailCard, Loader } from '../Components';
import axios from 'axios';
import VAR from '../variables';
import './pages.scss';

const ConfirmationPage = () => {
  const params = useParams();

  const [booking, setBooking] = useState(null);
  const [flight, setFlight] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${VAR.baseURL}/booking/${params.bookingId}`)
      .then((res_booking) => {
        console.log(res_booking.data.booking);
        setBooking(res_booking.data.booking);
        axios
          .get(`${VAR.baseURL}/flight/${res_booking.data.booking.flightId}`)
          .then((res_flight) => {
            console.log(res_flight.data.flight);
            setFlight(res_flight.data.flight);
            setIsLoading(false);
          })
          .catch((err_flight) => {
            console.log(err_flight);
            setIsLoading(false);
          });
      })
      .catch((err_booking) => {
        console.log(err_booking);
        setIsLoading(false);
      });
  }, [params]);

  return (
    <div className="confirmation_container">
      <h1 className="header_success">Congratulations!</h1>
      <p className="toaster_container toaster_container_success">
        You have successfully booked your ticket. You have been sent a
        confirmation mail in the email id provided by you.
      </p>
      <p className="note_warning">
        NOTE: If the email id is incorrect you might have not recieved the mail
      </p>

      <div className="traveller_detail_container">
        <h2 className="subHeader">Below are the traveller's details</h2>
        {isLoading === true ? (
          <Loader />
        ) : booking !== null ? (
          <TravellerDetailCard {...booking} />
        ) : (
          <div className="toaster_container toaster_container_error">
            User Information not loaded
          </div>
        )}
      </div>

      <div>
        <h2 className="subHeader">
          Below are the flight's details you have booked
        </h2>
        {isLoading === true ? (
          <Loader />
        ) : flight !== null ? (
          <FlightDetailCard {...flight} isDetailPage={true} />
        ) : (
          <div className="toaster_container toaster_container_error">
            Flight data not loaded.
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmationPage;
