import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Japan from '../Assets/Other/Japan.jpg';
import Industries from './Industries.jsx';

function Applications() {
    return (
        <>
            {/* MAIN APPLICATIONS SECTION */}
            <div
                id="productTypes"
                className="relative bg-gradient-to-r from-slate-900 via-[#153d64] to-slate-900 px-6"
                // style={{
                //     backgroundImage: `url(${Japan})`,
                //     backgroundSize: "cover",
                //     backgroundPosition: "center",
                //     backgroundRepeat: "no-repeat",
                // }}
            >
                {/* Overlay
                <div className="absolute inset-0 bg-black/20 backdrop-blur-xs pointer-events-none"></div> */}

                <div className="relative mx-auto max-w-7xl px-6 lg:px-12 p-20">

                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-left mb-4 text-accent-green">
                        Product Applications
                    </h2>

                    <p className="mb-4 text-lg text-accent-beige leading-relaxed ">
                        Our product applications span a diverse array of industries and fields,
                        each with unique challenges and requirements. 
                        <br></br>
                        Below are some of the key areas
                        where our alkali measurement solutions make a significant impact:
                    </p>

                    {/* GRID */}
                    <div>
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
                                className="bg-accent-beige rounded-xs shadow-md hover:shadow-xl transition-shadow p-6"
                            >
                                <h3 className="text-xl font-medium text-accent-green">
                                    {section.title}
                                </h3>

                                <Accordion type="single" collapsible>
                                    {section.items.map((item, i) => (
                                        <AccordionItem
                                            key={`item-${i}`}
                                            value={`item-${i}`}
                                        >
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
                    
                </div>
            </div>

            <Industries />
        </>
    );
}

export default Applications;
