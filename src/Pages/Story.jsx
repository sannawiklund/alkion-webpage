import React from "react";
import { History } from "lucide-react";

function Story() {
    const timelineData = [
        {
            period: "Late 1990s",
            title: "The Beginning",
            content: "The story of Alkion's instruments starts in the late 1990s in Jan B. C. Pettersson's atmospheric science group at the University of Gothenburg. The group was interested in how alkali metals like potassium and sodium move between gas, particle, and surface phases in real combustion systems and in the atmosphere. \n\nTo answer those questions, they began adapting surface ionization (SI), a technique where alkali atoms are ionized on a hot metal surface for aerosol and combustion measurements."
        },
        {
            period: "2002-2004",
            title: "Alkali aerosol mass spectrometers (Alkali-MS)",
            content: "The first generation instruments were particle-beam mass spectrometers for single-particle alkali analysis. Around 2002-2004 the group developed a mobile aerosol mass spectrometer that focused particles into vacuum, hit them on a hot platinum surface, and analyzed the resulting ions by mass spectrometry. \n\n This SI-based AMS allowed online chemical analysis of individual alkali-containing aerosol particles, providing the alkali content and composition for each particle in real time. It was deployed in Gothenburg's urban air, where it could distinguish sea-salt particles from biomass-burning aerosol based on Na/K ratios. These studies showed both the scientific value of real-time alkali measurements and the robustness of SI for atmospheric and combustion aerosols."
        },
        {
            period: "Mid-2000s",
            title: "From Total Alkali to Online Speciation (toward TAM & SAM)",
            content: (
                <>
                    <p>As interest grew from biomass and energy researchers, the group began developing simpler, compact instruments that kept the sensitivity of SI but were easier to deploy in hot, dirty process environments. This led to the Surface Ionization Detector (SID): an ambient-pressure alkali monitor built around a heated platinum filament placed directly in an extracted gas stream. SIDs were then coupled to different reactors and processes:</p>
                    <ul className="mt-3 ml-6 space-y-2 list-disc">
                        <li>Fixed-bed and fluidized-bed reactors to study capture of vapor-phase KCl and interactions with bed materials and additives.</li>
                        <li>Thermogravimetric analysis (TGA) systems, creating TGA–SID methods that record alkali release and sample mass loss simultaneously during biomass conversion or catalyst operation.</li>
                        <li>Chemical-looping and biomass gasification rigs, including full-scale or industrial-scale gasifier start-up and operation, where SIDs tracked alkali metals continuously in the product gas.</li>
                    </ul>
                    <br />
                </>
            )
        },
        {
            period: "Late 2010s",
            title: "Working towards a Mature Measurement Platform",
            content: "By the late 2010s, Pettersson's group had an ecosystem of SI-based instruments (alkali aerosol mass spectrometers and SIDs) that were being used for everything from ambient air studies to industrial biomass conversion. Dan Gall's 2018 PhD thesis at the University of Gothenburg explicitly focused on developing and applying online SI-based methods for tar and alkali metals in biomass thermochemical conversion, consolidating this work into a mature measurement platform."
        },
        {
            period: "2024",
            title: "From total alkali to online speciation (TAM & SAM)",
            content: (
                <>
                    <p>The next step was not just to measure how much alkali was present, but in what chemical form. Building on the SID concept, the group developed temperature-modulated surface ionization (TMSI): by carefully stepping the filament temperature, it becomes possible to separate signals from chlorides, hydroxides, carbonates, and sulfates of potassium and sodium.</p>
                    <br />
                    <p>A 2024 Energy & Fuels paper led by Viktor Andersson, with Xiangrui Kong and Jan Pettersson, describes this online speciation method for K and Na compounds in high-temperature processes. The instrument is explicitly presented as a further development of the simple, cost-effective SID used in combustion and gasification research. </p>
                    <br />
                    <p>In parallel, SIDs continued to be refined as robust, highly sensitive total alkali monitors for industrial reactors, fluidized beds, and TGA setups. Together, these two lines of development, i.e., total alkali detection and temperature-modulated speciation, form the scientific backbone of what has become Alkion's TAM (Total Alkali Monitor) and SAM (Speciation Alkali Monitor).</p>

                </>
            )
        },
        {
            period: "Today",
            title: "Alkion Technologies",
            content: (
                <>
                    <p>Over roughly two decades, the University of Gothenburg atmospheric science group built a unique toolbox of surface-ionization-based alkali instruments, applied in everything from urban air and sea-salt aerosols to biomass boilers, chemical-looping reactors, and industrial gasifiers. </p>
                    <br />
                    <p>Alkion's founders, i.e., who were deeply involved in this work as PhD students and researchers, created Alkion Technologies to translate that lineage of research instrumentation into turnkey products. TAM and SAM are direct descendants of the alkali aerosol mass spectrometers and SIDs developed at the University of Gothenburg and Chalmers University of Technology: they keep the same physical principles and sensitivity, but are engineered as compact, robust systems for routine use in demanding industrial and scientific environments. </p>
                </>
            )
        }
    ];

    return (
        <section className="relative flex items-center justify-center py-8 sm:pb-10 bg-accent-beige min-h-screen">
            <div className="relative z-10 mx-auto max-w-6xl pb-4 sm:pb-6 lg:pb-10 sm:pb-10">

                {/* HEADER */}
                <div className="text-center mb-8 sm:mb-8">
                    <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                        <History className="w-6 h-6 sm:w-8 sm:h-8 text-accent-green" />
                        <span className="text-accent-blue text-base sm:text-lg font-medium tracking-wide">
                            Our Story
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-blue leading-tight px-2">
                        The History Behind Alkion Technologies
                    </h2>
                </div>

                {/* TIMELINE */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent-green/30 hidden md:block"></div>

                    <div className="space-y-8 sm:space-y-12">
                        {timelineData.map((item, index) => (
                            <div key={index} className="relative">
                                {/* Timeline dot */}
                                <div className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-accent-green border-4 border-accent-beige hidden md:block"></div>

                                {/* Content card */}
                                <div className="md:ml-20 bg-white/80 backdrop-blur-sm shadow-lg rounded-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                                        <span className="inline-block px-3 sm:px-4 py-1 bg-accent-green/10 text-accent-green font-semibold rounded-full text-xs sm:text-sm mb-2 sm:mb-0 w-fit">
                                            {item.period}
                                        </span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-accent-blue mb-3">
                                        {item.title}
                                    </h3>
                                    <div className="text-sm sm:text-base text-accent-blue/80 leading-relaxed whitespace-pre-line">
                                        {item.content}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Story;