import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div>
        <Link className="logo-container" to="/">
          <img className="navbar-logo" src={logo} alt="PawFinds Logo" />
          <p>{props.title}</p>
        </Link>
      </div>
      {/* <div className="below-footer">
        <p>
          You can reach me at{" "}
          <a className="mail-links" href="mailto:kashifkzmi5@gmail.com">
            workspace@gmail.com
          </a>
        </p>
        <p>
       
          <a
            className="contact-links"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-instagram"></i> Instagram
          </a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a
            className="contact-links"
            href='#'
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-whatsapp"></i> WhatsApp
          </a>
        </p>
        <p>&copy; 2023 </p>
      </div> */}
    </footer>
  );
};

export default Footer;