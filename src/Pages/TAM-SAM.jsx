import React from "react";
import DualAxisChart from "../Components/ComponentParts/DualAxisChart";
import TAM from "../Assets/Instruments/TAM.png";

function TAMSAM() {
    return (
        <div className="bg-accent-beige min-h-screen py-20">

            <div className="max-w-6xl mx-auto mb-8 flex flex-col md:flex-row gap-6 items-center">

                <div className="md:w-1/2">

                    <img src={TAM} alt="TAM" className="w-full h-auto" />
                    
                </div>

                <div className="md:w-1/2 flex flex-col gap-4">

                    <div className="bg-white p-6 rounded-md shadow-md">

                        <h2 className="text-2xl font-bold mb-3 text-accent-blue">TAM – Total Alkali Monitor</h2>
                        <p className="text-accent-dark-blue">
                            Measures real-time total alkali (K, Na, Li, etc.) gas- and particle concentration.
                        </p>

                    </div>

                    <div className="bg-white p-6 rounded-md shadow-md">

                        <h2 className="text-2xl font-bold mb-3 text-accent-blue">SAM – Speciation Alkali Monitor</h2>

                        <p className="text-accent-dark-blue">
                            Reports real-time fraction of alkali aerosol compounds present in an alkali flow.
                        </p>

                        {/* Colour Boxes for SAM */}
                        <div className="mt-4 grid grid-cols-2 gap-3">
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded" style={{ backgroundColor: "#7A0000" }}></div>
                                <span className="text-sm text-accent-dark-blue">KCl</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded" style={{ backgroundColor: "#001A4D" }}></div>
                                <span className="text-sm text-accent-dark-blue">NaCl</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded" style={{ backgroundColor: "#C85F00" }}></div>
                                <span className="text-sm text-accent-dark-blue">KOH</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded" style={{ backgroundColor: "#003399" }}></div>
                                <span className="text-sm text-accent-dark-blue">NaOH</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded" style={{ backgroundColor: "#FFA64D" }}></div>
                                <span className="text-sm text-accent-dark-blue">K₂CO₃</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded" style={{ backgroundColor: "#7F8CFF" }}></div>
                                <span className="text-sm text-accent-dark-blue">Na₂CO₃</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded" style={{ backgroundColor: "#FFE0B2" }}></div>
                                <span className="text-sm text-accent-dark-blue">K₂SO₄</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded" style={{ backgroundColor: "#D6D9FF" }}></div>
                                <span className="text-sm text-accent-dark-blue">Na₂SO₄</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto">
                <DualAxisChart />
            </div>
        </div>
    );
}

export default TAMSAM;