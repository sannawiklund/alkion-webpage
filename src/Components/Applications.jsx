import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import { PiFactoryBold } from 'react-icons/pi';

function ProductTypes() {
    return (
        <div id="productTypes" className="relative flex flex-col h-auto bg-stone-200 p-5">

            <div class="bg-base-200 py-5 sm:py-16 lg:py-5">

                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    <h2 class="text-2xl text-center font-semibold md:text-4xl lg:text-6xl pt-2 pb-2 text-accent-blue">Product Applications</h2>
                    <h1 class="text-xl text-center font-normal text-accent-blue pb-5">Real-time alkali measurements from lab research to heavy industry.</h1>


                    {/* Product Cards */}
                    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">

                        {/* First Accordion Card */}
                        <div class="card shadow-lg bg-base-100 p-5 bg-accent-beige">

                            <div class="card-body text-center">

                                {/* Product Type Title */}
                                <h3 class="text-left text-2xl font-medium pt-1 text-accent-blue">Industrial & Process Monitoring</h3>

                                {/* Accordion for sub-categories */}
                                <Accordion type="single" collapsible>

                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Metallurgy and Smelting</AccordionTrigger>
                                        <AccordionContent>
                                            <p class="text-base-content text-left">Text about metallurgy and smelting.</p>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>Glass and Ceramics Manufacturing</AccordionTrigger>
                                        <AccordionContent>
                                            <p class="text-base-content text-left">Text about glass and ceramics manufacturing.</p>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>Cement and Clinker Production</AccordionTrigger>
                                        <AccordionContent>
                                            <p class="text-base-content text-left">Text about cement and clinker production.</p>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-4">
                                        <AccordionTrigger>Pulp Recovery and Waste Incineration</AccordionTrigger>
                                        <AccordionContent>
                                            <p class="text-base-content text-left">Text about pulp recovery and waste incineration.</p>
                                        </AccordionContent>
                                    </AccordionItem>

                                </Accordion>
                            </div>
                        </div>


                        {/* Second Accordion Card */}
                        <div class="card shadow-lg bg-base-100 p-5 bg-accent-beige">

                            <div class="card-body text-center">

                                {/* Product Type Title */}
                                <h3 class="text-left text-2xl font-medium pt-1 text-accent-blue">Energy & Battery Technology</h3>

                                {/* Accordion for sub-categories */}
                                <Accordion type="single" collapsible>

                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Lithium Battery Recycling</AccordionTrigger>
                                        <AccordionContent>
                                            <p class="text-base-content text-left">Text about lithium battery recycling.</p>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>Na+/K+ - Battery R&D</AccordionTrigger>
                                        <AccordionContent>
                                            <p class="text-base-content text-left">Text about Na+/K+ - Battery R&D.</p>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>Fuel Cells and Electrolysis Systems</AccordionTrigger>
                                        <AccordionContent>
                                            <p class="text-base-content text-left">Text about fuel cells and electrolysis systems.</p>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-4">
                                        <AccordionTrigger>Solid Oxide Fuel Cells (SOFC) - testing</AccordionTrigger>
                                        <AccordionContent>
                                            <p class="text-base-content text-left">Text about solid oxide fuel cells (SOFC) testing.</p>
                                        </AccordionContent>
                                    </AccordionItem>

                                </Accordion>
                            </div>
                        </div>

                        {/* Third Accordion Card */}
                        <div class="card shadow-lg bg-accent-beige p-5">

                            <div class="card-body text-center">

                                {/* Product Type Title */}
                                <h3 class="text-left text-2xl font-medium pt-1 text-accent-blue">Research & Environmental Science</h3>

                                {/* Accordion for sub-categories */}
                                <Accordion type="single" collapsible>

                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Aerosol and Atmospheric Chemistry</AccordionTrigger>
                                        <AccordionContent>
                                            <p class="text-base-content text-left">Text about aerosol and atmospheric chemistry.</p>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>Cloud Microphysics and Ice Nucleation</AccordionTrigger>
                                        <AccordionContent>
                                            <p class="text-base-content text-left">Text about cloud microphysics and ice nucleation.</p>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>Soil & Dust Aerosol Characterization</AccordionTrigger>
                                        <AccordionContent>
                                            <p class="text-base-content text-left">Text about soil & dust aerosol characterization.</p>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-4">
                                        <AccordionTrigger>Combustion Emission Diagnostics</AccordionTrigger>
                                        <AccordionContent>
                                            <p class="text-base-content text-left">Text about combustion emission diagnostics.</p>
                                        </AccordionContent>
                                    </AccordionItem>

                                </Accordion>
                            </div>
                        </div>


                        {/* Fourth Accordion Card */}
                        <div class="card shadow-lg bg-base-100 p-5 bg-accent-beige">

                            <div class="card-body text-center">

                                {/* Product Type Title */}
                                <h3 class="text-left text-2xl font-medium pt-1 text-accent-blue">Safety & Regulatory Applications</h3>

                                {/* Accordion for sub-categories */}
                                <Accordion type="single" collapsible>

                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Emission Compliance Monitoring</AccordionTrigger>
                                        <AccordionContent>
                                            <p class="text-base-content text-left">Text about emission compliance monitoring.</p>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>Indoor and Occupational Air Quality</AccordionTrigger>
                                        <AccordionContent>
                                            <p class="text-base-content text-left">Text about indoor and occupational air quality.</p>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>Environmental Remediation</AccordionTrigger>
                                        <AccordionContent>
                                            <p class="text-base-content text-left">Text about environmental remediation.</p>
                                        </AccordionContent>
                                    </AccordionItem>

                                </Accordion>
                            </div>
                        </div>




                    </div>
                </div>
            </div>
        </div>
    )
};
export default ProductTypes;

