import React from "react";
import LogoIcon from "../Assets/Icon_Dark.svg";
import Logo from "../Assets/Logo2_Light.svg";
import { TypingEffect } from "../Components/TypingEffect";
import '../Styling/Hero.css';
import CardNav from "./CardNav";
import Logo2 from "../Assets/Logo2_Dark.svg";

function Hero() {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const items = [
        {
            label: "Products",
            bgColor: "#071B30",
            textColor: "#fff",
            links: [
                { label: "Product Types", ariaLabel: "About Product Types", onClick: () => scrollToSection("products") },
                { label: "Industries", ariaLabel: "About Industries", onClick: () => scrollToSection("industries") },
                { label: "Our Services", ariaLabel: "About Our Services", onClick: () => scrollToSection("services") }
            ]
        },
        {
            label: "About Us",
            bgColor: "#071B30",
            textColor: "#fff",
            links: [
                { label: "History", ariaLabel: "About Alkions History", onClick: () => scrollToSection("history") },
                { label: "The Team", ariaLabel: "About Our Team", onClick: () => scrollToSection("team") },
                { label: "Our Vision", ariaLabel: "About Our Vision", onClick: () => scrollToSection("vision") }
            ]
        },
        {
            label: "Contact",
            bgColor: "#071B30",
            textColor: "#fff",
            links: [
                { label: "Contact Us", ariaLabel: "Our contact form", onClick: () => scrollToSection("contact") },
                { label: "Make a request", ariaLabel: "Make a request to us", onClick: () => scrollToSection("request") }
            ]
        }
    ];

    return (
        <div id="hero" className="relative flex flex-col h-screen Hero overflow-hidden">

            {/* NAVBAR */}
            <div className="w-full bg-gradient-to-r from-[#071B30] to-[#0a2240] z-10 sticky top-0">
                <nav className="py-10 px-5 flex justify-between items-center">
                    <div className="h-14 w-auto" />
                    <CardNav
                        logo={LogoIcon}
                        logoAlt="Company Logo"
                        items={items}
                        baseColor="#f4f2f2"
                        menuColor="#000"
                        buttonBgColor="#3daf36"
                        buttonTextColor="#fff"
                        ease="power3.out"
                    />
                </nav>
            </div>

            {/* BACKGROUND */}
            <div className="absolute inset-0 w-full h-full z-[-2]">
                {/* Här kan du lägga video eller stillbild */}
                <div className="w-full h-full bg-[#f4f2f2]"></div>
            </div>

            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 w-full h-full z-[-1] pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent)]"></div>

            {/* HERO CONTENT */}
            <header className="flex-grow flex flex-col justify-center items-center px-6 md:px-16 lg:px-24 space-y-4 md:space-y-6 lg:space-y-8 text-center">

                {/* Logo with fade-in */}
                <img
                    src={Logo2}
                    alt="Company Logo"
                    className="w-[50%] md:w-[50%] animate-fadeIn"
                />

                {/* Typing effect */}
                <TypingEffect text="The future of Alkalinity Measurement" />

                {/* CTA Button */}
                <button
                    onClick={() => scrollToSection("products")}
                    className="mt-2 md:mt-4 bg-gradient-to-r from-[#071B30] to-[#0a2240] text-white px-8 py-3 rounded-xs font-medium text-md hover:scale-105 transform transition-all duration-500 shadow-lg hover:shadow-xl animate-slideUp"
                >
                    Explore Our Solutions
                    <span className="ml-2 inline-block transform group-hover:translate-x-1 transition-transform">➤</span>
                </button>
            </header>
        </div>
    );
}

export default Hero;
