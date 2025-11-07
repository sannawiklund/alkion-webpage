import React from "react";
import { Clock } from "lucide-react"; 

function ComingSoon() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center bg-gradient-to-b from-slate-900 to-[#153d64] text-accent-beige py-20 px-6 overflow-hidden">
      
      <div className="absolute inset-0 backdrop-blur-sm bg-black/20 z-[-1]" />

      {/* Icon */}
      <div className="mb-6">
        <Clock className="w-15 h-15 text-[var(--accent-green)]" />
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
        More Content Coming Soon
      </h2>

      <p className="max-w-xl text-white/80 text-base sm:text-lg leading-relaxed mb-8">
        We are currently finalizing our webpage.
        Check back soon for updates!
      </p>

    </section>
  );
}

export default ComingSoon;
