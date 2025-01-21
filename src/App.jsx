import { useState } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Events from './components/Events'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Teams from './teams/Teams'


function App() {

  return (
    <>
      <Nav />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blogs" element={<Events />} />
          <Route path="/team" element={<Teams />} />
          <Route path="/newsletter" element={<Events />} />
      </Routes>
    </>
  )
}

export default App