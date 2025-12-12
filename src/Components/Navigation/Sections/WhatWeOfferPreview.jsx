import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

// COMPONENT SECTIONS
import Services from "../../../Pages/WhatWeOffer/Services";
import Applications from "../../../Pages/WhatWeOffer/Applications";
import Industries from "../../../Pages/WhatWeOffer/Industries";
import RnD from "../../../Pages/WhatWeOffer/RnD";

function WhatWeOffer() {
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
    <>
      <section id="services"><Services /></section>
      <section id="applications"><Applications /></section>
      <section id="industries"><Industries /></section>
      <section id="research"><RnD /></section>
    </>
  );
}

export default WhatWeOffer;
