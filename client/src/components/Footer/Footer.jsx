import Logo from "../Logo/Logo";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
      <div className="footer-container">
        <div className="left-footer">
          <Logo />
          <div className="socials">
            <Link to="/">
              <i className="fa-brands fa-facebook"></i>{" "}
            </Link>
            <Link to="/">
              <i className="fa-brands fa-instagram"></i>{" "}
            </Link>
            <Link to="/">
              <i className="fa-brands fa-twitter"></i>{" "}
            </Link>
          </div>
        </div>
        <div className="right-footer">
          <Link to="/#">About</Link>
          <Link to="/#">Contact</Link>
          <Link to="/#">Privacy policy</Link>
        </div>
      </div>
  );
}

export default Footer;
