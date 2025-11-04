import React from 'react'
import './index.css'
import './App.css'
import Hero from './Components/Hero'
import AboutUs from './Components/AboutUs'
import CTA from './Components/CTA'
import Products_Services from './Components/Products_Services'
import Team from './Components/Team'
import Contact from './Components/Contact'
import History from './Components/History'
import ProductTypes from './Components/ProductTypes'

function App() {
  return (
    <>
      <Hero />
      {/* <div id="about"><AboutUs /></div> */}
      <div id="productTypes"><ProductTypes /></div>
      {/* <CTA />
      <div id="products"><Products_Services /></div>
      <div id="team"><Team /></div>
      <div id="history"><History /></div> */}
      <div id="contact"><Contact /></div>
    </>
  )
}

export default App