import { useState } from 'react';
import { FlightDetailCard, Loader } from '../Components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import VAR from '../variables';
import './pages.scss';

const MainPage = () => {
  const initalValuesVar = { origin: '', dest: '', date: '' };

  const [flight, setFlight] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  console.log(flight);

  const validateEvent = (values) => {
    const errors = {};
    if (!values.origin) {
      errors.origin = 'Required';
    }
    if (!values.dest) {
      errors.dest = 'Required';
    }
    if (!values.date) {
      errors.date = 'Required';
    }
    return errors;
  };

  const onSubmitEvent = (values, { setSubmitting }) => {
    setFlight(null);
    const { origin, dest, date } = values;
    console.log(`${VAR.baseURL}/flight/${origin}/${dest}/${date}`);
    setIsLoading(true);
    axios
      .get(`${VAR.baseURL}/flight/${origin}/${dest}/${date}`)
      .then((res) => {
        console.log(res.data.flights);
        setFlight(res.data.flights);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
    console.log('works!!!');
    setSubmitting(false);
  };

  return (
    <div className="main_container">
      <div className="form_container">
        <h1 className="form_heading">Search flights</h1>
        <Formik
          initialValues={initalValuesVar}
          validate={validateEvent}
          onSubmit={onSubmitEvent}
        >
          {({ isSubmitting }) => (
            <Form className="main_form">
              <div className="input_row">
                <div className="input_col">
                  <Field
                    type="text"
                    name="origin"
                    placeholder="Origin"
                    className="input_right"
                  />
                  <ErrorMessage name="origin" component="span" />
                </div>
                <div className="input_col">
                  <Field
                    type="text"
                    name="dest"
                    placeholder="Destination"
                    className="input_left"
                  />
                  <ErrorMessage name="dest" component="span" />
                </div>
              </div>
              <div className="input_row">
                <div className="input_col">
                  <Field
                    type="date"
                    name="date"
                    placeholder="Start Date"
                    className="input_right"
                  />
                  <ErrorMessage name="date" component="span" />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="submit_button"
                >
                  Search
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className="result_container">
        {isLoading === true ? <Loader /> : null}
        {flight === null ? null : flight.length === 0 ? (
          <div className="toaster_container toaster_container_error">
            No data found
          </div>
        ) : (
          flight.map((data, id) => <FlightDetailCard key={id} {...data} />)
        )}
      </div>
    </div>
  );
};

export default MainPage;
