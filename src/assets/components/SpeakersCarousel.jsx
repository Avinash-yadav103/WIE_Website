import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './SpeakersCarousel.css';
import image1 from '../images/ShraddhaKhapra.jpg';
import image2 from '../images/TanishaSharma.jpg';
import image3 from '../images/Anmol.png';

const speakers = [
  {
    id: 1,
    name: 'Shraddha Khapra',
    title: 'Education speaker',
    image: image1,
    insta: 'https://www.instagram.com/shraddhakhapra/'
  },
  {
    id: 2,
    name: 'Tanisha Sharma',
    title: 'Business speaker',
    image: image2
  },
  {
    id: 3,
    name: 'Anmol Arora',
    title: 'Technology speaker',
    image: image3,
    linkedIn : 'https://www.linkedin.com/in/0xanmol/'
  },
  // {
  //   id: 4,
  //   name: 'Michael Roberts',
  //   title: 'Technology speaker',
  //   image: '/placeholder.svg?height=400&width=300'
  // }
];

const SocialIcon = ({ icon }) => (
  <button className="social-icon">
    <FontAwesomeIcon icon={icon} />
  </button>
);

const SpeakerCard = ({ name, title, image }) => (
  <div className="speaker-card">
    <img src={image} alt={name} className="speaker-image" />
    <div className="social-icons">
      <SocialIcon icon={faFacebookF} />
      <SocialIcon icon={faInstagram} />
      <SocialIcon icon={faTwitter} />
      <SocialIcon icon={faPinterestP} />
    </div>
    <div className="speaker-info">
      <h3>{name}</h3>
      <p>{title}</p>
    </div>
  </div>
);

const SpeakersCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === speakers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? speakers.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="speakers-carousel">
      <h2 className="carousel-title">Meet Our Speakers</h2>
      
      <div className="carousel-container">
        <button className="nav-button prev" onClick={prevSlide}>
          <FontAwesomeIcon icon={faChevronLeft} className='leftnavigation' />
        </button>
        <button className="nav-button next" onClick={nextSlide}>
          <FontAwesomeIcon icon={faChevronRight} className='leftnavigation' />
        </button>

        <div className="speakers-grid">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.id} {...speaker} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeakersCarousel;

