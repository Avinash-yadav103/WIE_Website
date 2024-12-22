import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './component.css';

function Banner() {
    return (
        <>
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
        </>
    )
}

export default Banner
