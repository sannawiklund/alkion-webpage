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
        <div className="bg-accent-green w-full">

            <div className="relative w-full h-[200px]">

                {/* BACKGROUND IMAGE */}
                <img
                    src={MAXIV}
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover object-center "
                />

                {/* BLURRY OVERLAY */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-xs"></div>

                {/* OVERLAY CONTENT */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-2 z-10">

                    <h1 className="text-4xl md:text-6xl font-semibold text-accent-green mb-2">
                        <TextType
                            text={["Our Technology"]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                            textColors={["var(--accent-green)"]}
                            className="inline"
                        />
                    </h1>

                    <p className="text-lg md:text-2xl text-accent-beige leading-relaxed max-w-4xl italic">
                        Explore our advanced measurement technologies designed for precision and reliability
                    </p>

                </div>

            </div>


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