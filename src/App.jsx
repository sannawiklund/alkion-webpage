import React from 'react'
import './index.css'
import './App.css'
import { Routes, Route } from "react-router-dom"
import { useNavigate } from "react-router-dom"

// IMPORT COMPONENTS
import Hero from './Components/Hero'
import CardNav from './Components/ComponentParts/CardNav'
import Logo2 from './Assets/Logos/HeroLogo.svg'
import AboutUs from './Components/AboutUs'
import CTA from './Components/CTA'
import Team from './Components/Team'
import Contact from './Components/Contact'
import History from './Components/History'
import Applications from './Pages/Applications'
import Footer from './Components/Footer'
import ComingSoon from './Components/ComingSoon'

function App() {

  // Scroll logic for internal sections
  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navigate = useNavigate()


  // MENU ITEMS FOR CARDNAV
  const items = [
    {
      label: "Solutions",
      bgColor: "var(--accent-blue)",
      textColor: "var(--accent-beige)",
      links: [
        {
          label: "Applications",
          ariaLabel: "Applications page",
          onClick: () => navigate("/Applications")
        },
        { label: "Industries", ariaLabel: "Industries we serve", onClick: () => scrollToSection("industries") },
        { label: "Services", ariaLabel: "Measurement Services", onClick: () => scrollToSection("services") },
      ]
    },
    {
      label: "Technology",
      bgColor: "var(--accent-blue)",
      textColor: "var(--accent-beige)",
      links: [
        { label: "Our Method", ariaLabel: "How our method works", onClick: () => scrollToSection("technology") },
        { label: "Key Features", ariaLabel: "Key features", onClick: () => scrollToSection("features") },
        { label: "Research & Innovation", ariaLabel: "Research background", onClick: () => scrollToSection("research") }
      ]
    },
    {
      label: "About",
      bgColor: "var(--accent-blue)",
      textColor: "var(--accent-beige)",
      links: [
        { label: "Our Story", ariaLabel: "Company history", onClick: () => scrollToSection("about") },
        { label: "The Team", ariaLabel: "Team section", onClick: () => scrollToSection("team") },
        { label: "Partners", ariaLabel: "Partners & collaborators", onClick: () => scrollToSection("partners") }
      ]
    },
    {
      label: "Contact",
      bgColor: "var(--accent-blue)",
      textColor: "var(--accent-beige)",
      links: [
        { label: "Get in Touch", ariaLabel: "Contact section", onClick: () => scrollToSection("contact") },
        { label: "Make a Request", ariaLabel: "Request form", onClick: () => scrollToSection("request") }
      ]
    }
  ]

  return (
    <>

      {/* NAVBAR */}
      <div className="w-full bg-accent-beige z-10 h-[100px] sm:h-[120px] md:h-[140px]">
        <nav className="relative flex justify-center items-center h-full">
          <CardNav
            logo={Logo2}
            logoAlt="Company Logo"
            items={items}
            baseColor="var(--accent-beige)"
            menuColor="var(--accent-blue)"
            buttonBgColor="var(--accent-green)"
            buttonTextColor="var(--accent-beige)"
            ease="power3.out"
          />
        </nav>
      </div>

      {/* ROUTES */}
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <CTA />
              <div id="team"><Team /></div>
              <div id="contact"><Contact /></div>
              <div id="comingsoon"><ComingSoon /></div>
              <div id="footer"><Footer /></div>
            </>
          }
        />

        {/* Applications Page */}
        <Route path="/Applications" element={<Applications />} />
      </Routes>
    </>
  )
}

export default App
