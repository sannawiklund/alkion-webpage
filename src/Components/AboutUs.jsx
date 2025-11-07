import React from "react";
import '../Styling/AboutUs.css';
import LevelCard from "./ComponentParts/LevelCard";

function AboutUs() {
    return (
        <section className="py-15 relative bg-[#f4f2f2] AboutUs">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full justify-start items-center gap-10 grid lg:grid-cols-2 grid-cols-1">
                    <div className="w-full justify-center items-start">

                        <div>
                            <h1 className="text-sky-900 text-4xl font-semibold leading-normal lg:text-start text-center">Our Expertise</h1>
                            <h2 className="text-sky-900 text-1xl font-semibold leading-normal lg:text-start text-center pt-5">
                                Customized Measuring Instruments and Consulting Services
                            </h2>
                            <p className="text-gray-600 text-base font-normal leading-relaxed lg:text-start text-center">
                                We begin by analyzing your needs and then build a measuring instrument that is adapted for your specific process.
                                We perform the measurements on-site and present the results in a complete package.                                </p>
                        </div>


                        <div>
                            <h2 className="text-sky-900 text-1xl font-semibold leading-normal lg:text-start text-center pt-5">
                                Measurement Packages Adapted to Your Needs
                            </h2>
                            <p className="text-gray-600 text-base font-normal leading-relaxed lg:text-start text-center">
                                We offer three different levels of measurements, so that you can choose the package that suits you best:
                            </p>
                        </div>



                    </div>

                    <div className="w-full flex-col justify-center lg:items-start items-center gap-2 inline-flex">

                        <div className="w-full flex-col justify-center items-start gap-3 flex">

                            <div className="flex flex-col sm:flex-row justify-center items-end gap-2">
                                <LevelCard
                                    title="Level 1"
                                    description="Measurement of total alkali concentration."
                                    minHeight="min-h-[150px]"
                                    titleColor="text-white"
                                    price="123 SEK"

                                />
                                <LevelCard
                                    title="Level 2"
                                    description="Measurement of total alkali concentration and specification of different alkali substances."
                                    minHeight="min-h-[200px]"
                                    titleColor="text-white"
                                    price="456 SEK"

                                />
                                <LevelCard
                                    title="Level 3"
                                    description="A complete package that includes total concentration, specification of different substances, and a thorough analysis of your process."
                                    minHeight="min-h-[250px]"
                                    titleColor="text-white"
                                    price="789 SEK"
                                />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default AboutUs;