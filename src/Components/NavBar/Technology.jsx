import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import MAXIV from '../../Assets/Other/MAXIV.jpg';
import TextType from '../ComponentParts/TextType';


// COMPONENT SECTIONS
import Instruments from "../../Pages/Instruments";
import TAMSAM from "../../Pages/TAM-SAM";
import RnI from "../../Pages/RnI";


function Technology() {

    const { hash } = useLocation();

    // AUTO-SCROLL
    useEffect(() => {
        if (hash) {
            const target = document.querySelector(hash);
            if (target) {
                setTimeout(() => {
                    target.scrollIntoView({ behavior: "smooth" });
                }, 100); // small delay 
            }
        } else {
            window.scrollTo({ top: 0, behavior: "instant" });
        }
    }, [hash]);

    return (
        <div className="bg-accent-blue w-full">

            {/* ---- TECHNOLOGY PAGE-STRUCTURE -----*/}

            {/* INSTRUMENTS */}
            <section id="instruments">
                <Instruments />
            </section>

            {/* INDUSTRIES */}
            <section id="tam-sam">
                <TAMSAM />
            </section>

            {/* RnI */}
            <section id="research">
                <RnI />
            </section>



        </div>
    );
}

export default Technology;