import  './Backdrop.css';
import PropTypes from "prop-types";

const Backdrop = (props) => (
    props.show ? <div className="Backdrop" onClick={props.clicked}></div> : null
);

export default Backdrop;
 
Backdrop.propTypes = {
  show: PropTypes.bool,
  clicked: PropTypes.func
};