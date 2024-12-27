import React from 'react';
import './component.css'; 
import Logo from "../images/wielogo.png"
import { Link } from 'react-router-dom';

const Nav = () => {

  return (
    <nav className="navbar">
      <div className="logo">
        {/* Add your logo image */}
        <img src={Logo} alt="Logo" className="logo-img" />
        <span>IEEE Women in Engineering</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/newsletter">Newsletter</Link></li>
        <li><Link to="/goals">Goals</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
