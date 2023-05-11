// import Footer from "../../components/Footer/Footer";
// import NavBar from "../../components/NavBar/NavBar";
import NavBar from "../../components/Navigation/NavBar/NavBar";
import "./Layout.css";
import PropTypes from "prop-types";

const Layout = ({ children }) => {

  return (
    <>
      <NavBar />
      <main className="Content">{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};
