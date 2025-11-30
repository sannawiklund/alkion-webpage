import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import MAXIV from '../../Assets/Other/MAXIV.jpg';
import TextType from '../ComponentParts/TextType';


// COMPONENT SECTIONS
import Request from "../../Pages/Request";


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

            {/* ---- Introduction Section -----*/}
            <div className="relative w-full h-auto min-h-[100px] flex items-center justify-center overflow-hidden">

                <div className=" flex flex-col justify-center items-center text-center pt-10 z-10">

                    <h1 className="text-4xl md:text-5xl font-semibold text-accent-green ">
                        <TextType
                            text={["Contact Us"]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                            textColors={["var(--accent-green)"]}
                            className="inline"
                        />
                    </h1>

                    <p className="text-lg md:text-xl text-accent-beige leading-relaxed max-w-4xl italic">
                        Get in touch with us or make a request. We look forward to hearing from you!
                    </p>

                </div>

            </div>


            {/* ---- CONTACT PAGE-STRUCTURE -----*/}

            <section id="request">
                <Request />
            </section>



        </div>
    );
}

export default ContactUS;