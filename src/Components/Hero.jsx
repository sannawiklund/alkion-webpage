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
    const accentBeige = "#f4f2f2";

    const items = [
        {
            label: "Products",
            bgColor: accentBlue,
            textColor: accentBeige,
            links: [
                { label: "Product Types", ariaLabel: "About Product Types", onClick: () => scrollToSection("products") },
                { label: "Industries", ariaLabel: "About Industries", onClick: () => scrollToSection("industries") },
                { label: "Our Services", ariaLabel: "About Our Services", onClick: () => scrollToSection("services") }
            ]
        },
        {
            label: "About Us",
            bgColor: accentBlue,
            textColor: accentBeige,
            links: [
                { label: "History", ariaLabel: "About Alkions History", onClick: () => scrollToSection("history") },
                { label: "The Team", ariaLabel: "About Our Team", onClick: () => scrollToSection("team") },
                { label: "Our Vision", ariaLabel: "About Our Vision", onClick: () => scrollToSection("vision") }
            ]
        },
        {
            label: "Contact",
            bgColor: accentBlue,
            textColor: accentBeige,
            links: [
                { label: "Contact Us", ariaLabel: "Our contact form", onClick: () => scrollToSection("contact") },
                { label: "Make a request", ariaLabel: "Make a request to us", onClick: () => scrollToSection("request") }
            ]
        }
    ];

    return (
        <div id="hero" className="relative flex flex-col h-screen Hero overflow-hidden">

            {/* NAVBAR */}
            <div className="w-full bg-[#f4f2f2] z-10 sticky top-0">
                <nav className="py-4 px-3 sm:py-6 sm:px-5 md:py-10 md:px-8 lg:py-12 lg:px-16 flex justify-between items-center">
                    <div className="h-12 w-auto sm:h-8" />
                    <CardNav
                        logo={Logo2}
                        logoAlt="Company Logo"
                        items={items}
                        baseColor={accentBeige}
                        menuColor={accentBlue}
                        buttonBgColor={accentGreen}
                        buttonTextColor={accentBeige}
                        ease="power3.out"
                    />
                </nav>
            </div>

            {/* BACKGROUND */}
            <div className="absolute inset-0 w-full h-full z-[-2]">
                <div className="w-full h-full bg-gradient-to-b from-slate-900 via-[#0e2944] to-slate-900"></div>
            </div>

            {/* HERO CONTENT */}
            <div className="flex-grow flex flex-col justify-center px-4 sm:px-6 md:px-16 lg:px-24">
                {/* Text + vertikalt streck */}
                <div className="relative flex items-start">

                    {/* Vertikalt streck */}
                    <div className="absolute left-0 top-0 w-[5px] h-full bg-[#f4f2f2] opacity-100"></div>

                    {/* Text */}
                    <div className="ml-4">
                        <h1 className="text-[#f4f2f2] text-3xl sm:text-4xl md:text-5xl xl:text-5xl 2xl:text-6xl font-medium leading-snug mb-2">
                            The future of <span className="text-[#57c951]">Alkalinity Measurement</span>
                        </h1>

                        <h2 className="text-[#f4f2f2] text-lg sm:text-xl md:text-3xl xl:text-3xl 2xl:text-3xl font-normal leading-snug w-full sm:w-[90%] md:w-[60%] mb-4">
                            We provide simple techniques to conduct complex measurements in harsh environments
                        </h2>

                        <button
                            onClick={() => scrollToSection("products")}
                            className="mt-2 sm:mt-4 bg-[#3daf36] text-[#f4f2f2] px-6 md:px-8 xl:px-8 2xl:px-10 py-2 md:py-3 xl:py-3 2xl:py-4 font-medium text-sm sm:text-md md:text-md xl:text-md 2xl:text-lg rounded-xs shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300 flex items-center gap-2"
                        >
                            Explore Our Solutions ➤
                        </button>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Hero;
