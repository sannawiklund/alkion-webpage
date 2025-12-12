import React from "react";
import BiomassConversion from "../../Assets/Other/BiomassConversion.png";
import { Microscope } from "lucide-react";

function TAMSAM() {
    return (
        <div className="pt-20 px-4">

            <div className="bg-white/10 border border-white/20 backdrop-blur-lg p-4 sm:p-6 rounded-md shadow-lg max-w-6xl mx-auto">

                {/*   INTRO SECTION                */}

                <div className="text-center mb-4 sm:mb-6">
                    <div className="flex items-center justify-center gap-2 sm:gap-3 mt-4">
                        <Microscope className="w-6 h-6 sm:w-8 sm:h-8 text-accent-green" />

                        <span className="text-accent-beige text-base sm:text-lg font-medium tracking-wide">
                            TAM & SAM
                        </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent-beige leading-tight px-2">
                        Take a closer look at our monitoring instruments
                    </h2>

                    <p className="m-2 text-accent-green text-base sm:text-lg max-w-4xl mx-auto leading-relaxed font-semibold px-2">
                        Alkali concentration and speciation from biomass conversion using the combined TAM + SAM platform
                    </p>
                </div>

                <div className="max-w-6xl mx-auto mb-6 sm:mb-8 flex flex-col md:flex-row gap-4 sm:gap-6 items-center bg-white p-4 sm:p-6 rounded-md shadow-md">

                    <div className="w-full md:w-1/2">

                        <img src={BiomassConversion} alt="Biomass Conversion" className="w-full h-auto rounded" />

                    </div>

                    <div className="w-full md:w-1/2 flex flex-col gap-4">

                        {/* TAM - Card */}
                        <div className="bg-accent-green/50 p-4 sm:p-6 rounded-md shadow-xl">

                            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-accent-blue">TAM – Total Alkali Monitor</h2>
                            <p className="text-sm sm:text-base text-accent-dark-blue">
                                Measures total real-time concentrations of K, Na, Li, etc. in gas & particulate phases. Ideal for dynamic processes with strong temperature dependence.
                            </p>

                        </div>

                        {/* SAM - Card */}
                        <div className="bg-accent-green/50 p-4 sm:p-6 rounded-md shadow-xl">

                            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-accent-blue">SAM – Speciation Alkali Monitor</h2>

                            <p className="text-sm sm:text-base text-accent-dark-blue">
                                Identifies the chemical composition of alkali aerosols. Essential for understanding corrosion, fouling, emission behavior, and process chemistry.
                            </p>

                            {/* Colour Boxes for SAM */}
                            <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2 sm:gap-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded flex-shrink-0" style={{ backgroundColor: "#7A0000" }}></div>
                                    <span className="text-xs sm:text-sm text-accent-dark-blue">KCl</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded flex-shrink-0" style={{ backgroundColor: "#001A4D" }}></div>
                                    <span className="text-xs sm:text-sm text-accent-dark-blue">NaCl</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded flex-shrink-0" style={{ backgroundColor: "#C85F00" }}></div>
                                    <span className="text-xs sm:text-sm text-accent-dark-blue">KOH</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded flex-shrink-0" style={{ backgroundColor: "#003399" }}></div>
                                    <span className="text-xs sm:text-sm text-accent-dark-blue">NaOH</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded flex-shrink-0" style={{ backgroundColor: "#FFA64D" }}></div>
                                    <span className="text-xs sm:text-sm text-accent-dark-blue">K₂CO₃</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded flex-shrink-0" style={{ backgroundColor: "#7F8CFF" }}></div>
                                    <span className="text-xs sm:text-sm text-accent-dark-blue">Na₂CO₃</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded flex-shrink-0" style={{ backgroundColor: "#FFE0B2" }}></div>
                                    <span className="text-xs sm:text-sm text-accent-dark-blue">K₂SO₄</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded flex-shrink-0" style={{ backgroundColor: "#D6D9FF" }}></div>
                                    <span className="text-xs sm:text-sm text-accent-dark-blue">Na₂SO₄</span>
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