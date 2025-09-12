import React from 'react'
import './index.css'
import './App.css'
import Hero from './Components/Hero'
import AboutUs from './Components/AboutUs'
import CTA from './Components/CTA'
import Products_Services from './Components/Products_Services'
import Team from './Components/Team'

function App() {
  return (
    <>
      <Hero />
      <CTA />
      <AboutUs />
      <Products_Services />
      <Team />
    </>
  )
}

export default App
