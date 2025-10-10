import React, { useState } from "react";
import First from "../Assets/First.png";
import Second from "../Assets/Second.png";
import Third from "../Assets/Third.png";

function History() {
    const slides = [
        {
            img: First,
            text: "Prototype development started in 2018 at Chalmers University.",
        },
        {
            img: Second,
            text: "Alkion Technologies was founded with a vision for innovation.",
        },
        {
            img: Third,
            text: "Our first breakthrough came in sustainable energy solutions.",
        },
    ];

    const [current, setCurrent] = useState(0);

    const prevSlide = () =>
        setCurrent((current - 1 + slides.length) % slides.length);
    const nextSlide = () => setCurrent((current + 1) % slides.length);

    return (
        <section className="relative overflow-hidden bg-[#f4f2f2] py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-12">
                    {/* Text Section */}
                    <div className="sm:max-w-lg flex-1">
                        <h1 className="text-4xl font-bold tracking-tight text-neutral-800 sm:text-5xl">
                            <span>The History of </span>
                            <span className="text-[#3daf36]">Alkion Technologies</span>
                        </h1>
                        <p className="mt-4 text-lg text-neutral-800">
                            Text about Chalmers, idea for product, from product to company. Text about Chalmers, idea for product, from product to company. Text about Chalmers, idea for product, from product to company.
                            Text about Chalmers, idea for product, from product to company. Text about Chalmers, idea for product, from product to company. Text about Chalmers, idea for product, from product to company.
                            Text about Chalmers, idea for product, from product to company. Text about Chalmers, idea for product, from product to company. Text about Chalmers, idea for product, from product to company.
                            Text about Chalmers, idea for product, from product to company. Text about Chalmers, idea for product, from product to company. Text about Chalmers, idea for product, from product to company.
                        </p>
                    </div>

                    {/* Carousel Section */}
                    <div className="mt-10 lg:mt-0 flex-1 flex flex-col items-center">
                        <div className="relative w-[24rem] sm:w-[28rem] lg:w-[30rem]">
                            <img
                                src={slides[current].img}
                                alt={`Slide ${current + 1}`}
                                className="w-full h-[30rem] object-cover rounded-xl shadow-lg transition-opacity duration-700"
                                key={slides[current].img}
                            />

                            {/* Prev/Next Buttons outside image */}
                            <button
                                onClick={prevSlide}
                                aria-label="Previous"
                                className="absolute -left-10 top-1/2 -translate-y-1/2 bg-gray-900 bg-opacity-70 hover:bg-opacity-100 text-white rounded-full p-2 shadow-md transition"
                            >
                                &#10094;
                            </button>
                            <button
                                onClick={nextSlide}
                                aria-label="Next"
                                className="absolute -right-10 top-1/2 -translate-y-1/2 bg-gray-900 bg-opacity-70 hover:bg-opacity-100 text-white rounded-full p-2 shadow-md transition"
                            >
                                &#10095;
                            </button>
                        </div>

                        {/* Slide Text */}
                        <p className="mt-4 text-center text-neutral-800 px-4">{slides[current].text}</p>

                        {/* Dots */}
                        <div className="mt-4 flex justify-center space-x-2">
                            {slides.map((_, idx) => (
                                <button
                                    key={idx}
                                    className={`w-3 h-3 rounded-full transition ${idx === current ? "bg-[#3daf36]" : "bg-gray-300 hover:bg-gray-400"
                                        }`}
                                    onClick={() => setCurrent(idx)}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default History;
