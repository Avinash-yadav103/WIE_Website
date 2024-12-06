import React from 'react';
import './component.css';
import clubcarnival from "../images/clubcarnival24.jpg";

const Events = () => {
  const eventData = [
    {
      title: 'Club Carnival 2024',
      image: clubcarnival, // Update with your image path
      description: `School of Electrical Engineering in collaboration with IEEE-WIE organized WeHack 3.0 in coordination with Honeywell, Bangalore as part of their Honeywell Automation Challenge 2019, which had cash prizes worth of lakhs and hundreds of participants.`,
    },
    {
      title: 'First Year Apocalypse',
      image: '/path-to-your-image/meme-o-mania.png', // Update with your image path
      description: `Memes and Gifs seem to have taken over the internet, so much so that they seem to have become a part of our daily life. Our event meme-o-mania was aimed as bringing out the witty humor of millennials and awarding the best for their creativity.`,
    },
    {
      title: 'Code Run Seek',
      image: '/path-to-your-image/code-run-seek.png', // Update with your image path
      description: `An event loved by all, Code Run Seek is an event that IEEE WIE has conducted in collaboration with IEEE IAS for Gravitas multiple times. The event is unique because not only do you have to code but you also have to decode clues and earn your problem statement!`,
    },
    {
      title: 'Code Run Seek',
      image: '/path-to-your-image/code-run-seek.png', // Update with your image path
      description: `An event loved by all, Code Run Seek is an event that IEEE WIE has conducted in collaboration with IEEE IAS for Gravitas multiple times. The event is unique because not only do you have to code but you also have to decode clues and earn your problem statement!`,
    },
    {
      title: 'Code Run Seek',
      image: '/path-to-your-image/code-run-seek.png', // Update with your image path
      description: `An event loved by all, Code Run Seek is an event that IEEE WIE has conducted in collaboration with IEEE IAS for Gravitas multiple times. The event is unique because not only do you have to code but you also have to decode clues and earn your problem statement!`,
    },

  ];

  return (
    <div className="events-container">
      <h2>Our Events</h2>
      <p>IEEE WIE conducts various technical events and non-technical events throughout the year. Take a look at some of our events.</p>
      <div className="cards-container">
        {eventData.map((event, index) => (
          <div className="event-card" key={index}>
            <img src={event.image} alt={event.title} className="event-image" />
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
