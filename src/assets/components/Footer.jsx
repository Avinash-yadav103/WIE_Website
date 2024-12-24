import React from "react";
import "./component.css"; // Add custom styling here
import Banner from "./Banner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'

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
          <h3>Women In Engineering</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam
            purus sit amet magna elemen facilisis.
          </p>
          <div className="social-iconss">
            <a href="#" className="icon-link" aria-label="Facebook" target="blank">
              <FontAwesomeIcon icon={faFacebookF} size="1x" color="#A020EF" />
            </a>
            <a href="https://github.com/ieeewiebu" className="icon-link" aria-label="Twitter" target="blank">
              <FontAwesomeIcon icon={faGithub} size="1x" color="#A020EF" />
            </a>
            <a href="https://www.linkedin.com/in/ieee-wie-bu-96b3b4259/" className="icon-link" aria-label="LinkedIn" target="blank">
              <FontAwesomeIcon icon={faLinkedinIn} size="1x" color="#A020EF" />
            </a>
            <a href="https://www.instagram.com/wieieee.bu/" className="icon-link" aria-label="Instagram" target="blank">
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
            <ul className="footer-events">
              <li><FontAwesomeIcon icon={faBookmark} />  Outdoor Concerts</li>
              <li><FontAwesomeIcon icon={faBookmark} />  Indoor Concerts</li>
              <li><FontAwesomeIcon icon={faBookmark} />  Festivals</li>
              <li><FontAwesomeIcon icon={faBookmark} />  Concerts</li>
              <li><FontAwesomeIcon icon={faBookmark} />  Event Calendar</li>
            </ul>
          </div>
          <div>
            <h4>Useful Links</h4>
            <ul className="footer-events">
              <li><FontAwesomeIcon icon={faBookmark} />  Log In</li>
              <li><FontAwesomeIcon icon={faBookmark} />  Register</li>
              <li><FontAwesomeIcon icon={faBookmark} />  About WIE</li>
              <li><FontAwesomeIcon icon={faBookmark} />  How It Works</li>
            </ul>
          </div>
        </div>
        <div className="footer-events">
          <h4>Upcoming Events</h4>
          <div>
            <img src="" alt="" />
            <p>Web Developer Meetup</p>
            <small>24 Jan, 2024</small>
          </div>
          <div>
            <img src="" alt="" />
            <p>Web Developer Meetup</p>
            <small>24 Jan, 2024</small>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024, WIE IEEE Bennett University All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
