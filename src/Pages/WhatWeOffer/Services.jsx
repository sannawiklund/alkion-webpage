import React from 'react';
import ImageOne from '../../Assets/Other/100kW.jpg';
import ImageTwo from '../../Assets/Other/SID2-3.jpg';
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

function Services() {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [isPaused, setIsPaused] = React.useState(false);
    const totalSlides = 2;

    React.useEffect(() => {
        if (isPaused) return;

        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 5000);

        return () => clearInterval(timer);
    }, [isPaused]);

    const slides = [
        {
            src: ImageOne,
            alt: "Combustion Test Facility",
        },
        {
            src: ImageTwo,
            alt: "SID2-3 Instrument",
        }
    ];

    const servicePoints = [
        "Custom-built extraction and sampling systems",
        "Conditioning and dilution for high-temperature, high-load environments",
        "Gas + particle measurements with high alkali resolution",
        "Data interpretation and reporting",
        "On-site support and process optimization",
        "Integration with existing monitoring systems"
    ];

    const goToSlide = (index) => {
        setCurrentSlide(index);
        setIsPaused(true); 
        setTimeout(() => setIsPaused(false), 3000); 
    };

    return (
        <section 
            className="relative overflow-hidden pt-12 sm:pt-28  sm:pb-0 bg-accent-beige" 
        >
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                

                <div className="grid grid-cols-1 gap-8 lg:flex lg:gap-12 lg:items-stretch">

                    {/* LEFT: TEXT & SERVICES LIST */}
                    <div className="text-left order-2 lg:order-1 lg:w-1/2 flex flex-col justify-center"> 
                        
                        <div className="flex items-center gap-3 mb-4">
                            <CheckCircle className="w-7 h-7 text-accent-green" />
                            <span className="text-accent-green text-sm font-semibold uppercase tracking-widest">
                                Services & Solutions
                            </span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl font-extrabold text-accent-blue tracking-tight leading-tight mb-8">
                            Complete Service Solutions
                        </h2>

                        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-100">
                            <h3 className="text-2xl font-bold text-accent-blue mb-5">
                                What We Offer
                            </h3>
                            <ul className="space-y-3 text-accent-blue/90 text-base sm:text-lg">
                                {servicePoints.map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-accent-green mr-1 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* RIGHT: IMAGE CAROUSEL - Flexar 1/2 av utrymmet och använder full höjd */}
                    <div
                        className="relative w-full rounded-xl shadow-2xl bg-accent-blue/10 overflow-hidden order-1 lg:order-2 mt-0 lg:mt-0 lg:w-1/2 min-h-[280px] sm:min-h-[400px] md:min-h-[480px]"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        // Responsiv min-höjd via utility-klasser istället för inline-styles
                    >
                        {/* Slides (fade effect) */}
                        {slides.map((slide, index) => (
                            <img
                                key={index}
                                loading="lazy"
                                src={slide.src}
                                alt={slide.alt}
                                // Använder h-full och w-full för att fylla den flexibla div:en
                                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-out 
                                    ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                            />
                        ))}

                        <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none"></div>

                        {/* Previous Button */}
                        <button
                            aria-label="Previous slide"
                            onClick={() => goToSlide((currentSlide - 1 + totalSlides) % totalSlides)}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-accent-green bg-opacity-75 rounded-full hover:bg-opacity-100 transition duration-300 z-20"
                        >
                            <ChevronLeft className="w-4 h-4 text-white" />
                        </button>

                        {/* Next Button */}
                        <button
                            aria-label="Next slide"
                            onClick={() => goToSlide((currentSlide + 1) % totalSlides)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-accent-green bg-opacity-75 rounded-full hover:bg-opacity-100 transition duration-300 z-20"
                        >
                            <ChevronRight className="w-4 h-4 text-white" />
                        </button>

                        {/* Indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                            {[0, 1].map((i) => (
                                <button
                                    key={i}
                                    onClick={() => goToSlide(i)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === i ? "bg-accent-green scale-125" : "bg-white/70 hover:bg-white"}`}
                                    aria-label={`Go to slide ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* Horizontal line - Nu placerad direkt under innehållet */}
                <div className="w-full h-0.5 bg-accent-green/30 mx-auto mt-20"></div>

            </div>
        </section>
    );
}

export default Services;