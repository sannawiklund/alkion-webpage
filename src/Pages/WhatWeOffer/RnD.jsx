import React, { useState } from "react";
import { Microscope, X } from "lucide-react";

import CESAMParis3 from "../../Assets/RND/CESAMParis3.jpg";
import ChalmersShip from "../../Assets/RND/ChalmersShip2.jpg";
import CortusEnergy from "../../Assets/RND/CortusEnergy.jpg";
import CortusEnergy1 from "../../Assets/RND/CortusEnergy1.jpg";
import CortusEnergy2 from "../../Assets/RND/CortusEnergy2.jpg";
import HunterDG2 from "../../Assets/RND/HunterDG2.jpg";
import LabAssessment from "../../Assets/RND/LabAssessment.jpg";
import PSI4 from "../../Assets/RND/PSI4.jpg";
import ShanghaiLightSource1 from "../../Assets/RND/ShanghaiLightSource1.jpg";

const images = [
    { src: CESAMParis3, title: "EU CESAM chamber (Paris)", description: "Research involving high-temperature alkali conversion and process validation." },
    { src: ChalmersShip, title: "Chalmers Research Vessel", description: "Marine emissions monitoring and operational instrumentation testing." },
    { src: CortusEnergy, title: "Cortus Energy — Gasification Platform", description: "Real-Time monitoring during thermochemical conversion of biomass feedstocks." },
    { src: CortusEnergy1, title: "Cortus Energy Campaign", description: "Instrumentation calibration and prototype deployment in industrial scale environments." },
    { src: CortusEnergy2, title: "Cortus Energy On-Site Setup", description: "Sampling train integration and mobile measurement platform testing." },
    { src: HunterDG2, title: "1,300 MW power plant measurements", description: "Co-firing test campaign at commercial plant in full operation." },
    { src: LabAssessment, title: "Laboratory Characterization", description: "Parameter testing and simulation of alkali volatilization behavior." },
    { src: ShanghaiLightSource1, title: "Synchrotron Sample Processing", description: "Analysis of alkali distributions using advanced spectroscopy techniques." },
    { src: PSI4, title: "Swiss Light Source - Synchrotron Experiments", description: "A state-of-the-art endstation at the In Situ Spectroscopy beamline for investigating alkali-induced surface catalysis and surface ionization processes." },
];

export default function RnD() {
    const [selected, setSelected] = useState(null);

    const focusAreas = [
        "High-temperature alkali volatilization",
        "Alkali aerosol formation and transformation",
        "Gas-to-particle partitioning under dynamic conditions",
        "Real-time alkali speciation and quantification",
        "Novel sampling and extraction methods",
    ];

    const researchLocations = [
        "Academic labs",
        "Industrial test sites",
        "Full-scale commercial plants",
        "International field campaigns",
    ];

    return (
        <section
            className="pt-20 sm:pt-0 bg-accent-beige"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-10">

                    <div className="flex justify-center items-center gap-3 mb-4">
                        <Microscope className="w-7 h-7 text-accent-green" />
                        <span className="text-accent-green text-sm font-semibold uppercase tracking-widest">
                            Research & Development
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl font-extrabold text-accent-blue tracking-tight mb-5">
                        Alkion as a Research Partner
                    </h2>

                    <p className="text-accent-blue text-base sm:text-lg leading-relaxed text-pretty">
                        Born from decades of research at the University of Gothenburg and Chalmers University of Technology. We actively participate in national and international research projects.
                    </p>

                    <p className="text-accent-blue text-base sm:text-lg leading-relaxed text-pretty font-bold">
                        If you’re looking for a research partner or expert contributor, we can support your project with scientific expertise and advanced measurement capabilities.                    </p>
                </div>

                {/* Info Cards  */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10">

                    {/* Card 1: Focus Areas */}
                    <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8 border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                        <h3 className="text-lg sm:text-xl font-bold text-accent-blue mb-4 border-b pb-2 border-accent-blue/10">
                            R&D Focus Areas
                        </h3>
                        <ul className="space-y-3 text-accent-blue text-sm sm:text-base">
                            {focusAreas.map((area, idx) => (
                                <li key={idx} className="flex gap-3 items-start">
                                    <svg className="w-5 h-5 text-accent-green mt-0.5 sm:mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>{area}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Card 2: Where Research Happens */}
                    <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8 border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                        <h3 className="text-lg sm:text-xl font-bold text-accent-blue mb-4 border-b pb-2 border-accent-blue/10">
                            Where Our Research Happens
                        </h3>
                        <ul className="space-y-3 text-accent-blue text-sm sm:text-base">
                            {researchLocations.map((location, idx) => (
                                <li key={idx} className="flex gap-3 items-start">
                                    <svg className="w-5 h-5 text-accent-green mt-0.5 sm:mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>{location}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* ---- Latest Research & Publications Section ---- */}
                <div className="max-w-4xl mx-auto pt-5 pb-16">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-accent-blue tracking-tight mb-6 text-center border-b pb-4">
                        Latest Research & Publications
                    </h2>
                    <p className="text-accent-blue text-base sm:text-lg leading-relaxed text-pretty mb-8 text-center max-w-3xl mx-auto ">
                        We continuously develop and refine surface ionization measurement methods while advancing the fundamental understanding of alkali chemistry under process conditions. 
                        Our research addresses alkali uptake, release, transformation, and transport in complex and dynamic environments, with a strong emphasis on measurement accuracy under real process conditions.
                    </p>

                    <div className="space-y-6 sm:space-y-8">
                        {/* Publication 1 */}
                        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100">
                            <h4 className="text-lg sm:text-xl font-semibold text-accent-blue mb-2">
                                Alkali Uptake, Release, and Speciation in Fluidized Beds Using Oxygen Carriers
                            </h4>
                            <p className="text-sm italic text-accent-blue/80 mb-3">
                                Viktor Andersson, Jan B. C. Pettersson, Thomas Allgurén, Pavleta Knutsson and Klas Andersson. Energy & Fuels 39(6), 3280–3294 (2025).
                            </p>
                            <p className="text-sm text-accent-green font-bold">Highlight:</p>
                            <p className="text-accent-blue/90 text-sm">
                                Demonstrates SID and TMSI alkali diagnostics applied in fluidized and fixed beds to quantify how oxygen-carrier materials capture and release alkali under real process conditions.
                            </p>
                        </div>

                        {/* Publication 2 */}
                        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100">
                            <h4 className="text-lg sm:text-xl font-semibold text-accent-blue mb-2">
                                Gaseous Alkali Interactions with Ilmenite, Manganese Oxide and Calcium Manganite under Chemical Looping Combustion Conditions
                            </h4>
                            <p className="text-sm italic text-accent-blue/80 mb-3">
                                Viktor Andersson, Xiangrui Kong, Henrik Leion, Tobias Mattisson, Jan B. C. Pettersson. Fuel Processing Technology 254, 108029 (2023).
                            </p>
                            <p className="text-sm text-accent-green font-bold">Highlight:</p>
                            <p className="text-accent-blue/90 text-sm">
                                Maps how different oxygen-carrier materials interact with gaseous K and Na compounds in a CLC pilot, guiding material choices for alkali-tolerant processes.
                            </p>
                        </div>

                        {/* Publication 3 */}
                        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100">
                            <h4 className="text-lg sm:text-xl font-semibold text-accent-blue mb-2">
                                Online Speciation of Alkali Compounds by Temperature-Modulated Surface Ionization: Method Development and Application to Thermal Conversion
                            </h4>
                            <p className="text-sm italic text-accent-blue/80 mb-3">
                                Viktor Andersson, Xiangrui Kong, Jan B. C. Pettersson. Energy & Fuels 38(3), 2046–2057 (2024).
                            </p>
                            <p className="text-sm text-accent-green font-bold">Highlight:</p>
                            <p className="text-accent-blue/90 text-sm">
                                Introduces temperature-modulated surface ionization (TMSI), enabling real-time discrimination between different alkali species using SID technology.
                            </p>
                        </div>

                        {/* Publication 4 */}
                        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100">
                            <h4 className="text-lg sm:text-xl font-semibold text-accent-blue mb-2">
                                A Surface-Promoted Redox Reaction Occurs Spontaneously on Solvating Inorganic Aerosol Surfaces
                            </h4>
                            <p className="text-sm italic text-accent-blue/80 mb-3">
                                Xiangrui Kong, Dimitri Castarède, Erik S. Thomson, Anthony Boucly, Luca Artiglia, Markus Ammann, Ivan Gladich, Jan B. C. Pettersson. Science 374(6568), 747–752 (2021).
                            </p>
                            <p className="text-sm text-accent-green font-bold">Highlight:</p>
                            <p className="text-accent-blue/90 text-sm">
                                Reveals unexpected redox chemistry on aerosol surfaces, deepening the fundamental understanding of ion–surface interactions that underpin surface-ionization diagnostics.
                            </p>
                        </div>

                        {/* Publication 5 */}
                        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100">
                            <h4 className="text-lg sm:text-xl font-semibold text-accent-blue mb-2">
                                Atomic and Molecular Ions in Atmospheric Chemistry: Interfacial Reactivity, Emerging Mechanisms, and Future Perspectives
                            </h4>
                            <p className="text-sm italic text-accent-blue/80 mb-3">
                                Xiangrui Kong, Markus Ammann, Christian George, Daniel Knopf. Journal of Geophysical Research: Atmospheres 130, e2025JD044379 (2025).
                            </p>
                            <p className="text-sm text-accent-green font-bold">Highlight:</p>
                            <p className="text-accent-blue/90 text-sm">
                                Provides a broad conceptual framework for how atomic and molecular ions drive interfacial chemistry, connecting atmospheric science with surface-ionization concepts.
                            </p>
                        </div>

                        {/* Publication 6 */}
                        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100">
                            <h4 className="text-lg sm:text-xl font-semibold text-accent-blue mb-2">
                                Alkali Monitoring of Industrial Process Gas by Surface Ionization—Calibration, Assessment, and Comparison to In Situ Laser Diagnostics
                            </h4>
                            <p className="text-sm italic text-accent-blue/80 mb-3">
                                Dan Gall, Jan Viljanen, Ivan Gogolev, Thomas Allgurén, Klas Andersson. Energy & Fuels 35(24), 20160–20171 (2021).
                            </p>
                            <p className="text-sm text-accent-green font-bold">Highlight:</p>
                            <p className="text-accent-blue/90 text-sm">
                                Rigorously calibrates an industrial SID and compares it to laser-based CPFAAS, showing that compact SI instruments can deliver reliable alkali monitoring in real process gas.
                            </p>
                        </div>

                        {/* Publication 7 */}
                        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100">
                            <h4 className="text-lg sm:text-xl font-semibold text-accent-blue mb-2">
                                A New Technique for Real-Time Measurements of Potassium and Sodium Aerosols Based on Field-Reversal Surface Ionization
                            </h4>
                            <p className="text-sm italic text-accent-blue/80 mb-3">
                                Dan Gall, Charlotta Nejman, Thomas Allgurén, Klas Andersson, Jan B. C. Pettersson. Measurement Science and Technology 32(7), 075802 (2021).
                            </p>
                            <p className="text-sm text-accent-green font-bold">Highlight:</p>
                            <p className="text-accent-blue/90 text-sm">
                                Describes the field-reversal SID (FR-SID), achieving millisecond-scale, species-resolved measurements of K and Na aerosols for detailed alkali chemistry studies and control.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pb-16 sm:pb-20">
                    {images.map((img, i) => (
                        <button
                            key={i}
                            onClick={() => setSelected(img)}
                            className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-accent-green/30"
                        >
                            <img
                                src={img.src}
                                alt={img.title}
                                className="w-full h-56 sm:h-64 object-cover group-hover:scale-[1.03] transition-transform duration-500"
                            />
                        </button>
                    ))}
                </div>


                {/* Modal */}
                {selected && (
                    <div
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                        onClick={() => setSelected(null)}
                    >
                        <div
                            className="bg-white rounded-xl shadow-2xl max-w-4xl w-full p-4 sm:p-6 relative flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >

                            <button
                                className="absolute top-2 right-2 p-2 text-accent-blue hover:text-red-600 transition z-10"
                                onClick={() => setSelected(null)}
                                aria-label="Close image viewer"
                            >
                                <X className="h-6 w-6" />
                            </button>

                            <div className="w-full overflow-hidden rounded-lg mb-4 sm:mb-6 shadow-md">
                                <img
                                    src={selected.src}
                                    alt={selected.title}
                                    className="w-full max-h-[60vh] sm:max-h-[70vh] object-contain"
                                />
                            </div>

                            <div className="text-left">
                                <h3 className="text-xl sm:text-2xl font-bold text-accent-blue mb-2">
                                    {selected.title}
                                </h3>

                                <p className="text-accent-blue/80 leading-relaxed text-base sm:text-lg">
                                    {selected.description}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}