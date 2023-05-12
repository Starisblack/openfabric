import "./NavBar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import PropTypes from "prop-types";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useLocation } from "react-router-dom";
import AccountMenu from "../../Menu/Menu";


const NavBar = (props) => {
  const location = useLocation();

  return (
    <>
      <div
        style={{
          backgroundColor: location.pathname === "/" ? null : "black",
          color: "white",
        }}
        className="navBar"
      >
        <Logo />

        <div className="mobile-toggle-container mobileOnly">
          <ShoppingBagOutlinedIcon sx={{ color: "white" }} />
          <AccountMenu />

          <DrawerToggle clicked={props.drawerToggleClicked} />
        </div>

        <div className="left-nav-container desktopOnly">
          <nav>
            <NavigationItems clicked={props.clicked} isAuth={props.isAuth} />
          </nav>
          <ShoppingBagOutlinedIcon sx={{ color: "white" }} />

          <AccountMenu />
        </div>
      </div>
    </>
  );
};

export default NavBar;

NavBar.propTypes = {
  drawerToggleClicked: PropTypes.func,
  clicked: PropTypes.func,
  isAuth: PropTypes.bool,
};
