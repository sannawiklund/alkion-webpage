import React, { useState } from "react";
import Logo from "../Assets/Alkion_logo.png";
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
        <div className="flex flex-col h-screen">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity-100"
                src={Video}
                autoPlay
                loop
                muted
                playsInline
            />

            <nav className="bg-[#f4f2f2] py-1 px-8 flex justify-between items-center">
                <img className="h-20 object-cover" src={Logo} />
                <ul className="flex space-x-6">
                    <li><a href="#" className="text-gray-800 font-semibold">Home</a></li>
                    <li><a href="#" className="text-gray-800 font-semibold">About</a></li>
                    <li><a href="#" className="text-gray-800 font-semibold">Product & Services</a></li>
                    <li><a href="#" className="text-gray-800 font-semibold">History & Theory</a></li>
                    <li><a href="#" className="text-gray-800 font-semibold">Contact</a></li>
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
