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
    <div className="bg-accent-blue w-full">

      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <Threads
          amplitude={1}
          distance={0}
          enableMouseInteraction={true}
        />
      </div>

      {/* ---- SOLUTIONS INTRO ----- */}
      <section id="solutions-intro" className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-accent-green mb-6">
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

        <p className="text-lg md:text-xl text-accent-beige leading-relaxed">
          From extraction, to conditioning and
          dilution, to data acquisition and analysis.
        </p>

      </section>


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
