import React from 'react';
import Slider from './Slider'
import Events from './Events'
import CountdownTimer from './CountdownTimer'
import Footer from './Footer'
import SpeakersCarousel from './SpeakersCarousel'


const Home = () => {
    return (
        <div>
        <Slider />
        <Events />
        <SpeakersCarousel />
        <CountdownTimer targetDate="2025-12-31T23:59:59" />
        <Footer />
        </div>
    );
}

export default Home;