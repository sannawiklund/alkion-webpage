import React from "react";
import Chalmers from "../Assets/Other/Chalmers.png";
import GU from "../Assets/Other/Gu.png";
import ViktorAndersson from "../Assets/Team/ViktorAndersson.jpg";
import DanGell from "../Assets/Team/DanGell.png";
import XiangruiKong from "../Assets/Team/XiangruiKong.png";

function Team() {
    const teamMembers = [
        {
            name: "Dan Gell",
            role: "CEO",
            email: "dangell@alkiontechnologies.com",
            img: DanGell,
        },
        {
            name: "Viktor Andersson",
            role: "CTO",
            email: "viktorandersson@alkiontechnologies.com",
            img: ViktorAndersson,
        },
        {
            name: "Xiangrui Kong",
            role: "CSO",
            email: "xiangruikong@alkiontechnologies.com",
            img: XiangruiKong,
        },
    ];

    const academicPartners = [
        {
            name: "Chalmers University of Technology",
            img: Chalmers,
        },
        {
            name: "University of Gothenburg",
            img: GU,
        },
    ];

    return (
        <section className="py-16 bg-gray-900 Team">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-normal text-neutral-50 mb-2">
                        The team behind
                    </h2>
                    <h3 className="text-4xl font-medium text-neutral-50">
                        Alkion Technologies
                    </h3>
                </div>

                {/* Team Members */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-items-center mb-16">
                    {teamMembers.map((member) => (
                        <article
                            key={member.name}
                            className="group text-center transition-all duration-300"
                        >
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-60 h-60 rounded-full mx-auto object-cover border-2 border-transparent group-hover:border-[#3daf36] transition-all duration-300"
                            />
                            <p className="mt-4 text-neutral-200">{member.role}</p>
                            <h4 className="mt-1 text-xl font-semibold text-neutral-50 group-hover:text-[#3daf36] transition-all duration-300">
                                {member.name}
                            </h4>
                            <a
                                href={`mailto:${member.email}`}
                                className="text-neutral-200 underline mt-1 block transition-colors duration-300 hover:text-[#3daf36]"
                            >
                                {member.email}
                            </a>
                        </article>
                    ))}
                </div>

                {/* Academic Partners */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-medium text-neutral-50">
                        Academic Partners
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center max-w-sm mx-auto">
                    {academicPartners.map((partner) => (
                        <article key={partner.name} className="text-center">
                            <img
                                src={partner.img}
                                alt={partner.name}
                                className="w-40 h-40 rounded-full mx-auto object-contain bg-neutral-50 border-2 border-transparent transition-all duration-300 hover:border-[#3daf36]"
                            />
                            <h4 className="mt-4 text-xl font-medium text-neutral-50">
                                {partner.name}
                            </h4>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Team;
