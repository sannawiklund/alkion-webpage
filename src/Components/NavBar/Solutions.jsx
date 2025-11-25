import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Threads from '../../Components//Threads';
import MAXIV from '../../Assets/Other/MAXIV.jpg';

// COMPONENT SECTIONS
import Services from "../../Pages/Services";
import Applications from "../../Pages/Applications";
import Industries from "../../Pages/Industries";
import TextType from '../ComponentParts/TextType';

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

      <div className="relative w-full h-[200px]">

        {/* BACKGROUND IMAGE */}
        <img
          src={MAXIV}
          alt="Solutions Background"
          className="absolute inset-0 w-full h-full object-cover object-center "
        />

        {/* BLURRY OVERLAY */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-xs"></div>

        {/* OVERLAY CONTENT */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-2 z-10">

          <h1 className="text-4xl md:text-6xl font-semibold text-accent-green mb-2">
            <TextType
              text={["Our Solutions"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              textColors={["var(--accent-green)"]}
              className="inline"
            />
          </h1>

          <p className="text-lg md:text-2xl text-accent-beige leading-relaxed max-w-4xl italic">
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
