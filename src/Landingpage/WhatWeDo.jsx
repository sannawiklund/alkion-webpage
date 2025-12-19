import React from "react";
import { Cpu } from "lucide-react";
import { Link } from "react-router-dom";

function WhatWeDo() {
  return (
    <section className="relative w-full py-15 px-6 bg-slate-900 text-accent-beige overflow-hidden">

      {/* Soft overlay & texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-[#10293f] opacity-90 pointer-events-none" />
      <div className="absolute inset-0 backdrop-blur-sm pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-4xl text-center mx-auto">

        {/* Icon wrapper */}
        <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full border border-[var(--accent-green)] bg-white/5 shadow-lg shadow-[var(--accent-green)]/10">
          <Cpu className="w-10 h-10 text-[var(--accent-green)]" />
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold tracking-wide text-accent-green mb-6">
          What We Do
        </h2>

        {/* Text */}
        <p className="text-white/85 text-lg leading-relaxed whitespace-pre-line">
          We provide high-resolution alkali measurements for demanding industrial processes and advanced research applications. 
          Our solutions <strong>integrate</strong> advanced sampling, conditioning, and data interpretation to deliver reliable insights into alkali behavior in both gas and particle phases. 
          By enabling real-time monitoring and analysis, we help our customers optimize processes, reduce operational risks, and make <strong>informed data-driven decisions.</strong> 
        </p>

        {/* Read More Button */}
        <Link
          to="/about"
          state={{ scrollTo: "story" }}
          className="mt-2 sm:mt-10 px-6 md:px-8 xl:px-8 2xl:px-10 py-2 md:py-3 xl:py-3 2xl:py-4 
          font-medium text-sm sm:text-md md:text-md xl:text-md 2xl:text-lg 
          rounded-xs shadow-md hover:shadow-lg hover:scale-[1.03] 
          transition-all duration-300 flex items-center gap-2"
          style={{ backgroundColor: "var(--accent-green)", color: "var(--accent-beige)" }}
        >
          Read More About Our Story ➤
        </Link>


      </div>
    </section>
  );
}

export default WhatWeDo;
