import React, { useState, useEffect } from "react";
import "./component.css";
import Banner from "./Banner";

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null;
    }

    return (
      <div key={interval} className="time-section">
        <span className="time-value">{timeLeft[interval]}</span>
        <span className="time-label">{interval}</span>
      </div>
    );
  });

  return (
    <>
      <div className="mainCount">
        <div className="countdown-container">
          <video autoPlay loop muted playsInline className="background-video">
            <source src="WIE_Website/src/assets/images/eventBG.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="countdown_left">
            <h1>Count Every Second Until Event</h1>
            <button className="buy-ticket">Buy Ticket</button>
          </div>
          <div className="timer">
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
          </div>
        </div>
        <video autoPlay loop muted playsInline className="background-video">
            <source src="WIE_Website/src/assets/images/eventBG.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

        <Banner />
      </div>
    </>
  );
};

export default CountdownTimer;
