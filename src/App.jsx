import React from 'react'
import './index.css'
import './App.css'

import { Routes, Route, useNavigate, useLocation } from "react-router-dom"
import { useRef, useEffect } from 'react'

// LANDINGPAGE COMPONENTS
import Hero from './Components/Hero'
import CardNav from './Components/ComponentParts/CardNav'
import Logo from './Assets/Logos/HeroLogo.svg'
import CTA from './Components/CTA'
import ContactForm from './Components/Contact'
import WhatWeDo from './Components/WhatWeDo'
import Footer from './Components/Footer'

// Navbar Pages
import Solutions from './Components/NavBar/Solutions'
import Technology from './Components/NavBar/Technology'
import About from './Components/NavBar/About'
import ContactUs from './Components/NavBar/ContactUs'


function App() {
  const cardNavRef = useRef(null)
  const navigate = useNavigate()

  // Close menu helper
  const closeMenu = () => {
    if (cardNavRef.current) cardNavRef.current.closeMenu()
  }

  function ScrollToHash() {
    const { hash } = useLocation();

    useEffect(() => {
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    }, [hash]);

    return null;
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
      onClick: () => {
        navigate("/about");
        closeMenu();
      },
      links: [
        {
          label: "Our Story",
          onClick: () => {
            navigate("/about#story")
            closeMenu()
          }
        },
        {
          label: "The Team",
          onClick: () => {
            navigate("/about#team")
            closeMenu()
          }
        },
        {
          label: "Our Partners",
          onClick: () => {
            navigate("/about#partners")
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
      onClick: () => {
        navigate("/contact");
        closeMenu();
      },
      links: [
        {
          label: "Get in Touch",
          onClick: () => {
            navigate("/#contactForm") //Scroll to landing page contact form
            closeMenu()
          }
        },
        {
          label: "Make a request",
          onClick: () => {
            navigate("/contact#request")
            closeMenu()
          }
        }
      ]
    }
  ]

  return (
    <>

      <ScrollToHash />

      {/* NAVBAR */}
      <div className="w-full bg-accent-beige z-10 h-[100px] sm:h-[120px] md:h-[140px]">
        <nav className="relative flex justify-center items-center h-full">
          <CardNav
            ref={cardNavRef}
            logo={Logo}
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
              <div id="whatwedo"><WhatWeDo /></div>
              <div id="contactForm"><ContactForm /></div>

            </>
          }
        />

        {/* NAVBAR-PAGES ROUTING */}
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />

      </Routes>

      <div id="footer"><Footer /></div>

    </>
  )
}

export default App
