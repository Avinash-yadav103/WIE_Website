import React from "react";
import './component.css';
import image from '../images/hello.jpg'; 
import purple from '../images/Untitled.png';
import teamimg from '../images/FirstYearApocalypse.jpg'; 

const About = () => {
  return (
    <div className="about-us-container">
      <div className="image-section">
        <img src={purple} className="section-bg" alt="" />
        {/* <img src={teamimg} className="floating-img" height="200" width='200' alt="" /> */}
      </div>
      <div className="text-section">
        <h2>About Us</h2>
        <h3>Empowering Women In Engineering.</h3>
        <p>
          IEEE Women in Engineering is an organization dedicated to uplifting
          women engineers and scientists.
        </p>
        <p>
          Our main goal is to provide a support system for women through our
          professional endeavors and inspire each other to follow our academic
          interests and goals. Here at IEEE WIE, we elevate, motivate, and
          educate our fellow sisters to achieve our ambitions and dreams!
        </p>
      </div>
    </div>
  );
};

export default About;
