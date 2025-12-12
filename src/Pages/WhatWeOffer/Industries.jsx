import React from "react";
import FranceSOLEIL from '../../Assets/Other/FranceSOLEIL.jpg';
import { Factory } from "lucide-react";

function Industries() {
    return (
        <section className="relative flex items-center overflow-hidden py-10">

            {/* OUTER WRAPPER (same as Services) */}
            <div className="relative mx-auto max-w-7xl w-full px-6">

                {/* GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    {/* LEFT COLUMN */}
                    <div className="lg:pr-6">

                        <div className="flex items-center gap-3 mb-3">
                            <Factory className="w-8 h-8 text-accent-green" />
                            <span className="text-accent-beige text-lg font-medium tracking-wide">
                                Industries
                            </span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl font-bold text-accent-beige leading-tight">
                            Diverse Industries, Unified Solutions
                        </h2>

                        <p className="mt-3 text-lg text-accent-beige leading-relaxed max-w-2xl">
                            Our alkali measurement solutions serve a broad range of industries,
                            from energy production and atmospheric monitoring to advanced research
                            environments.
                            <br /><br />
                            Alkion delivers real-time, high-precision alkali insights that help optimize critical
                            processes, enhance safety, and support regulatory compliance.
                        </p>

                        <ul className="mt-5 space-y-2 text-sm sm:text-lg text-accent-beige">
                            {[
                                "Maritime & Offshore Aerosol Monitoring",
                                "Climate & Atmospheric Surveillance",
                                "Scientific & Academic Research",
                                "Battery Manufacturing & Recycling (Li-ion, Na/K)",
                                "Catalysis & Industrial Filtration Systems",
                                "Carbon Capture & Storage (CCS)",
                                "Sampling Technology & Measurement Development",
                                "High-Temperature Alkali Chemistry Processes",
                                "Energy Sector (Combustion, Gasification, Chemical Looping)",
                                "Air Quality & Environmental Monitoring",
                                "Clean Rooms & Sensitive Controlled Environments"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                    </div>

                    {/* RIGHT COLUMN — Image */}
                    <div className="relative w-full h-[280px] sm:h-[320px] lg:h-[650px]">

                        <img
                            src={FranceSOLEIL}
                            alt="France SOLEIL Facility"
                            className="absolute inset-0 w-full h-full object-cover rounded-sm shadow-xl"
                        />

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Industries;

