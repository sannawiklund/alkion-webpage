import React from "react";
import '../Styling/Hero.css';
import TextType from '../Components/ComponentParts/TextType';
import { Link } from "react-router-dom";

function Hero() {


    return (
        <div id="hero" className="relative flex flex-col h-screen Hero">
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
                        <h1 className="text-accent-beige text-3xl sm:text-4xl md:text-5xl min-[1520px]:text-4xl 2xl:text-6xl font-medium leading-snug mb-2">
                            The future of{" "}
                            <TextType
                                text={["Alkali Measurements"]}
                                typingSpeed={75}
                                pauseDuration={1500}
                                showCursor={true}
                                cursorCharacter="|"
                                textColors={["var(--accent-green)"]}
                                className="inline"
                            />
                        </h1>
                        <h2 className="text-accent-beige text-lg sm:text-xl md:text-2xl xl:text-3xl 2xl:text-3xl font-normal leading-snug w-full sm:w-[90%] md:w-[60%] mb-4">
                            We provide simple techniques for complex alkali measurements, even in the harshest environments
                        </h2>

                        {/* Button for route to /solutions */}
                        <Link
                            to="/whatweoffer"
                            state={{ scrollTo: "services" }}
                            className="inline-block mt-2 sm:mt-4 px-5 md:px-6 xl:px-7 2xl:px-8 py-2 md:py-3 xl:py-3 2xl:py-4 font-medium text-sm sm:text-md md:text-md xl:text-md 2xl:text-lg rounded-xs shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300"
                            style={{ backgroundColor: "var(--accent-green)", color: "var(--accent-beige)" }}
                        >
                            Explore Our Solutions ➤
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
