import React from "react";
import "../Styling/AboutUs.css";
import Machine from "../Assets/Other/Machine.png";

function AboutUs() {
    return (
        <section
            className="relative py-20 sm:py-24 flex items-center justify-center text-center overflow-hidden"
            style={{
                backgroundImage: `url(${Machine})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Blurry overlay */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

            {/* Content container */}
            <div className="relative z-10 max-w-4xl px-4 sm:px-6 lg:px-10 text-white">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-semibold mb-6 text-accent-green drop-shadow-md break-words">
                    Precision in Every Measurement
                </h2>

                <p className="text-base sm:text-lg md:text-xl lg:text-xl font-light text-white/90 mb-8 max-w-3xl mx-auto">
                    Alkion Technologies delivers advanced alkali monitoring solutions that give real-time insights into alkali behavior across industrial and research applications.
                </p>

            </div>
        </section>
    );
}

export default AboutUs;
