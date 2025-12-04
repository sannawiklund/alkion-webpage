import React, { useState } from "react";
import { Microscope } from "lucide-react";

// Image Imports
import CESAMParis3 from "../Assets/RNI/CESAMParis3.jpg";
import ChalmersShip from "../Assets/RNI/ChalmersShip2.jpg";
import CortusEnergy from "../Assets/RNI/CortusEnergy.jpg";
import CortusEnergy1 from "../Assets/RNI/CortusEnergy1.jpg";
import CortusEnergy2 from "../Assets/RNI/CortusEnergy2.jpg";
import HunterDG2 from "../Assets/RNI/HunterDG2.jpg";
import LabAssessment from "../Assets/RNI/LabAssessment.jpg";
// import MAXIV4 from "../Assets/RNI/MAX-IV4.jpg";
import PSI4 from "../Assets/RNI/PSI4.jpg";
import ShanghaiLightSource1 from "../Assets/RNI/ShanghaiLightSource1.jpg";

const images = [

    {
        src: CESAMParis3,
        title: "CESAM Combustion Facility in Paris",
        description:
            "Text about the CESAM facility and the research conducted there.",
    },
    {
        src: ChalmersShip,
        title: "Chalmers Research Vessel",
        description:
            "Text about the Chalmers research vessel and its scientific missions.",
    },
    {
        src: CortusEnergy,
        title: "Cortus Energy Project",
        description:
            "Text about the Cortus Energy project and its objectives.",
    },
    {
        src: CortusEnergy1,
        title: "Cortus Energy Project",
        description:
            "Text about the Cortus Energy project and its objectives.",
    },
    {
        src: CortusEnergy2,
        title: "Cortus Energy Project",
        description:
            "Text about the Cortus Energy project and its objectives.",
    },
    {
        src: HunterDG2,
        title: "Hunter DG Facility",
        description:
            "Text about Hunter DG and the research conducted there.",
    }, {
        src: LabAssessment,
        title: "Lab Assessment Setup",
        description:
            "Laboratory setup for assessing material properties under controlled conditions.",
    },
    {
        src: ShanghaiLightSource1,
        title: "Sampling Train Development",
        description:
            "Iterative testing of particle transport efficiency across different flow geometries.",
    },
    {
        src: PSI4,
        title: "PSI Synchrotron Experiments",
        description:
            "Text about the experiments conducted at the PSI synchrotron facility.",
    },
];

export default function RnI() {
    const [selected, setSelected] = useState(null);

    return (
        <div className="min-h-screen py-20 bg-accent-blue">

            <div className="max-w-6xl mx-auto px-4">

                {/*   INTRO SECTION  */}
                <div className="flex items-center gap-3 mb-4">

                    <Microscope className="w-8 h-8 text-accent-green" />
                    <span className="text-accent-beige text-lg font-medium tracking-wide">
                        Research & Innovation
                    </span>

                </div>

                <h2 className="text-4xl sm:text-5xl font-bold text-accent-green leading-tight mb-2">
                    Documenting Our Scientific Journey
                </h2>

                <p className="text-stone-300 text-lg leading-relaxed mb-4 max-w-6xl">
                    This section will contain full documentation of ongoing scientific
                    work — including experimental setups, iterations of prototype
                    development, measurement campaigns, and results from both laboratory
                    and field environments. Below is a visual overview of our research
                    process, with expandable images and descriptions.
                </p>

                {/*   INFO CARDS  */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">

                    {/* Card 1 */}
                    <div className="bg-accent-beige p-6 rounded-md shadow-md">
                        <h3 className="text-lg sm:text-2xl font-bold text-accent-green mb-2">
                            Focus Areas
                        </h3>
                        <ul className="space-y-1 text-accent-dark-blue">
                            <li className="flex items-start gap-2">
                                <span className="inline-block mt-2 w-2 h-2 bg-accent-green rounded-full shadow-md flex-shrink-0"></span>                                <span>High-temperature alkali volatilization</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="inline-block mt-2 w-2 h-2 bg-accent-green rounded-full shadow-md flex-shrink-0"></span>
                                <span>Novel sampling and extraction methods</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="inline-block mt-2  w-2 h-2 bg-accent-green rounded-full shadow-md flex-shrink-0"></span>
                                <span>Alkali aerosol formation and transformation</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="inline-block mt-2 w-2 h-2 bg-accent-green rounded-full shadow-md flex-shrink-0"></span>
                                <span>Real-time spectrometric alkali quantification</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="inline-block mt-2 w-2 h-2 bg-accent-green rounded-full shadow-md flex-shrink-0"></span>
                                <span>Gas/particle partitioning under dynamic conditions</span>
                            </li>
                        </ul>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-accent-beige p-6 rounded-md shadow-md">
                        <h3 className="text-lg sm:text-2xl font-bold text-accent-green mb-2">
                            Where our reasearch happens
                        </h3>
                        <ul className="space-y-1 text-accent-dark-blue">
                            <li className="flex items-start gap-2">
                                <span className="inline-block mt-2 w-2 h-2 bg-accent-green rounded-full shadow-md flex-shrink-0"></span>
                                <span>University labs</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="inline-block mt-2 w-2 h-2 bg-accent-green rounded-full shadow-md flex-shrink-0"></span>
                                <span>Industrial test facilities</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="inline-block mt-2 w-2 h-2 bg-accent-green rounded-full shadow-md flex-shrink-0"></span>
                                <span>Furnaces & full-scale plants</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="inline-block mt-2 w-2 h-2 bg-accent-green rounded-full shadow-md flex-shrink-0"></span>
                                <span>International research campaigns</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/*   IMAGE GRID  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">

                    {images.map((img, i) => (
                        <button
                            key={i}
                            className="group relative overflow-hidden rounded-md shadow-md hover:shadow-xl transition"
                            onClick={() => setSelected(img)}
                        >
                            <img
                                src={img.src}
                                alt={img.title}
                                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                            />

                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-end p-3">
                                <p className="text-white font-semibold">{img.title}</p>
                            </div>

                        </button>
                    ))}
                </div>

                {/*   MODAL / LIGHTBOX */}
                {selected && (
                    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-md max-w-3xl w-full shadow-2xl p-6 relative">

                            {/* Close button */}
                            <button
                                className="absolute top-2 right-2 text-gray-900 hover:text-red-800 text-xl"
                                onClick={() => setSelected(null)}
                            >
                                &times;
                            </button>

                            <img
                                src={selected.src}
                                alt={selected.title}
                                className="w-full max-h-[500px] object-cover rounded-md mb-4"
                            />

                            <h3 className="text-2xl font-bold text-accent-blue mb-2">
                                {selected.title}
                            </h3>
                            <p className="text-accent-dark-blue leading-relaxed">
                                {selected.description}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

