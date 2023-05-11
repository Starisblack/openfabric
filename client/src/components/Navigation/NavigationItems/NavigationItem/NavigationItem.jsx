import { NavLink } from 'react-router-dom';
import './NavigationItem.css';

const navigationItem = ( props ) => (
    <li className="NavigationItem">
        <NavLink
         onClick={props.clicked}
         to={props.link} 
        >{props.children}
        </NavLink>
    </li>
);

export default navigationItem;