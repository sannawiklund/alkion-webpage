import React, { useState } from "react";
import { Microscope } from "lucide-react";

// Image Imports
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

export default function RnI() {
    const [selected, setSelected] = useState(null);

    return (
        <section className="min-h-screen py-20 bg-accent-blue">
            <div className="max-w-6xl mx-auto px-4">

                {/* ---- Centered Intro Section ---- */}
                <div className="text-center max-w-4xl mx-auto mb-10">

                    <div className="flex justify-center items-center gap-3 mb-4">
                        <Microscope className="w-8 h-8 text-accent-green" />
                        <span className="text-accent-beige text-lg font-medium tracking-wide">
                            Research & Innovation
                        </span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
                        Documenting Our Scientific Journey
                    </h2>

                    <p className="text-accent-beige/90 text-lg ">
                        A visual archive of experimental work, prototype development, field installations,
                        and analytical research. Showcasing the evolution of our alkali measurement
                        technologies from laboratory testing to full-scale deployment.
                    </p>
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">

                    <div className="bg-white/10 border border-white/20 backdrop-blur-lg p-6 rounded-md shadow-lg">
                        <h3 className="text-xl sm:text-2xl font-semibold text-accent-green mb-3">
                            Focus Areas
                        </h3>
                        <ul className="space-y-2 text-accent-beige">
                            <li className="flex gap-2 items-start"><span className="w-2 h-2 bg-accent-green rounded-full mt-2"></span>High-temperature alkali volatilization</li>
                            <li className="flex gap-2 items-start"><span className="w-2 h-2 bg-accent-green rounded-full mt-2"></span>Novel sampling and extraction methods</li>
                            <li className="flex gap-2 items-start"><span className="w-2 h-2 bg-accent-green rounded-full mt-2"></span>Alkali aerosol formation and transformation</li>
                            <li className="flex gap-2 items-start"><span className="w-2 h-2 bg-accent-green rounded-full mt-2"></span>Real-time spectrometric alkali quantification</li>
                            <li className="flex gap-2 items-start"><span className="w-2 h-2 bg-accent-green rounded-full mt-2"></span>Gas/particle phase transitions under dynamic conditions</li>
                        </ul>
                    </div>

                    <div className="bg-white/10 border border-white/20 backdrop-blur-lg p-6 rounded-xl shadow-lg">
                        <h3 className="text-xl sm:text-2xl font-semibold text-accent-green mb-3">
                            Where Our Research Happens
                        </h3>
                        <ul className="space-y-2 text-accent-beige">
                            <li className="flex gap-2 items-start"><span className="w-2 h-2 bg-accent-green rounded-full mt-2"></span>University laboratories</li>
                            <li className="flex gap-2 items-start"><span className="w-2 h-2 bg-accent-green rounded-full mt-2"></span>Industrial test facilities</li>
                            <li className="flex gap-2 items-start"><span className="w-2 h-2 bg-accent-green rounded-full mt-2"></span>Full-scale furnaces and power plants</li>
                            <li className="flex gap-2 items-start"><span className="w-2 h-2 bg-accent-green rounded-full mt-2"></span>International research collaborations</li>
                        </ul>
                    </div>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {images.map((img, i) => (
                        <button
                            key={i}
                            onClick={() => setSelected(img)}
                            className="group relative overflow-hidden rounded-md shadow-lg hover:shadow-2xl transition-all"
                        >
                            <img
                                src={img.src}
                                alt={img.title}
                                className="w-full h-72 object-cover group-hover:scale-105 duration-300"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-3">
                                <p className="text-white font-medium">{img.title}</p>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Modal */}
                {selected && (
                    <div 
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                        onClick={() => setSelected(null)}
                    >
                        <div 
                            className="bg-white rounded-xl shadow-2xl max-w-3xl w-full p-6 relative"
                            onClick={(e) => e.stopPropagation()}
                        >

                            <button
                                className="absolute top-2 right-3 text-gray-900 hover:text-red-600 text-md font-extrabold"
                                onClick={() => setSelected(null)}
                            >
                                ✕
                            </button>

                            <img
                                src={selected.src}
                                alt={selected.title}
                                className="w-full max-h-[450px] object-cover rounded-lg mb-4"
                            />

                            <h3 className="text-2xl font-bold text-accent-blue mb-2">
                                {selected.title}
                            </h3>

                            <p className="text-accent-dark-blue leading-relaxed text-lg">
                                {selected.description}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
