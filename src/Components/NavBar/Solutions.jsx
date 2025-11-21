import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Threads from '../../Components//Threads';

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

      <div className="relative w-full h-[400px]">

        {/* BACKGROUND EFFECT */}
        <Threads
          amplitude={1.5}
          distance={0.55}
          enableMouseInteraction={false}
          color={[2, 5, 2]}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            zIndex: 0
          }}
        />

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

          <p className="text-lg md:text-2xl text-accent-beige leading-relaxed max-w-4xl">
            From extraction to conditioning and dilution - To data acquisition and analysis.
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
