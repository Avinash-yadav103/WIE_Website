import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import hello from '../images/hello.jpg';
import './members.css';

const teamMembers = [
  {
    id: 1,
    name: 'MARY BROWN',
    role: 'creative leader',
    bio: 'Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum',
    image: '/placeholder.svg?height=300&width=300'
  },
  {
    id: 2,
    name: 'ANN RICHMOND',
    role: 'creative leader',
    bio: 'Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum',
    image: '/placeholder.svg?height=300&width=300'
  },
  {
    id: 3,
    name: 'BOB GREENFIELD',
    role: 'programming guru',
    bio: 'Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum',
    image: '/placeholder.svg?height=300&width=300'
  }
];

const TeamMember = ({ name, role, bio, image }) => (
  <div className="team-member">
    <div className="image-container">
      <img src={hello} alt={name} className="member-image" />
    </div>
    <h2 className="member-name">{name}</h2>
    <h3 className="member-role">{role}</h3>
    <p className="member-bio">{bio}</p>
    <div className="social-links">
      <a href="#" className="social-link">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a href="#" className="social-link">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="#" className="social-link">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  </div>
);

const WieTeam = () => {
  return (
    <>
        <h1 className='meet-team-text'><center>Meet The Team</center></h1>
    <div className="team-container">
        
        {teamMembers.map(member => (
          <TeamMember key={member.id} {...member} />
        ))}
      </div>
    </>

  );
};

export default WieTeam;

