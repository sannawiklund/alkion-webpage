import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

// COMPONENT SECTIONS
import Methods from "../../../Pages/Technology/Methods";
import Instruments from "../../../Pages/Technology/Instruments";
import TAMSAM from "../../../Pages/Technology/TAM-SAM";

function Technology() {
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
            <section id="methods">
                <Methods />
            </section>

            <section id="instruments">
                <Instruments />
            </section>

            <section id="tam-sam">
                <TAMSAM />
            </section>
        </div>
    );
}

export default Technology;
