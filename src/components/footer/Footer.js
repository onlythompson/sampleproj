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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/booking">Reservation</Link>
            </li>
            <li>
              <Link to="/order-online">Order Online</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
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
