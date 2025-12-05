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
    <div className="bg-gradient-to-b from-slate-900 to-[#153d64] w-full">

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
