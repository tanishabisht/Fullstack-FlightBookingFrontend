import { Link } from 'react-router-dom';
import './pages.scss';

const ErrorPage = () => {
  return (
    <div className="error_container">
      <h1 className="header_error">Uh Oh!</h1>
      <p className="toaster_container toaster_container_error">
        Some Error seems to have occured while filling the traveller detail
        form. Please go to <Link to={`/`}>Home Page</Link> and try again.
      </p>
      <p className="note_warning">
        NOTE: If the email id is incorrect you might have not recieved the mail
      </p>
    </div>
  );
};

export default ErrorPage;
