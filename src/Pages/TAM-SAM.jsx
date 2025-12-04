import React from "react";
import BiomassConversion from "../Assets/Other/BiomassConversion.png";
import TAM from "../Assets/Instruments/TAM.png";
import { Microscope } from "lucide-react";

function TAMSAM() {
    return (
        <div className="bg-accent-beige min-h-screen py-20 ">

            <div className="bg-white p-6 rounded-md shadow-md max-w-6xl mx-auto">

                {/*   INTRO SECTION                */}
                <div className="max-w-6xl mx-auto px-6">

                    <div className="flex items-center gap-3 mb-4">
                        <Microscope className="w-8 h-8 text-accent-green" />

                        <span className="text-accent-blue text-lg font-medium tracking-wide">
                            TAM & SAM
                        </span>

                    </div>

                    <h2 className="text-4xl sm:text-5xl font-bold text-accent-blue leading-tight mb-2">
                        Take a closer look at our monitoring instruments
                    </h2>

                    <p className="text-accent-blue leading-tight text-left px-2 mb-5">
                        Alkali concentration and composition from biomass conversion with combined TAM and SAM approach.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto px-6 mb-8 flex flex-col md:flex-row gap-6 items-center ">

                    <div className="md:w-1/2">

                        <img src={BiomassConversion} alt="Biomass Conversion" className="w-full h-auto" />

                    </div>

                    <div className="md:w-1/2 flex flex-col gap-4">

                        <div className="bg-accent-beige p-6 rounded-md shadow-md">

                            <h2 className="text-2xl font-bold mb-3 text-accent-blue">TAM – Total Alkali Monitor</h2>
                            <p className="text-accent-dark-blue">
                                Measures total real-time concentrations of K, Na, Li, etc. in gas & particulate phases. Ideal for dynamic processes with strong temperature dependence.
                            </p>

                        </div>

                        <div className="bg-accent-beige p-6 rounded-md shadow-md">

                            <h2 className="text-2xl font-bold mb-3 text-accent-blue">SAM – Speciation Alkali Monitor</h2>

                            <p className="text-accent-dark-blue">
                                Identifies the chemical composition of alkali aerosols. Essential for understanding corrosion, fouling, emission behavior, and process chemistry.
                            </p>

                            {/* Colour Boxes for SAM */}
                            <div className="mt-4 grid grid-cols-2 gap-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded" style={{ backgroundColor: "#7A0000" }}></div>
                                    <span className="text-sm text-accent-dark-blue">KCl</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded" style={{ backgroundColor: "#001A4D" }}></div>
                                    <span className="text-sm text-accent-dark-blue">NaCl</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded" style={{ backgroundColor: "#C85F00" }}></div>
                                    <span className="text-sm text-accent-dark-blue">KOH</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded" style={{ backgroundColor: "#003399" }}></div>
                                    <span className="text-sm text-accent-dark-blue">NaOH</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded" style={{ backgroundColor: "#FFA64D" }}></div>
                                    <span className="text-sm text-accent-dark-blue">K₂CO₃</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded" style={{ backgroundColor: "#7F8CFF" }}></div>
                                    <span className="text-sm text-accent-dark-blue">Na₂CO₃</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded" style={{ backgroundColor: "#FFE0B2" }}></div>
                                    <span className="text-sm text-accent-dark-blue">K₂SO₄</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded" style={{ backgroundColor: "#D6D9FF" }}></div>
                                    <span className="text-sm text-accent-dark-blue">Na₂SO₄</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default TAMSAM;