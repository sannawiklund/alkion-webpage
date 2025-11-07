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
import Applications from './Components/Applications'
import Footer from './Components/Footer'
import ComingSoon from './Components/ComingSoon'

function App() {
  return (
    <>
      <Hero />

      {/* <div id="about"><AboutUs /></div> */}
      {/* <div id="applications"><Applications /></div> */}

      <CTA />

      {/* <div id="products"><Products_Services /></div> */}
      <div id="team"><Team /></div>
      {/* <div id="history"><History /></div> */}

      <div id="contact"><Contact /></div>
      <div id="comingsoon"><ComingSoon /></div>

      <div id="footer"><Footer /></div>

    </>
  )
}

export default App