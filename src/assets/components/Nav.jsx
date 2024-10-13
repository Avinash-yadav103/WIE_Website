import React from 'react';
import './component.css'; 
import Logo from "../images/wielogo.png"

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* Add your logo image */}
        <img src={Logo} alt="Logo" className="logo-img" />
        <span>IEEE Women in Engineering</span>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#blogs">Blogs</a></li>
        <li><a href="#newsletter">Newsletter</a></li>
        <li><a href="#goals">Goals</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
