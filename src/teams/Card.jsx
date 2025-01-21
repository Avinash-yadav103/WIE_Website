import React from "react";
import "./Teams.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Card = ({ name, position, image , color }) => {
  return (
    <div className="team-card">
      <div className="team-image">
        <img src={image} alt="Team member" className="memberImage"/>
      </div>
      <div className="team-info">
        <h3>{name}</h3>
        <p style={{ color: color }}>{position}</p>
        <div className="social-icons-teams" style={{ color: color }}>
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
      </div>
    </div>
  );
};

export default Card;
