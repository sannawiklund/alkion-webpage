import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
// COMPONENT SECTIONS
import Request from "../../../Pages/Contact/Request";


function ContactUS() {

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


            <section id="request">
                <Request />
            </section>



        </div>
    );
}

export default ContactUS;