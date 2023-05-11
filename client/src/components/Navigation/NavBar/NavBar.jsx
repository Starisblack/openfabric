import './NavBar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import PropTypes from 'prop-types';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const NavBar = ( props ) => (
    <div className="navBar">
        
         <Logo />
         
         <DrawerToggle clicked={props.drawerToggleClicked} />
         {/* <ShoppingBagOutlinedIcon /> */}
        
        <nav className="desktopOnly">
            <NavigationItems clicked={props.clicked} isAuth={props.isAuth}/>
        </nav>
        <ShoppingBagOutlinedIcon  sx={{color: "white"}}/>
    </div>
);

export default NavBar;


NavBar.propTypes= {
    drawerToggleClicked: PropTypes.func,
    clicked: PropTypes.func,
    isAuth: PropTypes.bool
}