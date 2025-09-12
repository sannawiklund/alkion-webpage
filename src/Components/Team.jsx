import React from "react";
import Chalmers from "../Assets/Chalmers.png";
import GU from "../Assets/Gu.png";
import ViktorAndersson from "../Assets/ViktorAndersson.jpg";
import DanGell from "../Assets/DanGell.png";
import XiangruiKong from "../Assets/XiangruiKong.png";


function Team() {
    return (
<section className="py-6 bg-gray-900">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                <div className="mb-2">
                    <div class="mx-auto max-w-screen-sm text-center mb-2 lg:mb-6">
                        <h2 class="mb-2 text-2xl tracking-tight font-normal text-neutral-50 ">The team behind</h2>
                        <h3 class="mb-2 text-4xl tracking-tight font-medium text-neutral-50">Alkion Technologies</h3>
                    </div>
                </div>

                {/* Teammedlemmar */}
                <div className="flex flex-wrap justify-center gap-8">

                    <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 gap-8 w-full md:max-w-xl lg:max-w-2xl">
                        <div className="group">
                            <div className="relative mb-6">
                                <img
                                    src={DanGell}
                                    alt="Dan Gell image"
                                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:text-[#3daf36]"
                                />
                            </div>
                            <h4 className="text-xl font-semibold text-neutral-50 mb-2 capitalize text-center transition-all duration-500 group-hover:text-[#3daf36]">
                                Dan Gell
                            </h4>
                            <span className="text-neutral-200 text-center block transition-all duration-500">
                                CEO
                            </span>
                        </div>
                        <div className="group">
                            <div className="relative mb-6">
                                <img
                                    src={ViktorAndersson}
                                    alt="Viktor Andersson image"
                                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:text-[#3daf36]"
                                />
                            </div>
                            <h4 className="text-xl font-semibold text-neutral-50 mb-2 capitalize text-center transition-all duration-500 group-hover:text-[#3daf36]">
                                Viktor Andersson
                            </h4>
                            <span className="text-neutral-200 text-center block transition-all duration-500">
                                CTO
                            </span>
                        </div>
                        <div className="group">
                            <div className="relative mb-6">
                                <img
                                    src={XiangruiKong}
                                    alt="Xiangrui Kong image"
                                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:text-[#3daf36]"
                                />
                            </div>
                            <h4 className="text-xl font-semibold text-neutral-50 mb-2 capitalize text-center transition-all duration-500 group-hover:text-[#3daf36]">
                                Xiangrui Kong
                            </h4>
                            <span className="text-neutral-200 text-center block transition-all duration-500">
                                CSO
                            </span>
                        </div>
                    </div>
                </div>

                {/* Academic Partners */}
                <div className="mb-3 mt-4">
                    <h2 className="font-manrope text-2xl text-center font-medium text-neutral-50">
                        Academic Partners
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-2 gap-8 w-full md:max-w-xs lg:max-w-md">
                        <div className="group">
                            <div className="relative mb-6 ">
                                <img
                                    src={Chalmers}
                                    alt="Chalmers image"
                                    className="w-40 h-40 rounded-full mx-auto object-scale-down border border-solid border-transparent bg-neutral-50"
                                />
                            </div>
                            <h4 className="text-xl font-medium text-neutral-50 text-center">
                                Chalmers University of Technology
                            </h4>
                        </div>
                        <div className="group">
                            <div className="relative mb-6">
                                <img
                                    src={GU}
                                    alt="University of Gothenburg image"
                                    className="w-40 h-40 rounded-full mx-auto object-cover border border-solid border-transparent bg-neutral-50"
                                />
                            </div>
                            <h4 className="text-xl font-medium text-neutral-50 text-center">
                                University of Gothenburg
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    );
}

export default Team;