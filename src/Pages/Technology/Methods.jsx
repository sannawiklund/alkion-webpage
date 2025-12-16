import React from "react";
import { Atom, ArrowUpDown, TrendingUp, CheckCircle, Lightbulb } from "lucide-react";
import MethodGraph from "../../Assets/Instruments/MethodGraph.svg";

function Methods() {

    // List 1 : Process Value 
    const processValue = [
        "Selective to Alkalis by physics, not post-processing",
        "High sensitivity (down to ppb) and millisecond response for real-time control",
        "Industrial robustness for in-situ use",
    ];

    // List 2: Data Provided
    const dataProvided = [
        "Alkali Release Profiles",
        "Temperature-dependent Behavior",
        "Flow Hydrodynamics (e.g. Gas Distribution via Point Extractions of Alkali)",
        "Sorbent / Additive Performance",
        "Gas / Particle Partitioning",
        "Speciation Dynamics",
    ];

    // List 3: Actionable Insights
    const actionableInsights = [
        "Process Optimization",
        "Corrosion Mitigation",
        "Reaction Kinetics or Activation Properties",
        "Fuel Quality Evaluation",
        "Emission Control Strategies",
    ];

    const surfaceIonizationContent = (
        <>
            <p className="text-sm sm:text-base mb-4">
                Our instruments are built on the concept of <strong>Surface Ionization (SI)</strong>. When hot metals are exposed to alkali-bearing gases, alkali atoms adsorb, exchange an electron with the surface, and desorb as positive ions. The process is described by the <a href="https://en.wikipedia.org/wiki/Saha%E2%80%93Langmuir_equation" target="_blank" rel="noopener noreferrer" className="text-accent-green hover:underline font-semibold">Saha–Langmuir equation</a>: ion emission is favored when the work function of the hot metal surface is higher than the ionization potential of the atom.
            </p>
            <p className="text-sm sm:text-base mb-4">
                This is exactly the case for alkali metals, whose ionization probabilities on hot platinum approach unity, while most other ash-forming elements remain neutral. The result is <strong>Intrinsic Chemical Selectivity for Alkalis with an Excellent Sensitivity</strong>, since nearly every alkali atom that reaches the surface is counted as ion current.
            </p>
            <p className="text-sm sm:text-base mb-4">
                Choosing a metal surface with catalytic properties and operating it at high temperature also keeps the surface clean and stable. Where other diagnostics struggle with tars and soot, these have minimal influence on the work function in our instruments, so the signals stay reliable in harsh, high-temperature streams.
            </p>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center mt-6">
                <div className="w-full">
                    <img src={MethodGraph} alt="Surface Ionization Selectivity Graph" className="w-full h-auto object-cover" />
                </div>
                <div className="w-full">
                    <p className="text-sm sm:text-base">
                       <strong> Surface ionization gives built-in selectivity: </strong>  For a hot platinum surface at ~1500 K, alkali metals have high ionization probabilities, while most other ash-forming elements barely ionize at all. In practice this means that nearly every alkali atom that hits our filament is counted as ion current, while the background from other species is negligible.
                    </p>
                </div>
            </div>
        </>
    );

    return (
        <section
            className="pt-16 sm:pt-20 lg:pt-28  bg-accent-blue"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* HEADER */}
                <div className="text-center max-w-5xl mx-auto mb-10">
                    <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <Atom className="w-6 h-6 sm:w-7 sm:h-7 text-accent-green" />
                        <span className="text-accent-green text-xs sm:text-sm font-semibold uppercase tracking-widest">
                            Our Method
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight px-2">
                        The Method Behind Reliable Alkali Measurement
                    </h2>
                </div>

                {/* PRINCIP/METOD SECTION */}
                <div className="grid grid-cols-1">

                    {/* SURFACE IONIZATION STEP */}
                    <div className="p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg bg-white/5 border border-accent-green/20">
                        <h3 className="text-lg sm:text-2xl font-extrabold text-accent-green mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                            <span>The Principle: Surface Ionization (SI)</span>
                        </h3>

                        <div className="grid grid-cols-1">
                            <div className="text-accent-beige space-y-3 sm:space-y-4">
                                {surfaceIonizationContent}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ACTIONABLE RESULTS  */}
                <div className="mt-12 sm:mt-16">
                    <h3 className="text-2xl sm:text-4xl font-extrabold text-accent-green text-center mb-2 px-2">
                        What this means for you
                    </h3>

                    <p className=" mx-auto text-base sm:text-lg max-w-4xl text-accent-beige text-center mb-6 sm:mb-10 lg:mb-12 px-2">
                        Alkion leverages decades of SI research and engineering to deliver compact, integrable alkali instruments, turning a rigorous physical principle into dependable measurements for your process.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

                        {/* CARD 1: VALUE FOR YOUR PROCESS */}
                        <div className="bg-accent-beige rounded-xl shadow-2xl p-6 lg:p-8 border border-accent-green/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                            <h4 className="text-lg sm:text-xl font-bold text-accent-blue mb-4 sm:mb-5 border-b pb-3 border-accent-blue/10 flex items-center gap-2 sm:gap-3">
                                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-accent-green flex-shrink-0" />
                                <span>Value for Your Process</span>
                            </h4>
                            <ul className="space-y-2 sm:space-y-3 text-accent-blue text-sm sm:text-base">
                                {processValue.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2 sm:gap-3">
                                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent-green flex-shrink-0 mt-1" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CARD 2: DATA PROVIDED */}
                        <div className="bg-accent-beige rounded-xl shadow-2xl p-6 lg:p-8 border border-accent-green/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                            <h4 className="text-lg sm:text-xl font-bold text-accent-blue mb-4 sm:mb-5 border-b pb-3 border-accent-blue/10 flex items-center gap-2 sm:gap-3">
                                <ArrowUpDown className="w-5 h-5 sm:w-6 sm:h-6 text-accent-green flex-shrink-0" />
                                <span>Time-Resolved Data</span>
                            </h4>
                            <ul className="space-y-2 sm:space-y-3 text-accent-blue text-sm sm:text-base">
                                {dataProvided.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2 sm:gap-3">
                                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent-green flex-shrink-0 mt-1" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CARD 3: ACTIONABLE INSIGHTS */}
                        <div className="bg-accent-beige rounded-xl shadow-2xl p-6 lg:p-8 border border-accent-green/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                            <h4 className="text-lg sm:text-xl font-bold text-accent-blue mb-4 sm:mb-5 border-b pb-3 border-accent-blue/10 flex items-center gap-2 sm:gap-3">
                                <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-accent-green flex-shrink-0" />
                                <span>Actionable Insights</span>
                            </h4>
                            <ul className="space-y-2 sm:space-y-3 text-accent-blue text-sm sm:text-base">
                                {actionableInsights.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2 sm:gap-3">
                                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent-green flex-shrink-0 mt-1" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Horizontal line */}
                <div className="w-full h-px bg-accent-green/30 mx-auto mt-16 sm:mt-20"></div>

            </div>
        </section>
    );
}

export default Methods;