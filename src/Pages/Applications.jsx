import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

function ProductTypes() {
    return (
        <div id="productTypes" className="bg-stone-200 py-10 pb-20">

            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-center text-accent-blue tracking-tight">
                    Product Applications
                </h2>

                <p className="text-lg md:text-xl text-center text-accent-blue mt-2 mb-5">
                    Real-time alkali measurements from lab research to heavy industry.
                </p>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* CARD TEMPLATE */}

                    {[
                        {
                            title: "Industrial & Process Monitoring",
                            items: [
                                "Metallurgy and Smelting",
                                "Glass and Ceramics Manufacturing",
                                "Cement and Clinker Production",
                                "Pulp Recovery and Waste Incineration",
                            ]
                        },
                        {
                            title: "Energy & Battery Technology",
                            items: [
                                "Lithium Battery Recycling",
                                "Na+/K+ - Battery R&D",
                                "Fuel Cells and Electrolysis Systems",
                                "Solid Oxide Fuel Cells (SOFC) - testing",
                            ]
                        },
                        {
                            title: "Research & Environmental Science",
                            items: [
                                "Aerosol and Atmospheric Chemistry",
                                "Cloud Microphysics and Ice Nucleation",
                                "Soil & Dust Aerosol Characterization",
                                "Combustion Emission Diagnostics",
                            ]
                        },
                        {
                            title: "Safety & Regulatory Applications",
                            items: [
                                "Emission Compliance Monitoring",
                                "Indoor and Occupational Air Quality",
                                "Environmental Remediation",
                            ]
                        }
                    ].map((section, index) => (
                        <div
                            key={index}
                            className="bg-accent-beige rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6"
                        >
                            <h3 className="text-2xl font-medium text-accent-blue mb-4">
                                {section.title}
                            </h3>

                            <Accordion type="single" collapsible>
                                {section.items.map((item, i) => (
                                    <AccordionItem 
                                        key={`item-${i}`} 
                                        value={`item-${i}`}
                                        className="border-b border-accent-blue/20"
                                    >
                                        <AccordionTrigger className="text-left text-[18px] md:text-[20px] font-medium text-accent-blue hover:no-underline hover:text-accent-green transition-colors">
                                            {item}
                                        </AccordionTrigger>

                                        <AccordionContent className="text-base text-stone-700 leading-relaxed">
                                            Text about {item.toLowerCase()}.
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default ProductTypes;
