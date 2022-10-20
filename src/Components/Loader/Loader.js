import ReactLoading from 'react-loading';
import './loader.scss';

const Loader = ({ type = 'spinningBubbles', color = '#f77728' }) => (
  <div className="loader_container">
    <ReactLoading type={type} color={color} height={50} width={50} />
  </div>
);

export default Loader;
