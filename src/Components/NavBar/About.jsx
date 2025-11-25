import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import MAXIV from '../../Assets/Other/MAXIV.jpg';
import TextType from '../ComponentParts/TextType';


// COMPONENT SECTIONS
import Story from "../../Pages/Story";
import Team from "../../Pages/Team";
import Partners from "../../Pages/Partners";


function About() {

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
                            text={["About Us"]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                            textColors={["var(--accent-green)"]}
                            className="inline"
                        />
                    </h1>

                    <p className="text-lg md:text-xl text-accent-beige leading-relaxed max-w-4xl italic">
                        Learn more about our story, get to know the team and the partners who drive our success
                    </p>

                </div>

            </div>


            {/* ---- ABOUT PAGE-STRUCTURE -----*/}

            {/* STORY */}
            <section id="story">
                <Story />
            </section>

            {/* TEAM */}
            <section id="team">
                <Team />
            </section>

            {/* PARTNERS */}
            <section id="partners">
                <Partners />
            </section>



        </div>
    );
}

export default About;