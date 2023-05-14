// import Footer from "../../components/Footer/Footer";
// import NavBar from "../../components/NavBar/NavBar";
import { useLocation } from "react-router-dom";
import NavBar from "../../components/Navigation/NavBar/NavBar";
import "./Layout.css";
import PropTypes from "prop-types";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import { useState } from "react";
import Footer from "../../components/Footer/Footer";

const Layout = ({ children }) => {
  const location = useLocation();

  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer((prevValue) => !prevValue);
  };
  return (
    <>
      <NavBar  drawerToggleClicked={sideDrawerToggleHandler}  />
      <SideDrawer  open={showSideDrawer} closed={sideDrawerClosedHandler} />
      <main
        style={{ paddingTop: location.pathname === "/" ? null : "7%" }}
        className="Content"
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};
