import React, { useState, useEffect } from "react";
import "./component.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


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
                    <div className="countdown_left">
                        <h1>Count Every Second Until Event</h1>
                        <button className="buy-ticket">Buy Ticket</button>
                    </div>
                    <div className="timer">{timerComponents.length ? timerComponents : <span>Time's up!</span>}</div>
                </div>

                <div className="addingInfoBar">
                    <div className="eventVenue">
                        <div className="eventIcons">
                            <FontAwesomeIcon icon={faLocationDot} size="1x" color="#A020EF" />
                        </div>
                        <div className="eventdetails">Event Venue:<div className="lala"> XYZ Convention Center</div></div>
                    </div>
                    <div className="eventMail">
                        <div className="eventIcons">
                            <FontAwesomeIcon icon={faEnvelope} size="1x" color="#A020EF" />
                        </div>
                        <div className="eventdetails">Contact Email:<div className="lala">  event@example.com</div></div>
                        
                    </div>
                    <div className="eventPhone">
                        <div className="eventIcons">
                            <FontAwesomeIcon icon={faPhone} size="1x" color="#A020EF" />
                        </div>
                        <div className="eventdetails"> Contact Phone: <div className="lala"> +1234567890</div></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CountdownTimer;
