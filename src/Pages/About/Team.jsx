import React from "react";
import { UsersRound } from "lucide-react";

import DanGell from "../../Assets/Team/DanGell.webp";
import ViktorAndersson from "../../Assets/Team/ViktorAndersson.webp";
import XiangruiKong from "../../Assets/Team/XiangruiKong.png";

export default function Team() {
    const teamMembers = [
        {
            name: "Dan Gall",
            role: "CEO",
            degree: "PhD",
            email: "dg@alkiontech.com",
            img: DanGell,
        },
        {
            name: "Viktor Andersson",
            role: "CTO",
            degree: "PhD",
            email: "va@alkiontech.com",
            img: ViktorAndersson,
        },
        {
            name: "Xiangrui Kong",
            role: "CSO",
            degree: "PhD",
            email: "xk@alkiontech.com",
            img: XiangruiKong,
        },
    ];

    return (
        <section className="relative py-8 sm:py-12 lg:py-8 bg-accent-beige">
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">

                {/* HEADER */}
                <div className="mb-8 sm:mb-8">
                    <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <UsersRound className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-accent-green" />
                        <span className="text-accent-blue text-base sm:text-lg md:text-xl font-medium tracking-wide">
                            The Team
                        </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent-blue px-2">
                        Meet the Team Behind Alkion
                    </h2>

                    <p className="text-accent-blue/70 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-2">
                        Alkion Technologies is a Swedish deep-tech company pushing the boundaries of alkali measurements and alkali chemistry understanding.
                    </p>
                </div>

                {/* TEAM GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-8 sm:mt-10">
                    {teamMembers.map(({ name, role, degree, email, img }) => (
                        <div
                            key={name}
                            className="bg-white/60 backdrop-blur-md rounded-md border border-accent-blue/10 shadow-lg p-6 sm:p-8 flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                        >
                            <img
                                src={img}
                                alt={name}
                                className="w-60 h-60 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 rounded-full object-cover shadow-md border-[3px] border-accent-green/40 group-hover:border-accent-green transition-all duration-300"
                            />

                            <h3 className="mt-4 sm:mt-6 text-2xl sm:text-xl md:text-2xl font-bold text-accent-blue">
                                {name}
                            </h3>

                            <p className="text-accent-blue font-medium text-md sm:text-base italic mt-1">
                                {degree}
                            </p>

                            <p className="text-accent-green font-medium text-base sm:text-lg mt-1">
                                {role}
                            </p>

                            <a
                                href={`mailto:${email}`}
                                className="text-accent-blue/70 text-md sm:text-sm md:text-base hover:text-accent-green underline transition-all mt-2 break-all"
                            >
                                {email}
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
