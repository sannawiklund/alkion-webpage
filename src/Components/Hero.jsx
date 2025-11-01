import React from "react";
import '../Styling/Hero.css';
import CardNav from "./ComponentParts/CardNav";
import Logo2 from "../Assets/Logos/HeroLogo.svg";
import TextType from './ComponentParts/TextType';

function Hero() {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Removed hardcoded hex colors, using CSS vars via strings instead
    const items = [
        {
            label: "Products",
            bgColor: "var(--accent-blue)",
            textColor: "var(--accent-beige)",
            links: [
                { label: "Product Types", ariaLabel: "About Product Types", onClick: () => scrollToSection("products") },
                { label: "Industries", ariaLabel: "About Industries", onClick: () => scrollToSection("industries") },
                { label: "Our Services", ariaLabel: "About Our Services", onClick: () => scrollToSection("services") }
            ]
        },
        {
            label: "About Us",
            bgColor: "var(--accent-blue)",
            textColor: "var(--accent-beige)",
            links: [
                { label: "History", ariaLabel: "About Alkions History", onClick: () => scrollToSection("history") },
                { label: "The Team", ariaLabel: "About Our Team", onClick: () => scrollToSection("team") },
                { label: "Our Vision", ariaLabel: "About Our Vision", onClick: () => scrollToSection("vision") }
            ]
        },
        {
            label: "Contact",
            bgColor: "var(--accent-blue)",
            textColor: "var(--accent-beige)",
            links: [
                { label: "Contact Us", ariaLabel: "Our contact form", onClick: () => scrollToSection("contact") },
                { label: "Make a request", ariaLabel: "Make a request to us", onClick: () => scrollToSection("request") }
            ]
        }
    ];

    return (
        <div id="hero" className="relative flex flex-col h-screen Hero overflow-hidden">

            {/* NAVBAR */}
            <div className="w-full bg-accent-beige z-10 sticky top-0">
                <nav className="py-4 px-3 sm:py-3 sm:px-5 md:py-10 md:px-8 lg:py-12 lg:px-16 flex justify-between items-center ">
                    <div className="h-12 w-auto sm:h-8 " />
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

            {/* BACKGROUND */}
            <div className="absolute inset-0 w-full h-full z-[-2]">
                <div className="w-full h-full bg-gradient-to-b from-slate-900 via-[#153d64] to-slate-900"></div>
            </div>

            {/* HERO CONTENT */}
            <div className="flex-grow flex flex-col justify-center px-4 sm:px-6 md:px-16 lg:px-24">

                <div className="relative flex items-start">

                    {/* Vertical line */}
                    <div className="absolute left-0 top-0 w-[5px] h-full bg-accentBeige opacity-100"></div>

                    {/* Text */}
                    <div className="ml-4">

                        <h1 className="text-accent-beige text-3xl sm:text-4xl md:text-3xl min-[1520px]:text-4xl 2xl:text-6xl font-medium leading-snug mb-2">
                            The future of{" "}
                            <TextType
                                text={["Alkalinity Measurement"]}
                                typingSpeed={75}
                                pauseDuration={1500}
                                showCursor={true}
                                cursorCharacter="|"
                                textColors={["var(--accent-green)"]}
                                className="inline"
                            />
                        </h1>

                        <h2 className="text-accent-beige text-lg sm:text-xl md:text-3xl xl:text-3xl 2xl:text-3xl font-normal leading-snug w-full sm:w-[90%] md:w-[60%] mb-4">
                            We provide simple techniques to conduct complex measurements in harsh environments
                        </h2>

                        <button
                            onClick={() => scrollToSection("products")}
                            style={{ backgroundColor: "var(--accent-green)", color: "var(--accent-beige)" }}
                            className="mt-2 sm:mt-4 px-6 md:px-8 xl:px-8 2xl:px-10 py-2 md:py-3 xl:py-3 2xl:py-4 font-medium text-sm sm:text-md md:text-md xl:text-md 2xl:text-lg rounded-xs shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300 flex items-center gap-2"
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
