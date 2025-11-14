import React from 'react'
import './index.css'
import './App.css'
import Hero from './Components/Hero'
import CardNav from './Components/ComponentParts/CardNav'
import Logo2 from './Assets/Logos/HeroLogo.svg'
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
  // CardNav items and scrollToSection logic moved from Hero.jsx
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const items = [
    {
      label: "Solutions",
      bgColor: "var(--accent-blue)",
      textColor: "var(--accent-beige)",
      links: [
        { label: "Applications", ariaLabel: "About Applications", onClick: () => scrollToSection("applications") },
        { label: "Industries", ariaLabel: "Industries we serve", onClick: () => scrollToSection("industries") },
        { label: "Services", ariaLabel: "Measurement Services", onClick: () => scrollToSection("services") },
      ]
    },
    {
      label: "Technology",
      bgColor: "var(--accent-blue)",
      textColor: "var(--accent-beige)",
      links: [
        { label: "Our Method", ariaLabel: "How our measurement method works", onClick: () => scrollToSection("technology") },
        { label: "Key Features", ariaLabel: "Key features of Alkion Technology", onClick: () => scrollToSection("features") },
        { label: "Research & Innovation", ariaLabel: "Research background", onClick: () => scrollToSection("research") }
      ]
    },
    {
      label: "About",
      bgColor: "var(--accent-blue)",
      textColor: "var(--accent-beige)",
      links: [
        { label: "Our Story", ariaLabel: "Company history", onClick: () => scrollToSection("about") },
        { label: "The Team", ariaLabel: "Meet the Alkion team", onClick: () => scrollToSection("team") },
        { label: "Partners", ariaLabel: "Partners and collaborators", onClick: () => scrollToSection("partners") }
      ]
    },
    {
      label: "Contact",
      bgColor: "var(--accent-blue)",
      textColor: "var(--accent-beige)",
      links: [
        { label: "Get in Touch", ariaLabel: "Contact form", onClick: () => scrollToSection("contact") },
        { label: "Make a Request", ariaLabel: "Make a service request", onClick: () => scrollToSection("request") }
      ]
    }
  ];

  return (
    <>
      {/* NAVBAR moved out of Hero and placed here */}
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