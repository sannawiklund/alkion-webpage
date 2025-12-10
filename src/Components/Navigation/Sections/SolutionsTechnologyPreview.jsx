import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// COMPONENT SECTIONS
import Services from "../../../Pages/Solutions/Services";
import Applications from "../../../Pages/Solutions/Applications";
import Industries from "../../../Pages/Solutions/Industries";

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
