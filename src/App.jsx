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

function App() {

  return (
    <>
      <Nav />
      <Slider />
      <About />
      <Events />
      <SpeakersCarousel />
      <WieTeam />
      <CountdownTimer targetDate="2024-12-31T23:59:59" />
      <Footer />
    </>
  )
}

export default App