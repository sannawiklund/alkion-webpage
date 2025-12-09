import React from 'react';
import ImageOne from '../Assets/Other/100kW.jpg';
import ImageTwo from '../Assets/Other/SID2-3.jpg';
import { CheckCircle } from "lucide-react";

function Services() {

    const [currentSlide, setCurrentSlide] = React.useState(0);
    const totalSlides = 2;

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 5000); // Auto-advance every 5 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative overflow-hidden py-20">
            <div className="relative mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    {/* LEFT: TEXT */}
                    <div className="text-left">
                        <div className="flex items-center gap-3 mb-4">
                            <CheckCircle className="w-8 h-8 text-accent-green" />
                            <span className="text-accent-beige text-lg font-medium tracking-wide">
                                Services
                            </span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl font-bold text-accent-beige leading-tight">
                            Complete Service Solutions
                        </h2>

                        <p className="mt-4 text-lg text-accent-beige/80 max-w-xl leading-relaxed">
                            Custom-made measurement systems designed for high-performance industrial applications.
                        </p>

                        <ul className="mt-6 space-y-4 text-accent-beige/90 text-lg">
                            <li className="flex gap-3 items-start">
                                <span className="inline-block mt-2 w-4 h-4 bg-accent-green rounded-full shadow-md flex-shrink-0"></span>
                                Aerosol measurements capturing both gases and particles.
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="inline-block mt-2 w-4 h-4 bg-accent-green rounded-full shadow-md flex-shrink-0"></span>
                                Extractive measurements for high loadings of condensable gases.
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="inline-block mt-2 w-4 h-4 bg-accent-green rounded-full shadow-md flex-shrink-0"></span>
                                Interpretation of alkali data for optimized process control.
                            </li>
                        </ul>

                    </div>

                    {/* RIGHT: IMAGE CAROUSEL */}
                    <div className="relative w-full overflow-hidden rounded-md shadow-2xl bg-black/10">

                        {/* Slides wrapper */}
                        <div className="flex transition-transform duration-700 ease-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}>

                            {/* Slide 1 */}
                            <div className="w-full flex-shrink-0">
                                <img
                                    src={ImageOne}
                                    alt="Combustion Test Facility"
                                    className="w-full h-64 sm:h-80 lg:h-[28rem] object-cover"
                                />
                            </div>

                            {/* Slide 2 */}
                            <div className="w-full flex-shrink-0">
                                <img
                                    src={ImageTwo}
                                    alt="SID2-3 Instrument"
                                    className="w-full h-64 sm:h-80 lg:h-[28rem] object-cover"
                                />
                            </div>

                        </div>

                        {/* Indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {[0, 1].map((i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentSlide(i)}
                                    className={`w-3 h-3 rounded-full transition-all ${currentSlide === i ? "bg-accent-green" : "bg-white/50"
                                        }`}
                                />
                            ))}
                        </div>


                    </div>

                </div>
            </div>
        </section>
    );
}

export default Services;
