import { useState } from 'react'
import './App.css'
import Nav from './assets/components/Nav'
import Slider from './assets/components/Slider'
import About from './assets/components/About'
import Events from './assets/components/Events'
import CountdownTimer from './assets/components/CountdownTimer'
import Footer from './assets/components/Footer'
import SpeakersCarousel from './assets/components/SpeakersCarousel'
import WieTeam from './assets/components/WieTeam'
import {Router, Route, Routes } from 'react-router-dom'
// import Newsletter from './assets/components/Newsletter'

function App() {

  return (
    <>
      <Nav />
      <Slider />
      <Events />
      <SpeakersCarousel />
      <WieTeam />
      {/* <Newsletter /> */}
      <CountdownTimer targetDate="2024-12-31T23:59:59" />
      <Footer />

      <Routes>
          {/* <Route path="/home" element={<Slider />} /> */}
          <Route path="/about-us" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blogs" element={<Events />} />
          <Route path="/newsletter" element={<Events />} />
      </Routes>
    </>
  )
}

export default App