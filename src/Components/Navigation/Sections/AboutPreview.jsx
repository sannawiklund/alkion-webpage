import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// COMPONENT SECTIONS
import Story from "../../../Pages/About/Story";
import Team from "../../../Pages/About/Team";
import Partners from "../../../Pages/About/Partners";

function About() {
    const location = useLocation();
    const scrolled = useRef(false);

    useEffect(() => {
        if (!location.state?.scrollTo) return;

        const id = location.state.scrollTo;
        const el = document.getElementById(id);
        if (!el) return;

        setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
    }, [location.state]);


    return (
        <div className="bg-accent-blue w-full">
            <section id="story">
                <Story />
            </section>

            <section id="team">
                <Team />
            </section>

            <section id="partners">
                <Partners />
            </section>
        </div>
    );
}

export default About;
