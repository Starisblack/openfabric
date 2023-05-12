// import Footer from "../../components/Footer/Footer";
// import NavBar from "../../components/NavBar/NavBar";
import { useLocation } from "react-router-dom";
import NavBar from "../../components/Navigation/NavBar/NavBar";
import "./Layout.css";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
 const location = useLocation()
  return (
    <>
      <NavBar />

      <main style={{paddingTop: location.pathname === "/" ? null : "7%"}} className="Content">{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};
