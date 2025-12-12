import React, { useState } from "react";
import { Microscope } from "lucide-react";

import CESAMParis3 from "../../Assets/RNI/CESAMParis3.jpg";
import ChalmersShip from "../../Assets/RNI/ChalmersShip2.jpg";
import CortusEnergy from "../../Assets/RNI/CortusEnergy.jpg";
import CortusEnergy1 from "../../Assets/RNI/CortusEnergy1.jpg";
import CortusEnergy2 from "../../Assets/RNI/CortusEnergy2.jpg";
import HunterDG2 from "../../Assets/RNI/HunterDG2.jpg";
import LabAssessment from "../../Assets/RNI/LabAssessment.jpg";
import PSI4 from "../../Assets/RNI/PSI4.jpg";
import ShanghaiLightSource1 from "../../Assets/RNI/ShanghaiLightSource1.jpg";

const images = [
    { src: CESAMParis3, title: "CESAM Combustion Facility — Paris", description: "Research involving high-temperature alkali conversion and process validation." },
    { src: ChalmersShip, title: "Chalmers Research Vessel", description: "Marine emissions monitoring and operational instrumentation testing." },
    { src: CortusEnergy, title: "Cortus Energy — Gasification Platform", description: "Real-time monitoring during thermochemical conversion of biomass feedstocks." },
    { src: CortusEnergy1, title: "Cortus Energy Campaign", description: "Instrumentation calibration and prototype deployment in industrial scale environments." },
    { src: CortusEnergy2, title: "Cortus Energy On-Site Setup", description: "Sampling train integration and mobile measurement platform testing." },
    { src: HunterDG2, title: "Hunter DG Field Trials", description: "Pilot-scale alkali aerosol monitoring in dynamic combustion environments." },
    { src: LabAssessment, title: "Laboratory Characterization", description: "Parameter testing and simulation of alkali volatilization behavior." },
    { src: ShanghaiLightSource1, title: "Synchrotron Sample Processing", description: "Analysis of alkali distributions using advanced spectroscopy techniques." },
    { src: PSI4, title: "PSI — Synchrotron Experiments", description: "Chemical mapping of particulate alkali species in high-resolution environments." },
];

export default function RnD() {
    const [selected, setSelected] = useState(null);

    const focusAreas = [
        "High-temperature alkali volatilization",
        "Alkali aerosol formation and transformation",
        "Gas/particle partitioning under dynamic conditions",
        "Real-time spectrometric alkali quantification",
        "Novel sampling and extraction methods",
    ];

    const researchLocations = [
        "Academic labs",
        "Industrial test sites",
        "Full-scale operational plants",
        "International field campaigns",
    ];

    return (
        <section 
            className=" pb-14 sm:pb-20 bg-accent-beige"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* ---- Centered Intro Section ---- */}
                <div className="text-center max-w-4xl mx-auto mb-10">

                    <div className="flex justify-center items-center gap-3 mb-4">
                        <Microscope className="w-7 h-7 text-accent-green" />
                        <span className="text-accent-green text-sm font-semibold uppercase tracking-widest">
                            Research & Development
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl font-extrabold text-accent-blue tracking-tight mb-5">
                        Documenting Our Scientific Journey
                    </h2>

                    <p className="text-accent-blue text-base sm:text-xl leading-relaxed text-pretty">
                        Born from decades of research at the University of Gothenburg and Chalmers University of Technology. We actively participate in national and international research projects. If you’re looking for a research partner or expert contributor, we can support your project with scientific expertise and advanced measurement capabilities.
                        <br/><br/>
                        A visual archive of experimental work, prototype development, field installations,
                        and analytical research. Showcasing the evolution of our alkali measurement
                        technologies from laboratory testing to full-scale deployment.
                    </p>
                </div>

                {/* Info Cards  */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

                    {/* Card 1: Focus Areas */}
                    <div className="bg-white rounded-xl shadow-2xl p-4 sm:p-6 lg:p-8 transition-shadow hover:shadow-xl">
                        <h3 className="text-2xl font-bold text-accent-blue mb-4 border-b pb-2 border-accent-blue/10">
                            R&DI Focus Areas
                        </h3>
                        <ul className="space-y-3 text-accent-blue text-base sm:text-lg">
                            {focusAreas.map((area, idx) => (
                                <li key={idx} className="flex gap-3 items-start">
                                    <svg className="w-5 h-5 text-accent-green mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>{area}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Card 2: Where Research Happens */}
                    <div className="bg-white rounded-xl shadow-2xl p-4 sm:p-6 lg:p-8 transition-shadow hover:shadow-xl">
                        <h3 className="text-xl sm:text-2xl font-bold text-accent-blue mb-4 border-b pb-2 border-accent-blue/10">
                            Where Our Research Happens
                        </h3>
                        <ul className="space-y-3 text-accent-blue text-base sm:text-lg">
                            {researchLocations.map((location, idx) => (
                                <li key={idx} className="flex gap-3 items-start">
                                    <svg className="w-5 h-5 text-accent-green mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>{location}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {images.map((img, i) => (
                        <button
                            key={i}
                            onClick={() => setSelected(img)}
                            className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-accent-green/30"
                        >
                            <img
                                src={img.src}
                                alt={img.title}
                                className="w-full h-44 sm:h-64 object-cover group-hover:scale-[1.03] duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 transition-opacity flex items-end p-4">
                                <p className="text-white font-semibold text-lg">{img.title}</p>
                            </div>
                        </button>
                    ))}
                </div>


                {/* Modal */}
                {selected && (
                    <div 
                        className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                        onClick={() => setSelected(null)}
                    >
                        <div 
                            className="bg-white rounded-xl shadow-2xl max-w-4xl w-full p-4 sm:p-8 relative"
                            onClick={(e) => e.stopPropagation()}
                        >

                            <button
                                className="absolute top-0 right-0 p-2 text-accent-blue hover:text-red-600 transition"
                                onClick={() => setSelected(null)}
                                aria-label="Stäng bild"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <img
                                src={selected.src}
                                alt={selected.title}
                                className="w-full max-h-[70vh] sm:max-h-[500px] object-cover rounded-lg mb-6 shadow-md"
                            />

                            <h3 className="text-2xl sm:text-3xl font-bold text-accent-blue mb-2">
                                {selected.title}
                            </h3>

                            <p className="text-accent-blue/80 leading-relaxed text-base sm:text-xl">
                                {selected.description}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}