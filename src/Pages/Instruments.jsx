import React from "react";
import { Atom } from "lucide-react";

function Instruments() {
    return (
        <section className="relative min-h-screen flex items-center justify-center py-10">

            {/* CONTENT WRAPPER */}
            <div className="relative z-10 mx-auto max-w-5xl bg-accent-beige/100 shadow-2xl rounded-xl px-6 sm:px-10 py-10">

                {/* LABEL */}
                <div className="flex items-center gap-3 mb-6">
                    <Atom className="w-8 h-8 text-accent-green" />
                    <span className="text-accent-blue text-lg font-medium tracking-wide">
                        Instruments
                    </span>
                </div>

                {/* TITLE */}
                <h2 className="text-4xl sm:text-5xl font-bold text-accent-blue leading-tight">
                    Advanced Instruments,<br />
                    For Precise Alkali Measurements
                </h2>

                {/* INTRO */}
                <p className="mt-6 text-lg text-accent-blue/90 leading-relaxed">
                    Alkion uses two in-house developed instruments — <strong>TAM</strong> and <strong>SAM</strong> — 
                    engineered for high-precision, time-resolved alkali and aerosol measurements in demanding 
                    industrial environments.
                </p>

                {/* SHORT DESCRIPTIONS */}
                <div className="mt-8 space-y-6">

                    <div>
                        <h3 className="text-xl font-semibold text-accent-blue">
                            TAM — Total Alkali Monitor
                        </h3>
                        <p className="mt-2 text-accent-blue/80 leading-relaxed">
                            Measures real-time total alkali concentration (K, Na, Li, etc.)
                            in both gas and particle phases for accurate process control.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-accent-blue">
                            SAM — Speciation Alkali Monitor
                        </h3>
                        <p className="mt-2 text-accent-blue/80 leading-relaxed">
                            Reports the real-time fraction and speciation of alkali aerosol
                            compounds present in an alkali flow, enabling deeper insight into
                            aerosol behavior.
                        </p>
                    </div>

                </div>

                {/* FINAL PARAGRAPH */}
                <p className="mt-10 text-base text-accent-blue/75 leading-relaxed">
                    These instruments are not sold commercially — instead, they form the core of
                    Alkion’s service solutions, enabling accurate process insights and guiding
                    improvements in combustion efficiency, corrosion mitigation, and operational
                    optimization.
                </p>

            </div>

        </section>
    );
}

export default Instruments;
