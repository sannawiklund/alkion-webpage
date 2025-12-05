import React from "react";
import { UsersRound } from "lucide-react";

import DanGell from "../Assets/Team/DanGell.webp";
import ViktorAndersson from "../Assets/Team/ViktorAndersson.webp";
import XiangruiKong from "../Assets/Team/XiangruiKong.png";

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
        <section className="relative py-2 sm:py-2 bg-accent-beige">
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

                {/* HEADER */}
                <div className="mb-5">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <UsersRound className="w-7 h-7 sm:w-9 sm:h-9 text-accent-green" />
                        <span className="text-accent-blue text-lg sm:text-xl font-medium tracking-wide">
                            The Team
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-blue">
                        Meet the Team Behind Alkion
                    </h2>

                    <p className="text-accent-blue/70 mt-4 sm:text-lg max-w-3xl mx-auto">
                        Alkion Technologies is a Swedish deep-tech company pushing the boundaries of alkali measurements and alkali chemistry understanding.                    </p>
                </div>

                {/* TEAM GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
                    {teamMembers.map(({ name, role, degree, email, img }) => (
                        <div
                            key={name}
                            className="bg-white/60 backdrop-blur-md rounded-md border border-accent-blue/10 shadow-lg p-8 flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                        >
                            <img
                                src={img}
                                alt={name}
                                className="w-50 h-50 sm:w-60 sm:h-60 rounded-full object-cover shadow-md border-[3px] border-accent-green/40 group-hover:border-accent-green transition-all duration-300"
                            />

                            <h3 className="mt-6 text-xl sm:text-2xl font-bold text-accent-blue">
                                {name}
                            </h3>


                            <p className="text-accent-blue font-medium text-base sm:text-md italic">
                                {degree}
                            </p>

                            <p className="text-accent-green font-medium text-base sm:text-lg">
                                {role}
                            </p>

                            <a
                                href={`mailto:${email}`}
                                className="mt-2 text-accent-blue/70 text-sm sm:text-base hover:text-accent-green underline transition-all"
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
