import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

function ProductTypes() {
    return (
        <div id="productTypes" className="relative flex flex-col h-auto bg-stone-200">

            <div class="bg-base-200 py-5 sm:py-16 lg:py-5">

                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    <h2 class="text-2xl text-center font-semibold md:text-4xl lg:text-6xl pt-2 pb-2 text-accent-green text-">Product Applications</h2>
                    <h1 class="text-xl text-center font-medium text-accent-green pb-5">Explore our solutions and how they can apply to your needs</h1>


                    {/* Product Cards */}
                    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">

                        {/* First Accordion Card */}
                        <div class="card shadow-lg bg-base-100 p-5 bg-accent-beige">

                            <div class="card-body text-center">

                                {/* Product Type Title */}
                                <h3 class="text-left text-2xl font-medium pt-1 text-accent-green">Bio-Energy</h3>

                                {/* Accordion for sub-categories */}
                                <Accordion type="single" collapsible>

                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Biomass Combustion</AccordionTrigger>
                                        <AccordionContent>
                                            <p class="text-base-content text-left">Text about biomass combustion.</p>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>Biomass Gasification</AccordionTrigger>
                                        <AccordionContent>
                                            <p class="text-base-content text-left">Text about biomass gasification.</p>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>Fluidized Beds</AccordionTrigger>
                                        <AccordionContent>
                                            <p class="text-base-content text-left">Text about fluidized beds.</p>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-4">
                                        <AccordionTrigger>CCS (HPC)</AccordionTrigger>
                                        <AccordionContent>
                                            <p class="text-base-content text-left">Text about CCS (HPC).</p>
                                        </AccordionContent>
                                    </AccordionItem>

                                </Accordion>
                            </div>
                        </div>


                        {/* Second Accordion Card */}
                        <div class="card shadow-lg bg-base-100 p-5 bg-accent-beige">

                            <div class="card-body text-center">

                                {/* Product Type Title */}
                                <h3 class="text-left text-2xl font-medium pt-1 text-accent-green">Batteries</h3>

                                {/* Accordion for sub-categories */}
                                <Accordion type="single" collapsible>

                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Li-ion</AccordionTrigger>
                                        <AccordionContent>
                                            <p class="text-base-content text-left">Text about Li-ion batteries.</p>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>Na-ion</AccordionTrigger>
                                        <AccordionContent>
                                            <p class="text-base-content text-left">Text about Na-ion batteries.</p>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>Li enrichment</AccordionTrigger>
                                        <AccordionContent>
                                            <p class="text-base-content text-left">Text about Li enrichment.</p>
                                        </AccordionContent>
                                    </AccordionItem>

                                </Accordion>
                            </div>
                        </div>

                        {/* Third Accordion Card */}
                        <div class="card shadow-lg bg-accent-beige p-5">

                            <div class="card-body text-center">

                                {/* Product Type Title */}
                                <h3 class="text-left text-2xl font-medium pt-1 text-accent-green">Air Quality</h3>

                                {/* Accordion for sub-categories */}
                                <Accordion type="single" collapsible>

                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Clean Room</AccordionTrigger>
                                        <AccordionContent>
                                            <p class="text-base-content text-left">Text about Clean Room technology.</p>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>Filters</AccordionTrigger>
                                        <AccordionContent>
                                            <p class="text-base-content text-left">Text about air filters technology.</p>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>Aerosols</AccordionTrigger>
                                        <AccordionContent>
                                            <p class="text-base-content text-left">Text about aerosols.</p>
                                        </AccordionContent>
                                    </AccordionItem>

                                </Accordion>
                            </div>
                        </div>


                        {/* Fourth Accordion Card */}
                        <div class="card shadow-lg bg-base-100 p-5 bg-accent-beige">

                            <div class="card-body text-center">

                                {/* Product Type Title */}
                                <h3 class="text-left text-2xl font-medium pt-1 text-accent-green">Research & Development</h3>

                                {/* Accordion for sub-categories */}
                                <Accordion type="single" collapsible>

                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Next generation Alkali Instruments</AccordionTrigger>
                                        <AccordionContent>
                                            <p class="text-base-content text-left">Text about next generation Alkali Instruments technology.</p>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>Alkali Catalysts</AccordionTrigger>
                                        <AccordionContent>
                                            <p class="text-base-content text-left">Text about Alkali Catalysts technology.</p>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>Alkali ferrites</AccordionTrigger>
                                        <AccordionContent>
                                            <p class="text-base-content text-left">Text about Alkali ferrites technology.</p>
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

