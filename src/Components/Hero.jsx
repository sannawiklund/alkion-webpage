// Hero.jsx
import React, { useState } from "react";
import Logo from "../Assets/Logo2_Light.svg";
import Video from "../Assets/Example-video.mp4";
import { TypingEffect } from "../Components/TypingEffect";
import '../Styling/Hero.css';


function Hero() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div div id="hero" className="flex flex-col h-screen Hero">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity-100"
                src={Video}
                autoPlay
                loop
                muted
                playsInline
            />

            <nav className="py-1 px-5 flex justify-between items-center">
                <img className="h-20 w-auto pt-5" src={Logo} alt="Logotyp" />                
                <ul className="flex space-x-6">
                    <li>
                        <button 
                            onClick={() => scrollToSection("hero")} 
                            className="text-white hover:text-[#3daf36] text-xl font-semibold"
                        >
                            Home
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => scrollToSection("about")} 
                            className="text-white hover:text-[#3daf36] text-xl font-normal"
                        >
                            About
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => scrollToSection("products")} 
                            className="text-white hover:text-[#3daf36] text-xl font-normal"
                        >
                            Product & Services
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => scrollToSection("history")} 
                            className="text-white hover:text-[#3daf36] text-xl font-normal"
                        >
                            History & Theory
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => scrollToSection("contact")} 
                            className="text-white hover:text-[#3daf36] text-xl font-normal"
                        >
                            Contact
                        </button>
                    </li>
                </ul>
            </nav>

            <header className="flex-grow flex flex-col justify-center items-center px-8">
                <h1 className="text-6xl font-medium text-center mb-4 text-white">
                    <span>ALKION </span>
                    <span className="font-[inherit]" id="Title">TECHNOLOGIES</span>
                </h1>
                <TypingEffect text="The future of Alkalinity Measurement" />
            </header>
        </div>
    );
}

export default Hero;
