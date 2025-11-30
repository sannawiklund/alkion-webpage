import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MAXIV from '../../Assets/Other/MAXIV.jpg';
import TextType from '../ComponentParts/TextType';

// COMPONENT SECTIONS
import Services from "../../Pages/Services";
import Applications from "../../Pages/Applications";
import Industries from "../../Pages/Industries";

function Solutions() {
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
    <div className="bg-accent-dark-blue w-full">

      {/* ---- Introduction Section -----*/}
      <div className="relative w-full h-auto min-h-[100px] flex items-center justify-center overflow-hidden">

        <div className=" flex flex-col justify-center items-center text-center py-10 z-10">

          <h1 className="text-4xl md:text-5xl font-semibold text-accent-green ">
            <TextType
              text={["Solutions"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              textColors={["var(--accent-green)"]}
              className="inline"
            />
          </h1>

          <p className="text-lg md:text-xl text-accent-beige leading-relaxed max-w-4xl italic">
            From extraction to conditioning and dilution - To data acquisition and analysis
          </p>

        </div>

      </div>

      {/* ---- SOLUTIONS PAGE-STRUCTURE -----*/}

      {/* SERVICES */}
      <section id="solutions">
        <Services />
      </section>

      {/* INDUSTRIES */}
      <section id="industries">
        <Industries />
      </section>

      {/* APPLICATIONS */}
      <section id="applications">
        <Applications />
      </section>



    </div>
  );
}

export default Solutions;
