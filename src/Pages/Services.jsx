import React from 'react';
import ImageOne from '../Assets/Other/100kW.jpg';
import ImageTwo from '../Assets/Other/SID2-3.jpg';
import { CheckLine } from "lucide-react";

function Services() {
    return (
        <section className="overflow-hidden bg-slate-50 py-12 sm:py-16 md:py-24">

            <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">

                    {/* TEXT */}
                    <div className="flex flex-col justify-center text-left px-2 sm:px-6 lg:px-0">
                        <div className="flex justify-center">
                            <CheckLine className="w-30 h-30 text-[var(--accent-green)]" />
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent-blue leading-tight">
                            Complete Service
                        </h2>

                        <p className="mt-4 text-base sm:text-lg text-accent-blue italic leading-relaxed max-w-xl">
                            From extraction, to conditioning and dilution, to data acquisition and analysis.
                        </p>

                        <h3 className="mt-4 text-xl sm:text-lg font-semibold text-accent-blue leading-snug max-w-xl">
                            Custom made measurement systems, tailored for each application.
                        </h3>

                        <ul className="mt-2 max-w-xl list-disc list-inside space-y-2 text-accent-blue text-base sm:text-lg leading-relaxed">
                            <li>Aerosol measurements, capturing both gases and particles.</li>
                            <li>Extractive measurements with high loadings of condensable gases.</li>
                            <li>Interpreting the alkali data and provide support process optimization.</li>
                        </ul>
                    </div>

                    {/* LEFT IMAGE */}
                    <div className="relative w-full h-full min-h-0 rounded-sm overflow-hidden shadow-xl">
                        <img
                            src={ImageOne}
                            alt="100kW Combustion Test Facility"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative w-full h-full min-h-0 rounded-sm overflow-hidden shadow-xl">
                        <img
                            src={ImageTwo}
                            alt="SID2-3 Instrument"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Services;
