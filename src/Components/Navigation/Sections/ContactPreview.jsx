import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

// COMPONENT SECTIONS
import Request from "../../../Pages/Contact/Request";

function ContactUs() {
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
            <section id="request">
                <Request />
            </section>
        </div>
    );
}

export default ContactUs;
