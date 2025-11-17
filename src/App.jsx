import React from 'react'
import './index.css'
import './App.css'
import { Routes, Route } from "react-router-dom"
import { useNavigate } from "react-router-dom"

// IMPORT COMPONENTS
import Hero from './Components/Hero'
import CardNav from './Components/ComponentParts/CardNav'
import { useRef } from 'react'
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
  const cardNavRef = useRef(null)

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
          onClick: () => {
            navigate("/Applications")
            if (cardNavRef.current) cardNavRef.current.closeMenu()
          }
        },
        { label: "Industries", ariaLabel: "Industries we serve", onClick: () => { scrollToSection("industries"); if (cardNavRef.current) cardNavRef.current.closeMenu() } },
        { label: "Services", ariaLabel: "Our Services", onClick: () => { scrollToSection("services"); if (cardNavRef.current) cardNavRef.current.closeMenu() } },
      ]
    },
    {
      label: "Technology",
      bgColor: "var(--accent-blue)",
      textColor: "var(--accent-beige)",
      links: [
        { label: "Our Method", ariaLabel: "How our method works", onClick: () => { scrollToSection("technology"); if (cardNavRef.current) cardNavRef.current.closeMenu() } },
        { label: "Key Features", ariaLabel: "Key features", onClick: () => { scrollToSection("features"); if (cardNavRef.current) cardNavRef.current.closeMenu() } },
        { label: "Research & Innovation", ariaLabel: "Research background", onClick: () => { scrollToSection("research"); if (cardNavRef.current) cardNavRef.current.closeMenu() } }
      ]
    },
    {
      label: "About",
      bgColor: "var(--accent-blue)",
      textColor: "var(--accent-beige)",
      links: [
        { label: "Our Story", ariaLabel: "Company history", onClick: () => { scrollToSection("about"); if (cardNavRef.current) cardNavRef.current.closeMenu() } },
        { label: "The Team", ariaLabel: "Team section", onClick: () => { scrollToSection("team"); if (cardNavRef.current) cardNavRef.current.closeMenu() } },
        { label: "Partners", ariaLabel: "Partners", onClick: () => { scrollToSection("partners"); if (cardNavRef.current) cardNavRef.current.closeMenu() } }
      ]
    },
    {
      label: "Contact",
      bgColor: "var(--accent-blue)",
      textColor: "var(--accent-beige)",
      links: [
        { label: "Get in Touch", ariaLabel: "Contact section", onClick: () => { scrollToSection("contact"); if (cardNavRef.current) cardNavRef.current.closeMenu() } },
        { label: "Make a Request", ariaLabel: "Request form", onClick: () => { scrollToSection("request"); if (cardNavRef.current) cardNavRef.current.closeMenu() } }
      ]
    }
  ]

  return (
    <>
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
            onLogoClick={() => {
              navigate("/");
            }}
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
