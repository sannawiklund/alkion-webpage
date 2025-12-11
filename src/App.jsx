// App.jsx
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
        let timeoutId = null

        const handleScroll = () => {
            if (timeoutId) clearTimeout(timeoutId)

            timeoutId = setTimeout(() => {
                const scrollY = window.scrollY
                setShowScrollTop(prev => {
                    if (!prev && scrollY > 300) return true
                    if (prev && scrollY < 250) return false
                    return prev
                })
            }, 100)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', handleScroll)
            if (timeoutId) clearTimeout(timeoutId)
        }
    }, [])

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    function ScrollToHash() {
        const { hash } = useLocation()
        const lastHashRef = useRef(null)

        useEffect(() => {
            if (!hash) return
            if (lastHashRef.current === hash) return
            lastHashRef.current = hash

            const el = document.querySelector(hash)
            if (!el) return

            const rect = el.getBoundingClientRect()
            const vh = window.innerHeight
            const isMostlyVisible = rect.top >= -50 && rect.bottom <= vh + 50
            if (isMostlyVisible) return

            setTimeout(() => {
                el.scrollIntoView({ behavior: "auto", block: "start" })
            }, 0)
        }, [hash])

        return null
    }

    // NAVIGATION ITEMS
    const items = [

        // 1. WHAT WE OFFER
        {
            label: "What We Offer",
            path: "",
            subLinks: [
                { label: "Services & Solutions", hash: "#services" },
                { label: "Applications & Industries", hash: "#applications" },
                { label: "Research & Development", hash: "#research" }
            ]
        },

        // 2. TECHNOLOGY
        {
            label: "Technology",
            path: "",
            subLinks: [
                { label: "Methods", hash: "#methods" },
                { label: "Instruments", hash: "#instruments" },

            ]
        },

        // 3. ABOUT US
        {
            label: "About Us",
            path: "",
            subLinks: [
                { label: "Our Story", hash: "#story" },
                { label: "The Team", hash: "#team" },
                { label: "Our Partners", hash: "#partners" }
            ]
        },

        // 4. CONTACT
        {
            label: "Contact",
            path: "",
            subLinks: [
                { label: "Contact Form", hash: "/#contactForm", isExternalPage: true },
                { label: "Make a Request", hash: "#request" }
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
                baseColor="var(--accent-beige)"
                menuColor="var(--accent-blue)"
            />

            {/* Spacer removed: navbar is no longer fixed */}

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
