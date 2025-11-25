import React from 'react'
import './index.css'
import './App.css'

import { Routes, Route, useNavigate } from "react-router-dom"
import { useRef } from 'react'

// LANDINGPAGE COMPONENTS
import Hero from './Components/Hero'
import CardNav from './Components/ComponentParts/CardNav'
import Logo2 from './Assets/Logos/HeroLogo.svg'
import CTA from './Components/CTA'
import Team from './Components/Team'
import ContactForm from './Components/Contact'
import ComingSoon from './Components/ComingSoon'
import Footer from './Components/Footer'

// Navbar Pages
import Solutions from './Components/NavBar/Solutions'
import Technology from './Components/NavBar/Technology'
// import About from './Components/NavBar/About'
// import Contact from './Components/NavBar/Contact'

// Solutions Sub-Pages
import Services from './Pages/Services'
import Applications from './Pages/Applications'
import Industries from './Pages/Industries'

// Technology Sub-Pages
import Instruments from './Pages/Instruments'
import TAMSAM from './Pages/TAM-SAM'
import RnI from './Pages/RnI'


function App() {
  const cardNavRef = useRef(null)
  const navigate = useNavigate()

  // Close menu helper
  const closeMenu = () => {
    if (cardNavRef.current) cardNavRef.current.closeMenu()
  }

  //  NAVIGATION ITEMS
  const items = [

    // Solutions Menu
    {
      label: "Solutions",
      bgColor: "var(--accent-blue)",
      textColor: "var(--accent-beige)",
      onClick: () => {
        navigate("/solutions");
        closeMenu();
      },
      links: [
        {
          label: "Services",
          onClick: () => {
            navigate("/solutions#services")
            closeMenu()
          }
        },
        {
          label: "Industries",
          onClick: () => {
            navigate("/solutions#industries")
            closeMenu()
          }
        },
        {
          label: "Applications",
          onClick: () => {
            navigate("/solutions#applications")
            closeMenu()
          }
        }
      ]
    },

    // Technology Menu
    {
      label: "Technology",
      bgColor: "var(--accent-blue)",
      textColor: "var(--accent-beige)",
      onClick: () => {
        navigate("/technology");
        closeMenu();
      },
      links: [
        {
          label: "Instruments",
          onClick: () => {
            navigate("/technology#instruments")
            closeMenu()
          }
        },
        {
          label: "TAM & SAM",
          onClick: () => {
            navigate("/technology#tam-sam")
            closeMenu()
          }
        },
        {
          label: "Research & Innovation",
          onClick: () => {
            navigate("/technology#research")
            closeMenu()
          }
        }

      ]
    },

    // About Menu
    {
      label: "About",
      bgColor: "var(--accent-blue)",
      textColor: "var(--accent-beige)",
      links: [
        {
          label: "Our Story",
          onClick: () => {
            navigate("/#hero")
            closeMenu()
          }
        },
        {
          label: "The Team",
          onClick: () => {
            navigate("/#team")
            closeMenu()
          }
        },
        {
          label: "Our Partners",
          onClick: () => {
            navigate("/#hero")
            closeMenu()
          }
        }
      ]
    },

    // Contact Menu
    {
      label: "Contact",
      bgColor: "var(--accent-blue)",
      textColor: "var(--accent-beige)",
      links: [
        {
          label: "Get in Touch",
          onClick: () => {
            navigate("/#contact")
            closeMenu()
          }
        },
        {
          label: "Make a request",
          onClick: () => {
            navigate("/#request")
            closeMenu()
          }
        }
      ]
    }
  ]

  return (
    <>
      {/* NAVBAR */}
      <div className="w-full bg-accent-beige z-10 h-[100px] sm:h-[120px] md:h-[140px]">
        <nav className="relative flex justify-center items-center h-full">
          <CardNav
            ref={cardNavRef}
            logo={Logo2}
            logoAlt="Company Logo"
            items={items}
            baseColor="var(--accent-beige)"
            menuColor="var(--accent-blue)"
            buttonBgColor="var(--accent-green)"
            buttonTextColor="var(--accent-beige)"
            ease="power3.out"
            onLogoClick={() => navigate("/")}
          />
        </nav>
      </div>

      {/* ROUTES */}
      <Routes>

        {/* LANDING PAGE */}
        <Route
          path="/"
          element={
            <>
              <div id="hero"><Hero /></div>
              <div id="cta"><CTA /></div>
              <div id="team"><Team /></div>
              <div id="contact"><ContactForm /></div>
              <div id="comingsoon"><ComingSoon /></div>
              <div id="footer"><Footer /></div>
            </>
          }
        />

        {/* NAVBAR-PAGES ROUTING */}
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/technology" element={<Technology />} />

      </Routes>
    </>
  )
}

export default App
