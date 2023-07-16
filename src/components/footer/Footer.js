import "./Footer.css";
import logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div>
          <img src={logo} alt="Logo" />
        </div>

        <div>
          <h3>Doormat Navigation</h3>
          <ul>
            <li>
              <Link path="/">Home</Link>
            </li>
            <li>
              <Link path="/">About</Link>
            </li>
            <li>
              <Link path="/">Menu</Link>
            </li>
            <li>
              <Link path="/booking">Reservation</Link>
            </li>
            <li>
              <Link path="/">Order Online</Link>
            </li>
            <li>
              <Link path="/">Login</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Contact Information</h3>
          <address>Address</address>
          <p>Phone Number</p>
          <p>Email</p>
        </div>
        <div>
          <h3>Social Media Links</h3>
          <address>Address</address>
          <p>Phone Number</p>
          <p>Email</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
