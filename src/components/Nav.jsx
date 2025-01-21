import React from 'react';
import './component.css'; 
import Logo from "../assets/images/wielogo.png"
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
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-us">WIE ?</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
