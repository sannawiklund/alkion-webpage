import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Cog } from "lucide-react";

function Applications() {
    return (
        <section
            id="applications"
            className="relative flex items-center py-10"
        >
            <div className="relative mx-auto max-w-7xl w-full px-6">

                {/* INTRO TEXT */}
                <div className="mb-5">
                    <div className="flex items-center gap-3 mb-4">
                        <Cog className="w-8 h-8 text-accent-green" />
                        <span className="text-accent-beige text-lg font-medium tracking-wide">
                            Applications
                        </span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-bold text-accent-beige leading-tight">
                        Versatile Applications Across Industries
                    </h2>

                    <p className="mt-4 text-base sm:text-lg text-accent-beige leading-relaxed max-w-5xl">
                        Our product applications span a diverse array of industries and fields,
                        each with unique challenges and requirements. 
                        <br></br>
                        Below are some of the key areas where our alkali measurement solutions make a significant impact:
                    </p>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        {
                            title: "Industrial & Process Monitoring",
                            items: [
                                { label: "Metallurgy and Smelting", text: "Free text about Metallurgy and Smelting." },
                                { label: "Glass and Ceramics Manufacturing", text: "Free text about Glass and Ceramics Manufacturing." },
                                { label: "Cement and Clinker Production", text: "Free text about Cement and Clinker Production." },
                                { label: "Pulp Recovery and Waste Incineration", text: "Free text about Pulp Recovery and Waste Incineration." },
                            ]
                        },
                        {
                            title: "Energy & Battery Technology",
                            items: [
                                { label: "Lithium Battery Recycling", text: "Free text about Lithium Battery Recycling." },
                                { label: "Na+/K+ - Battery R&D", text: "Free text about Na+/K+ - Battery R&D." },
                                { label: "Fuel Cells and Electrolysis Systems", text: "Free text about Fuel Cells and Electrolysis Systems." },
                                { label: "Solid Oxide Fuel Cells (SOFC) - testing", text: "Free text about Solid Oxide Fuel Cells (SOFC) - testing." },
                            ]
                        },
                        {
                            title: "Research & Environmental Science",
                            items: [
                                { label: "Aerosol and Atmospheric Chemistry", text: "Free text about Aerosol and Atmospheric Chemistry." },
                                { label: "Cloud Microphysics and Ice Nucleation", text: "Free text about Cloud Microphysics and Ice Nucleation." },
                                { label: "Soil & Dust Aerosol Characterization", text: "Free text about Soil & Dust Aerosol Characterization." },
                                { label: "Combustion Emission Diagnostics", text: "Free text about Combustion Emission Diagnostics." },
                            ]
                        },
                        {
                            title: "Safety & Regulatory Applications",
                            items: [
                                { label: "Emission Compliance Monitoring", text: "Free text about Emission Compliance Monitoring." },
                                { label: "Indoor and Occupational Air Quality", text: "Free text about Indoor and Occupational Air Quality." },
                                { label: "Environmental Remediation", text: "Free text about Environmental Remediation." },
                            ]
                        }
                    ].map((section, index) => (
                        <div
                            key={index}
                            className="bg-accent-beige rounded-sm shadow-md hover:shadow-xl transition-shadow p-6"
                        >
                            <h3 className="text-2xl font-medium text-accent-green mb-2">
                                {section.title}
                            </h3>

                            <Accordion type="single" collapsible>
                                {section.items.map((item, i) => (
                                    <AccordionItem key={`item-${i}`} value={`item-${i}`}>
                                        <AccordionTrigger className="text-left text-lg font-normal text-accent-blue">
                                            {item.label}
                                        </AccordionTrigger>

                                        <AccordionContent className="text-base text-stone-700 leading-relaxed">
                                            {item.text}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Applications;
