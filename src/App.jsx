import React from 'react'
import './index.css'
import './App.css'

import { Routes, Route, useNavigate, useLocation } from "react-router-dom"
import { useRef, useEffect, useState } from 'react'

// LANDINGPAGE COMPONENTS
import Hero from './Landingpage/Hero'
import Logo from './Assets/Logos/HeroLogo.svg'
import CTA from './Landingpage/CTA'
import ContactForm from './Landingpage/Contact'
import WhatWeDo from './Landingpage/WhatWeDo'
import Footer from './Landingpage/Footer'

// New Navigation Component
import MegaNav from './Components/Navigation/MegaNav' 

// Navbar Pages
import SolutionsTechnology from './Components/Navigation/Sections/SolutionsTechnologyPreview'
import About from './Components/Navigation/Sections/AboutPreview'
import ContactUs from './Components/Navigation/Sections/ContactPreview'


function App() {
    const navigate = useNavigate()
    const [showScrollTop, setShowScrollTop] = useState(false)

    // Reference to MegaNav
    const megaNavRef = useRef(null) 
    
    // Function to close the menu exposed from MegaNav
    const closeMenu = () => {
        if (megaNavRef.current) megaNavRef.current.closeMenu()
    }

    // Show/hide scroll to top button based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
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

    // NAVIGATION ITEMS
    const items = [

        // 1. Solutions (Services / What We Offer)
        {
            label: "What We Offer",
            path: "",
            subLinks: [
                // 1.1 Services
                { label: "Services", hash: "#services" }, 
                // 1.2 Technology (Container)
                {
                    label: "Technology", 
                    subLinks: [
                        // 1.2.1 Methods
                        { label: "Methods", hash: "#methods" }, 
                        // 1.2.3 Instruments
                        { label: "Instruments", hash: "#instruments" }, 
                    ]
                },
                // 1.3 Applications & Industries
                { label: "Applications & Industries", hash: "#applications" }, 
                // 1.4 Research & Development
                { label: "Research & Development", hash: "#research" }, 
            ]
        },
        
        // 2. About us
        {
            label: "About us",
            path: "/about",
            subLinks: [
                // 2.1 Our Story
                { label: "Our Story", hash: "#story" },
                // 2.2 Team & Partners
                { label: "Team & Partners", hash: "#team-partners" },
            ]
        },
        
        // 3. Contact
        {
            label: "Contact",
            path: "/contact",
            subLinks: [
                { label: "Get in Touch", hash: "/#contactForm", isExternalPage: true }, // Link to contactform on landing page
                { label: "Make a request", hash: "#request" },
            ]
        }
    ];


    return (
        <>
            <ScrollToHash />

            {/* NAVBAR */}
            
            <MegaNav
                ref={megaNavRef}
                logo={Logo}
                items={items}
                navigate={navigate} 
                closeMenu={closeMenu} 
            />
            
            {/* Spacer to prevent content from hiding under fixed navbar */}
            <div className="h-[70px] sm:h-[80px]" aria-hidden="true"></div>

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
                <Route path="/solutions-technology" element={<SolutionsTechnology />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<ContactUs />} />

            </Routes>

            <div id="footer"><Footer /></div>

            {/* SCROLL TO TOP BUTTON */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-3 right-8 bg-accent-green text-accent-beige p-4 rounded-full shadow-lg hover:opacity-80 transition-opacity z-50"
                    aria-label="Scroll to top"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </button>
            )}
        </>
    )
}

export default App