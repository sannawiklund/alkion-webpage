import React from "react";
import DanGell from "../Assets/Team/DanGell.png";
import ViktorAndersson from "../Assets/Team/ViktorAndersson.jpg";
import XiangruiKong from "../Assets/Team/XiangruiKong.png";

function Team() {
    const teamMembers = [
        {
            name: "Dan Gell",
            role: "CEO",
            email: "dg@alkiontech.com",
            img: DanGell,
        },
        {
            name: "Viktor Andersson",
            role: "CTO",
            email: "va@alkiontech.com",
            img: ViktorAndersson,
        },
        {
            name: "Xiangrui Kong",
            role: "CSO",
            email: "xk@alkiontech.com",
            img: XiangruiKong,
        },
    ];

    return (
        <section className="py-16 bg-accent-blue Team">
            <div className="mx-auto max-w-5xl px-6 text-center">

                <h2 className="text-4xl sm:text-5xl font-semibold text-accent-green mb-5">
                    Meet the minds behind Alkion Technologies
                </h2>

                <h3 className="text-base sm:text-2xl text-accent-beige mb-10 w-[90%] sm:w-[80%] justify-center mx-auto">
                    Alkion Technologies is a Swedish deep-tech company pushing the boundaries of alkali measurements and alkali chemistry understanding.
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                    {teamMembers.map(({ name, role, email, img }) => (
                        <article
                            key={name}
                            className="bg-white/20 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/30 transition-transform hover:scale-105"
                        >
                            <img
                                src={img}
                                alt={name}
                                className="w-40 h-40 sm:w-60 sm:h-60 mx-auto rounded-full object-cover border-2 border-transparent hover:border-[#3daf36] transition-colors shadow-lg"
                            />

                            <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-accent-green">{name}</h3>
                            <p className="text-neutral-100 font-semibold text-base sm:text-lg">{role}</p>
                            <a
                                href={`mailto:${email}`}
                                className="text-accent-beige underline inline-block hover:text-[#3daf36]"
                            >
                                {email}
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Team;
