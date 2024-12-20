import { useState } from 'react'
import './App.css'
import Nav from './assets/components/Nav'
import Slider from './assets/components/Slider'
import About from './assets/components/About'
import Events from './assets/components/Events'
import CountdownTimer from './assets/components/CountdownTimer'

function App() {

  return (
    <>
      <Nav />
      <Slider />
      <About />
      <Events />
      <CountdownTimer targetDate="2024-12-31T23:59:59" />
    </>
  )
}

export default App