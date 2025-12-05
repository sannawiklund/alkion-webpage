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
        <div className="bg-accent-blue w-full">

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