import { useState, useEffect } from 'react';
import { FlightDetailCard } from '../Components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import VAR from '../variables';
import './pages.scss';

const MainPage = () => {
  const initalValuesVar = { origin: '', destination: '', date: '' };

  const [flight, setFlight] = useState(null);
  useEffect(() => {}, []);

  const validateEvent = (values) => {
    const errors = {};
    if (!values.origin) {
      errors.origin = 'Required';
    }

    // else if (
    //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.origin)
    // ) {
    //   errors.origin = 'Invalid email address';
    // }
    return errors;
  };

  const onSubmitEvent = (values, { setSubmitting }) => {
    const { origin, destination, date } = values;
    console.log(`${VAR.baseURL}/flight/${origin}/${destination}/${date}`);
    axios
      .get(`${VAR.baseURL}/flight/${origin}/${destination}/${date}`)
      .then((res) => {
        console.log(res.data.flights);
        setFlight(res.data.flights);
      })
      .catch((err) => console.log(err));
    console.log('works!!!');
    setSubmitting(false);
  };

  //localhost:3000/flight/Delhi/Mumbai/2020-08-03

  return (
    <div className="main_container">
      <Formik
        initialValues={initalValuesVar}
        validate={validateEvent}
        onSubmit={onSubmitEvent}
      >
        {({ isSubmitting }) => (
          <Form className="main_form">
            <Field type="text" name="origin" placeholder="Origin" />
            <ErrorMessage name="origin" component="div" />
            <Field type="text" name="destination" placeholder="Destination" />
            <ErrorMessage name="destination" component="div" />
            <Field type="date" name="date" placeholder="Start Date" />
            <ErrorMessage name="date" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>

      <div>
        {flight === null ? (
          <h1>Please make a search</h1>
        ) : flight.length === 0 ? (
          <h1>No data found</h1>
        ) : (
          flight.map((data, id) => <FlightDetailCard key={id} {...data} />)
        )}
      </div>
    </div>
  );
};

export default MainPage;
