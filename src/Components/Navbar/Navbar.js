import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
  return (
    <div className="nav">
      <p className="nav_text">EASYtrip</p>
      <Link className="nav_goBack" to={`/`}>
        Go Home Page
      </Link>
    </div>
  );
};

export default Navbar;
