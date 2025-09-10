import React from "react";
import '../Styling/AboutUs.css';

function AboutUs() {
    return (
        <section className="py-15 relative">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full justify-start items-center gap-10 grid lg:grid-cols-2 grid-cols-1">
                    <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">

                        <div className="lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                            <img className="rounded-xl object-cover" src="https://pagedone.io/asset/uploads/1717741205.png" alt="about Us image" />
                        </div>

                        <img className="sm:ml-0 ml-auto rounded-xl object-cover" src="https://pagedone.io/asset/uploads/1717741215.png" alt="about Us image" />


                    </div>

                    <div className="w-full flex-col justify-center lg:items-start items-center gap-2 inline-flex">
                        <div className="w-full flex-col justify-center items-start gap-3 flex">


                            <div>
                                <h1 className="text-sky-900 text-4xl font-semibold leading-normal lg:text-start text-center">About Alkion</h1>
                                <h2 className="text-sky-900 text-1xl font-semibold leading-normal lg:text-start text-center">
                                    Customized Measuring Instruments and Consulting Services
                                </h2>
                                <p className="text-gray-600 text-base font-normal leading-relaxed lg:text-start text-center">
                                    We begin by analyzing your needs and then build a measuring instrument that is adapted for your specific process. 
                                    We perform the measurements on-site and present the results in a complete package.                                </p>
                            </div>


                            <div>
                                <h2 className="text-sky-900 text-1xl font-semibold leading-normal lg:text-start text-center">
                                    Measurement Packages Adapted to Your Needs
                                </h2>
                                <p className="text-gray-600 text-base font-normal leading-relaxed lg:text-start text-center">
                                    We offer three different levels of measurements, so that you can choose the package that suits you best:
                                </p>
                            </div>


                            <div className="flex flex-col sm:flex-row justify-center items-end gap-2">

                                <div className="flex-col justify-start items-start bg-neutral-100 p-5 rounded-lg min-h-[150px] w-full sm:w-1/3 md:w-1/3 lg:w-1/3 flex-1">
                                    <h3 className="text-sky-600 text-2xl font-bold font-manrope leading-normal">Level 1</h3>
                                    <h5 className="text-gray-600 text-base font-normal leading-relaxed">Measurement of total alkali concentration.</h5>
                                    <h6 className="text-gray-800 text-base pt-2 font-semibold">Price: 123 SEK</h6>
                                </div>

                                <div className="flex-col justify-start items-start bg-neutral-100 p-5 rounded-lg min-h-[200px] w-full sm:w-1/3 md:w-1/3 lg:w-1/3 flex-1">
                                    <h4 className="text-sky-700 text-2xl font-bold font-manrope leading-normal">Level 2</h4>
                                    <h5 className="text-gray-600 text-base font-normal leading-relaxed">Measurement of total alkali concentration and specification of different alkali substances.</h5>
                                    <h6 className="text-gray-800 text-base pt-2 font-semibold">Price: 123 SEK</h6>
                                </div>

                                <div className="flex-col justify-start items-start bg-neutral-100 p-5 rounded-lg min-h-[250px] w-full sm:w-1/3 md:w-1/3 lg:w-1/3 flex-1">
                                    <h4 className="text-sky-900 text-2xl font-bold font-manrope leading-normal">Level 3</h4>
                                    <h5 className="text-gray-600 text-base font-normal leading-relaxed ">A complete package that includes total concentration, specification of different substances, and a thorough analysis of your process.</h5>
                                    <h6 className="text-gray-800 text-base pt-2 font-semibold">Price: 123 SEK</h6>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;