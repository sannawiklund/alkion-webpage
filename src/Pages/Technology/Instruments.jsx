import React from "react";
import { Atom } from "lucide-react";

export default function Instruments() {
    return (
        <section className="relative pt-16 sm:pt-20 ">
            <div className="relative z-10 max-w-6xl mx-auto px-6">

                {/* HEADER */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Atom className="w-8 h-8 sm:w-9 sm:h-9 text-accent-green" />
                        <span className="text-accent-beige text-lg sm:text-xl font-medium tracking-wide">
                            Instruments
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

                {/* CARD GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12">
                    
                    {/* TAM */}
                    <div className="bg-accent-beige backdrop-blur-md border border-accent-beige/20 shadow-lg rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                        <h3 className="text-2xl font-semibold text-accent-green mb-2">
                            TAM — Total Alkali Monitor
                        </h3>
                        <p className="text-accent-blue/80 leading-relaxed">
                            Measures total alkali concentration (K, Na, Li, etc.)
                            across gas and particle phases in real time — enabling
                            high-fidelity tracking of alkali transport phenomena during
                            combustion and gasification processes.
                        </p>
                    </div>

                    {/* SAM */}
                    <div className="bg-accent-beige backdrop-blur-md border border-accent-beige/20 shadow-lg rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                        <h3 className="text-2xl font-semibold text-accent-green mb-2">
                            SAM — Speciation Alkali Monitor
                        </h3>
                        <p className="text-accent-blue/80 leading-relaxed">
                            Provides temperature-modulated ionization profiling to identify
                            and quantify key alkali species — including chlorides, hydroxides,
                            sulfates, and carbonates — offering unparalleled insight into 
                            aerosol evolution.
                        </p>
                    </div>
                </div>

                {/* FOOTNOTE */}
                <p className="mt-8 text-accent-beige/70 text-center text-sm sm:text-base leading-relaxed max-w-3xl mx-auto italic">
                    Both TAM and SAM serve as the analytical foundation of Alkion’s applied measurement platform.
                    Rather than being standalone commercial instruments, they power our service-driven approach, enabling
                    performance optimization, corrosion mitigation, and intelligent process evolution.
                </p>
            </div>
        </section>
    );
}
