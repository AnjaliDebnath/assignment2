import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="page-wrapper">
      <div className="main-content">
        {/* Your main content goes here */}
      </div>
      <div className="footer">
        <div className="footer-left">&copy; 2024 ExplorIn. All rights reserved.</div>
        <div className="footer-right">
          <a href="#" className="social-link">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="social-link">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="#" className="social-link">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="social-link">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
