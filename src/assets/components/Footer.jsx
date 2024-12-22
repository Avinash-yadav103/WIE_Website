import React from "react";
import "./component.css"; // Add custom styling here
import Banner from "./Banner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'


const Footer = () => {

  const socialLinks = [
    { icon: faFacebookF, href: '#', label: 'Facebook' },
    { icon: faTwitter, href: '#', label: 'Twitter' },
    { icon: faLinkedinIn, href: '#', label: 'LinkedIn' },
    { icon: faInstagram, href: '#', label: 'Instagram' }
  ];
  return (
    <footer className="footer">
      <div className="footer-top">
        <Banner />
      </div>

      <div className="footer-middle">
        <div className="footer-about">
          <h3>Eventics</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam
            purus sit amet magna elemen facilisis.
          </p>
          <div className="social-icons">
            <a href="#" className="icon-link" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebookF} size="1x" color="#A020EF" />
            </a>
            <a href="#" className="icon-link" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} size="1x" color="#A020EF" />
            </a>
            <a href="#" className="icon-link" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedinIn} size="1x" color="#A020EF" />
            </a>
            <a href="#" className="icon-link" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} size="1x" color="#A020EF" />
            </a>
          </div>
          {/* <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
          </div> */}
        </div>
        <div className="footer-links">
          <div>
            <h4>Find Events</h4>
            <ul>
              <li>Outdoor Concerts</li>
              <li>Indoor Concerts</li>
              <li>Festivals</li>
              <li>Concerts</li>
              <li>Event Calendar</li>
            </ul>
          </div>
          <div>
            <h4>Useful Links</h4>
            <ul>
              <li>Log In</li>
              <li>Register</li>
              <li>About Eventek</li>
              <li>How It Works</li>
            </ul>
          </div>
        </div>
        <div className="footer-events">
          <h4>Upcoming Events</h4>
          <div>
            <p>Web Developer Meetup</p>
            <small>24 Jan, 2024</small>
          </div>
          <div>
            <p>Web Developer Meetup</p>
            <small>24 Jan, 2024</small>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024, Eventek All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
