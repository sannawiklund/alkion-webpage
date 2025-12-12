import React from "react";
import { Atom } from "lucide-react";

export default function Methods() {
    return (
        <section className="relative pt-16 sm:pt-20 ">
            <div className="relative z-10 max-w-6xl mx-auto px-6">

                {/* HEADER */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Atom className="w-8 h-8 sm:w-9 sm:h-9 text-accent-green" />
                        <span className="text-accent-beige text-lg sm:text-xl font-medium tracking-wide">
                            Methods
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-beige leading-tight">
                        Fyll på med metodbeskrivning här
                    </h2>

                </div>

            </div>
        </section>
    );
}
