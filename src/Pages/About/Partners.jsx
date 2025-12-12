import React from "react";
import { Handshake } from "lucide-react";

import Partner1 from "../../Assets/Other/Chalmers.png";
import Partner2 from "../../Assets/Other/GU.png";


export default function Partners() {
    const partners = [
        {
            name: "Chalmers University of Technology",
            link: "https://www.chalmers.se/",
            img: Partner1,
            caption: "Home to the engineering innovations behind our sampling systems and instrument design. Their support enabled the transition from research instrumentation to industrial technology."
        },
        {
            name: "University of Gothenburg",
            link: "https://www.gu.se/",
            img: Partner2,
            caption: "Our research foundation and long-term collaborator in atmospheric, aerosol, and environmental chemistry. Their expertise has shaped our measurement principles and scientific approach."
        },
    ];

    return (
        <section className="relative py-12 sm:py-16 bg-accent-beige">
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">

                {/* HEADER */}
                <div className="mb-8 sm:mb-12">
                    <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <Handshake className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-accent-green" />
                        <span className="text-accent-blue font-medium text-base sm:text-lg md:text-xl tracking-wide">
                            Collaboration Network
                        </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent-blue px-2">
                        Our Research & Industry Partners
                    </h2>

                </div>

                {/* PARTNER GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                    {partners.map(({ name, link, img, caption }) => (
                        <a
                            key={name}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-white/60 backdrop-blur-md shadow-lg rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-accent-blue/10 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                        >
                            <img
                                src={img}
                                alt={name}
                                title={caption}
                                className="w-full h-auto max-h-32 sm:max-h-40 md:max-h-50 object-contain transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 opacity-90"
                            />
                            <h1 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-accent-blue group-hover:text-accent-green">
                                {name}
                            </h1>

                            <p className="mt-2 text-sm sm:text-base text-accent-blue text-pretty">
                                {caption}
                            </p>
                        </a>
                    ))}
                </div>
            </div>

        </section>
    );
}

