import "./NavBar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import AccountMenu from "../../Menu/Menu";
import { useEffect } from "react";
import CartIcon from "../../CartIcon";


const NavBar = (props) => {
  const location = useLocation();

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      document.body.classList.add("scroll");
    } else {
      document.body.classList.remove("scroll");
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

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
         <CartIcon />
          <AccountMenu />

          <DrawerToggle clicked={props.drawerToggleClicked} />
        </div>

        <div className="left-nav-container desktopOnly">
          <nav>
            <NavigationItems clicked={props.clicked} />
          </nav>
          <CartIcon />

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
};
