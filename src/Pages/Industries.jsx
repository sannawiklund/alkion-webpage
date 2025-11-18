import React from "react";
import FranceSOLEIL from '../Assets/Other/FranceSOLEIL.jpg';

function Products_Services() {
    return (
        <section className="overflow-hidden bg-accent-beige py-10 sm:py-20">

            <div className="mx-auto max-w-7xl px-4 lg:px-6">

                {/* TARGET GROUPS SECTION */}
                <div className="px-6 sm:px-10">
                    <div className="grid max-w-7xl mx-auto gap-x-12 gap-y-12 lg:grid-cols-2 items-start">

                        {/* LEFT COLUMN */}
                        <div className="lg:pr-8 lg:pt-2">
                            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-accent-blue">
                                Industries
                            </h2>

                            <p className="mt-2 text-lg text-accent-blue leading-relaxed">
                                Our alkali measurement solutions serve a broad range of industries,
                                from energy production and atmospheric monitoring to advanced research
                                environments. 

                                <br></br> <br></br> 
                                
                                Alkion delivers real-time, high-precision alkali insights that help optimize critical
                                processes, enhance safety, and support regulatory compliance.
                            </p>

                            <ul className="mt-4 space-y-2 text-lg text-accent-blue">
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
                                    <li key={i} className="flex items-start gap-x-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="w-5 h-5 flex-shrink-0 text-accent-green mt-1"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="font-medium text-accent-blue">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* RIGHT COLUMN — FULL-HEIGHT IMAGE */}
                        <div className="relative w-full h-full min-h-[380px] sm:min-h-[480px] lg:min-h-full">
                            <img
                                src={FranceSOLEIL}
                                alt="France SOLEIL Facility"
                                className="absolute inset-0 w-full h-full object-cover rounded-xs shadow-xl"
                            />
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}

export default Products_Services;
