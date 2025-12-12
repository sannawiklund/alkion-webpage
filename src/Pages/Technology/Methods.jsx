import React from "react";
import { Atom, Droplet, Zap, TrendingUp, Search, CheckCircle, CornerRightDown, Lightbulb } from "lucide-react"; 

// Helper component 
const MethodStep = ({ icon: Icon, title, content, customClass = "" }) => (
    <div className={`p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg bg-white/5 border border-accent-green/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${customClass}`}>
        <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-accent-green mb-3 flex items-center gap-2 sm:gap-3">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 flex-shrink-0" />
            <span>{title}</span>
        </h3>
        <p className="text-accent-beige/90 leading-relaxed text-sm sm:text-base lg:text-lg">
            {content}
        </p>
    </div>
);

function Methods() {
    
    // List 1 : Process Value
    const processValue = [
        "Selective to alkalis by physics, not post-processing",
        "High sensitivity (down to ppb) and millisecond response for real-time control",
        "Industrial robustness for in-situ use",
    ];

    // List 2: Data Provided
    const dataProvided = [
        "Alkali release profiles",
        "Temperature-dependent behavior",
        "Flow hydrodynamics (e.g., gas distribution via point extractions of alkali)",
        "Gas/particle partitioning",
        "Speciation dynamics",
    ];

    // List 3: Actionable Insights
    const actionableInsights = [
        "Process optimization",
        "Corrosion mitigation",
        "Reaction kinetics or activation properties",
        "Fuel quality evaluation",
        "Emission control strategies",
    ];

    return (
        <section 
            className="pt-16 sm:pt-20 lg:pt-28 pb-0 bg-accent-blue" 
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* HEADER */}
                <div className="text-center max-w-5xl mx-auto mb-6 sm:mb-8">
                    <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <Atom className="w-6 h-6 sm:w-7 sm:h-7 text-accent-green" />
                        <span className="text-accent-green text-xs sm:text-sm font-semibold uppercase tracking-widest">
                            Our Scientific Approach
                        </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white tracking-tight leading-tight px-2">
                        The Method Behind Reliable Alkali Measurement
                    </h2>

                </div>
                
                {/* 3 STEP PROCESS (EXTRACTION, CONDITIONING, MEASUREMENT) */}
                <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:gap-10">

                    {/* STEP 1: EXTRACTION */}
                    <MethodStep
                        icon={TrendingUp}
                        title="Extraction: Representative Sampling"
                        content={
                            <>
                                <p className="mb-3 text-sm sm:text-base font-medium">
                                    High-temperature sampling probes extract a representative fraction of the gas and aerosol stream from furnaces, reactors, or research chambers.
                                </p>
                                <p className="text-accent-beige text-sm sm:text-base">
                                    Our probes are the result of extensive research focused on mass transport phenomena, specifically designed to minimize wall losses in sampling lines. This deep understanding is crucial for achieving accurate, verifiable measurements of the total alkali concentration that are free from collection errors inherent to basic sampling systems.
                                </p>
                            </>
                        }
                    />

                    {/* STEP 2: CONDITIONING & DILUTION */}
                    <MethodStep
                        icon={Droplet}
                        title="Conditioning & Dilution: Sample Integrity"
                        content={
                            <>
                                <p className="mb-3 text-sm sm:text-base font-medium">
                                    The alkali-rich stream is cooled, diluted, and conditioned to prevent condensation or deposition, ensuring stable operation even under extreme alkali loads.
                                </p>
                                <p className="text-accent-beige text-sm sm:text-base">
                                    This conditioning is essential because alkali species readily condense or react with filter materials at high temperatures, leading to significant signal loss and fouling. As experts in this field, we provide tailored, active conditioning to stabilize the sample stream, a requirement that generic sampling solutions cannot meet in high-alkali industrial environments.
                                </p>
                            </>
                        }
                    />

                    {/* STEP 3: MEASUREMENT*/}
                    <div className="p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg bg-white/5 border border-accent-green/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                         <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-accent-green mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                            <Zap className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 flex-shrink-0" />
                            <span>Measurement: Surface Ionization (SI)</span>
                        </h3>

                        <div className="grid grid-cols-1">
                            
                            <div className="text-accent-beige/90 space-y-3 sm:space-y-4">
                                <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                                    The Physical Principle
                                </h4>
                                <p className="text-sm sm:text-base">
                                    Our instruments are built on the concept of surface ionization (SI). When hot metals are exposed to alkali-bearing gases, alkali atoms adsorb, exchange an electron with the surface, and desorb as positive ions. The process is described by the <a href="https://en.wikipedia.org/wiki/Saha%E2%80%93Langmuir_equation" target="_blank" rel="noopener noreferrer" className="text-accent-green hover:underline">Saha–Langmuir equation</a>. 
                                </p>
                                <p className="text-sm sm:text-base">
                                    Ion emission occurs when the work function of a hot metal surface exceeds the ionization potential of an atom. This is the case for alkali metals whose ionization probabilities approaches unity, while most other elements show the opposite behavior, making neutral desorption dominant. The result is intrinsic chemical selectivity for alkalis with an excellent sensitivity, since nearly every alkali atom that reaches the surface is counted as an ion current.
                                </p>
                                <p className="text-sm sm:text-base">
                                    Choosing a metal surface with catalytic properties and operating it at high temperatures also keeps it clean and stable. So, where other diagnostics face problems from tars and soot, these have minimal influence on the work function in our instruments where the signals remain reliable in harsh, high-temperature streams.
                                </p>
                                <p className="pt-2 text-accent-green font-semibold text-sm sm:text-base">
                                    Alkion leverages decades of SI research and engineering to deliver compact, integrable alkali instruments, turning a rigorous physical principle into dependable measurements for your process.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* ACTIONABLE RESULTS */}
                <div className="mt-8 sm:mt-10 pb-16 sm:pb-20 lg:pb-28">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-accent-green text-center mb-6 sm:mb-8 lg:mb-10 px-2">
                        Actionable Results for Your Operations
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        
                        {/* CARD 1: VALUE FOR YOUR PROCESS (NY) */}
                        <div className="bg-accent-beige rounded-xl shadow-2xl p-5 sm:p-6 lg:p-8 border border-accent-green/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                            <h4 className="text-lg sm:text-xl font-bold text-accent-blue mb-4 sm:mb-5 border-b pb-3 border-accent-blue/10 flex items-center gap-2 sm:gap-3">
                                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-accent-green flex-shrink-0"/>
                                <span>Value for Your Process</span>
                            </h4>
                            <ul className="space-y-2 sm:space-y-3 text-accent-blue text-sm sm:text-base">
                                {processValue.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2 sm:gap-3">
                                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent-green flex-shrink-0 mt-0.5 sm:mt-1" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* CARD 2: DATA PROVIDED (ANALYS) */}
                        <div className="bg-accent-beige rounded-xl shadow-2xl p-5 sm:p-6 lg:p-8 border border-accent-green/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                            <h4 className="text-lg sm:text-xl font-bold text-accent-blue mb-4 sm:mb-5 border-b pb-3 border-accent-blue/10 flex items-center gap-2 sm:gap-3">
                                <Search className="w-5 h-5 sm:w-6 sm:h-6 text-accent-green flex-shrink-0"/>
                                <span>Time-Resolved Data Provide:</span>
                            </h4>
                            <ul className="space-y-2 sm:space-y-3 text-accent-blue text-sm sm:text-base">
                                {dataProvided.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2 sm:gap-3">
                                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent-green flex-shrink-0 mt-0.5 sm:mt-1" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CARD 3: ACTIONABLE INSIGHTS */}
                        <div className="bg-accent-beige rounded-xl shadow-2xl p-5 sm:p-6 lg:p-8 border border-accent-green/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                            <h4 className="text-lg sm:text-xl font-bold text-accent-blue mb-4 sm:mb-5 border-b pb-3 border-accent-blue/10 flex items-center gap-2 sm:gap-3">
                                <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-accent-green flex-shrink-0"/>
                                <span>Actionable Insights:</span>
                            </h4>
                            <ul className="space-y-2 sm:space-y-3 text-accent-blue text-sm sm:text-base">
                                {actionableInsights.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2 sm:gap-3">
                                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent-green flex-shrink-0 mt-0.5 sm:mt-1" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Horizontal line */}
                <div className="w-full h-0.5 bg-accent-green/30 mx-auto"></div>

            </div>
        </section>
    );
}

export default Methods;