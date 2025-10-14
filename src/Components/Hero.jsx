// Hero.jsx
import React, { useState } from "react";
import LogoIcon from "../Assets/Icon_Dark.svg";
import Logo from "../Assets/Logo2_Light.svg";
import Video from "../Assets/Example-video.mp4";
import { TypingEffect } from "../Components/TypingEffect";
import '../Styling/Hero.css';
import CardNav from "./CardNav";

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

                <CardNav
                    logo={LogoIcon}
                    logoAlt="Company Logo"
                    items={items}
                    baseColor="#FFFFFF"
                    menuColor="#000"
                    buttonBgColor="#3daf36"
                    buttonTextColor="#fff"
                    ease="power3.out"
                />

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
