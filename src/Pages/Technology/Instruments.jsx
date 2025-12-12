import React from "react";
import { Atom, Microscope, FlaskConical, Pipette } from "lucide-react";
import BiomassConversion from "../../Assets/Other/BiomassConversion.png"; 

export default function InstrumentsCombined() {
    
    const speciationList = [
        { formula: "KCl", color: "#7A0000" },
        { formula: "NaCl", color: "#001A4D" },
        { formula: "KOH", color: "#C85F00" },
        { formula: "NaOH", color: "#003399" },
        { formula: "K₂CO₃", color: "#FFA64D" },
        { formula: "Na₂CO₃", color: "#7F8CFF" },
        { formula: "K₂SO₄", color: "#FFE0B2" },
        { formula: "Na₂SO₄", color: "#D6D9FF" },
    ];

    return (
        <section className="relative pt-16 sm:pt-20 pb-20 sm:pb-32">
            <div className="relative z-10 max-w-6xl mx-auto px-6">

                {/* 1. HEADER */}
                <div className="text-center mb-10">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Atom className="w-8 h-8 sm:w-9 sm:h-9 text-accent-green" />
                        <span className="text-accent-beige text-lg sm:text-xl font-medium tracking-wide">
                            INSTRUMENTS & CAPABILITIES
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-beige leading-tight">
                        Precision Instruments for<br className="hidden sm:block" />
                        Real-Time Alkali Measurement
                    </h2>

                    <p className="mt-5 text-accent-beige/90 text-lg max-w-3xl mx-auto leading-relaxed">
                        Alkion utilizes two proprietary systems: <strong className="text-accent-green">TAM</strong> and <strong className="text-accent-green">SAM</strong> — developed for ultra-sensitive, time-resolved alkali monitoring in demanding industrial environments.
                    </p>
                </div>

                {/* 2. CARD GRID  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12 mb-10">
                    
                    {/* TAM  */}
                    <div className="bg-white/5 border border-accent-green/20 backdrop-blur-md shadow-lg rounded-2xl p-8 transition-all duration-300 hover:shadow-xl">
                        <h3 className="text-2xl font-extrabold text-accent-green mb-2">
                            TAM — Total Alkali Monitor
                        </h3>
                        <p className="text-accent-beige/90 leading-relaxed">
                            Measures total alkali concentration (K, Na, Li, etc.)
                            across gas and particle phases in real time — enabling
                            high-fidelity tracking of alkali transport phenomena during
                            combustion and gasification processes.
                        </p>
                    </div>

                    {/* SAM */}
                    <div className="bg-white/5 border border-accent-green/20 backdrop-blur-md shadow-lg rounded-2xl p-8 transition-all duration-300 hover:shadow-xl">
                        <h3 className="text-2xl font-extrabold text-accent-green mb-2">
                            SAM — Speciation Alkali Monitor
                        </h3>
                        <p className="text-accent-beige/90 leading-relaxed">
                            Provides temperature-modulated ionization profiling to identify
                            and quantify key alkali species — including chlorides, hydroxides,
                            sulfates, and carbonates — offering unparalleled insight into 
                            aerosol evolution and corrosion drivers.
                        </p>
                    </div>
                </div>

                <div className="bg-white/5 border border-white/20 backdrop-blur-sm p-4 sm:p-6 lg:p-10 rounded-xl shadow-lg">

                    <div className="text-center mb-10 sm:mb-12">
                         <div className="flex items-center justify-center gap-2 sm:gap-3">
                            <Microscope className="w-7 h-7 sm:w-8 sm:h-8 text-accent-green" />
                            <span className="text-accent-green text-base sm:text-lg font-medium uppercase tracking-widest">
                                Case Study Example
                            </span>
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mt-2">
                            Visualizing Time-Resolved Alkali Data
                        </h3>
                        <p className="mt-3 text-accent-beige text-base sm:text-lg max-w-4xl mx-auto leading-relaxed font-normal">
                            The combined TAM + SAM platform provides both the overall alkali concentration and the specific chemical speciation during dynamic biomass conversion.
                        </p>

                        {/* FOOTNOTE */}
                        <p className="mt-5 text-accent-beige/70 text-center text-sm sm:text-base leading-relaxed max-w-3xl mx-auto italic">
                            Both TAM and SAM serve as the analytical foundation of Alkion’s applied measurement platform.
                            Rather than being standalone commercial instruments, they power our service-driven approach, enabling
                            performance optimization, corrosion mitigation, and intelligent process evolution.
                        </p>
                    </div>

                    {/* TAM  */}
                    <div className="p-6 rounded-xl bg-white shadow-xl mb-6">
                        <h4 className="text-2xl font-extrabold mb-3 text-accent-blue flex items-center gap-3">
                            <Pipette className="w-6 h-6 text-accent-green" />
                            Total Alkali Data (TAM)
                        </h4>
                        <p className="text-base text-gray-700 leading-relaxed">
                            Measures instantaneous Total Alkali (ppb concentration) with millisecond response time. This high-resolution signal is used to track the rate and magnitude of alkali release, crucial for real-time process control and dynamic system analysis.
                        </p>
                    </div>

                    {/* --- SAM SECTION --- */}
                    <div className="p-6 rounded-xl bg-white shadow-xl mb-0">
                        <h4 className="text-2xl font-extrabold mb-4 text-accent-blue flex items-center gap-3">
                            <FlaskConical className="w-6 h-6 text-accent-green" /> Speciation Data (SAM)
                        </h4>

                        <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
                            
                            {/* Left side: description + species */}
                            <div>
                                <p className="text-base text-gray-700 leading-relaxed mb-4">
                                    SAM identifies the chemical form of alkali aerosols.
                                    This is crucial for assessing risks such as corrosion and fouling, as the chemical structure dictates reactivity.
                                </p>

                                {/* Colour Boxes for SAM */}
                                <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                                    {speciationList.map((item, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <div className="w-4 h-4 rounded flex-shrink-0" style={{ backgroundColor: item.color }}></div>
                                            <span className="text-sm font-medium text-accent-blue">{item.formula}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right side: image  */}
                            <div className="flex justify-center lg:justify-center lg:mt-0">
                                
                                <img
                                    src={BiomassConversion}
                                    alt="Biomass Conversion Visualization"
                                    className="w-full max-w-sm bg-white "
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}