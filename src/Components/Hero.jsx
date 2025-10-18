import React from "react";
import LogoIcon from "../Assets/Icon_Light.svg";
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

    const accentGreen = "#3daf36";
    const accentBlue = "#0e2944";

    const items = [
        {
            label: "Products",
            bgColor: accentBlue,
            textColor: "white",
            links: [
                { label: "Product Types", ariaLabel: "About Product Types", onClick: () => scrollToSection("products") },
                { label: "Industries", ariaLabel: "About Industries", onClick: () => scrollToSection("industries") },
                { label: "Our Services", ariaLabel: "About Our Services", onClick: () => scrollToSection("services") }
            ]
        },
        {
            label: "About Us",
            bgColor: accentBlue,
            textColor: "white",
            links: [
                { label: "History", ariaLabel: "About Alkions History", onClick: () => scrollToSection("history") },
                { label: "The Team", ariaLabel: "About Our Team", onClick: () => scrollToSection("team") },
                { label: "Our Vision", ariaLabel: "About Our Vision", onClick: () => scrollToSection("vision") }
            ]
        },
        {
            label: "Contact",
            bgColor: accentBlue,
            textColor: "white",
            links: [
                { label: "Contact Us", ariaLabel: "Our contact form", onClick: () => scrollToSection("contact") },
                { label: "Make a request", ariaLabel: "Make a request to us", onClick: () => scrollToSection("request") }
            ]
        }
    ];

    return (
        <div id="hero" className="relative flex flex-col h-screen Hero overflow-hidden">

            {/* NAVBAR */}
            <div className="w-full bg-white z-10 sticky top-0">

                <nav className="py-10 px-5 flex justify-between items-center">
                    <div className="h-12 w-auto" />
                    <CardNav
                        logo={Logo2}
                        logoAlt="Company Logo"
                        items={items}
                        baseColor="#FFFFFF"
                        menuColor={accentBlue}
                        buttonBgColor={accentGreen}
                        buttonTextColor="#FFFFFF"
                        ease="power3.out"
                    />
                </nav>
            </div>

            {/* BACKGROUND */}
            <div className="absolute inset-0 w-full h-full z-[-2]">

                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2] opacity-40">
                    <img src={LogoIcon} alt="Logo Icon" className="w-32 h-auto" />
                </div>

                <div className="w-full h-full bg-[#f4f2f2]"></div>

            </div>

            {/* HERO CONTENT */}
            <header className="flex-grow flex flex-col justify-center items-start px-6 md:px-16 lg:px-24 space-y-4 md:space-y-6 lg:space-y-8 text-center bg-gradient-to-b from-slate-900 via-[#0e2944] to-slate-900">

                <h1 className="text-white text-5xl font-medium mb-2">The future of 
                    <span className="text-[#57c951]"> Alkalinity Measurement</span>
                </h1>

                {/* Horizontal Line */}
                <div className="border-2 border-white opacity-90 w-[61%] mb-2"></div>

                <h2 className="text-white text-3xl text-left font-normal w-[60%] mb-1 text-wrap">We provide simple techniques to conduct complex measurements in harsh environments</h2>

                {/* CTA Button */}
                <button
                    onClick={() => scrollToSection("products")}
                    className="mt-4 bg-[#3daf36] text-white px-8 py-3 font-medium text-md hover:bg-[#36a130] rounded-xs transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.03]"
                >
                    Explore Our Solutions
                    <span className="ml-2 inline-block transform group-hover:translate-x-1 transition-transform">➤</span>
                </button>
            </header>
        </div>
    );
}

export default Hero;
