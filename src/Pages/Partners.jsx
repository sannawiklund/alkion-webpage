import React from "react";
import { Handshake } from "lucide-react";

import Partner1 from "../Assets/Other/Chalmers.png";
import Partner2 from "../Assets/Other/GU.png";

export default function Partners() {
    const partners = [
        {
            name: "Chalmers University of Technology",
            link: "https://www.chalmers.se/",
            img: Partner1,
        },
        {
            name: "University of Gothenburg",
            link: "https://www.gu.se/",
            img: Partner2,
        },
    ];

    return (
        <section className="relative py-16 sm:py-16 bg-accent-beige">
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

                {/* HEADER */}
                <div className="mb-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Handshake className="w-7 h-7 sm:w-9 sm:h-9 text-accent-green" />
                        <span className="text-accent-blue font-medium text-lg sm:text-xl tracking-wide">
                            Collaboration Network
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-blue">
                        Our Research & Industry Partners
                    </h2>

                    <p className="text-accent-blue/70 mt-4 sm:text-lg max-w-3xl mx-auto">
                        Alkion Technologies stands on decades of collaborative research,
                        proudly connected with leading academic institutions and industrial ecosystems.
                    </p>
                </div>

                {/* PARTNER GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
                    {partners.map(({ name, link, img }) => (
                        <a
                            key={name}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-white/60 backdrop-blur-md shadow-lg rounded-2xl p-10 border border-accent-blue/10 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                        >
                            <img
                                src={img}
                                alt={name}
                                className="w-full h-40 sm:h-48 object-contain transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 opacity-90"
                            />
                            <p className="mt-6 text-lg font-semibold text-accent-blue group-hover:text-accent-green">
                                {name}
                            </p>
                        </a>
                    ))}
                </div>
            </div>

        </section>
    );
}
