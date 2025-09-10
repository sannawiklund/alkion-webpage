import React from "react";
import '../Styling/AboutUs.css';

function AboutUs() {
    return (
        <section className="bg-gradient-to-r from-neutral-900 to-sky-900 py-24 relative text-center">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full justify-center items-center grid lg:grid-cols-1 grid-cols-1">
                    <div className="w-full flex-col justify-center items-center gap-2 inline-flex">
                        <div className="w-full flex-col justify-center items-center gap-3 flex">
                            <div className="w-full flex-col justify-center items-center gap-1 flex">
                                <h2 className="text-white text-4xl font-semibold font-manrope leading-normal">
                                    Precision in Every Measurement
                                </h2>
                                <p className="text-gray-200 text-lg font-normal leading-relaxed max-w-2xl">
                                    We develop and perform alkali metal measurements that are tailored to our customers' needs. We collaborate with various industries, often within process engineering, to help them streamline their processes, troubleshoot problems, and quality-test their products.

                                </p>
                            </div>

                            <button className="sm:w-fit w-full px-3.5 py-2 bg-[#3daf36] hover:bg-[#3e883a] transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                                <span className="px-1.5 text-white text-sm font-medium leading-6">Contact us for more information</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;