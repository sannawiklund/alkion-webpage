import React, { useState } from "react";
import First from "../Assets/First.png";
import Second from "../Assets/Second.png";
import Third from "../Assets/Third.png";

function History2() {
    // Carousel data: images and their captions
    const slides = [
        {
            img: First,
            text: "Prototype development started in 2018 at Chalmers University."
        },
        {
            img: Second,
            text: "Alkion Technologies was founded with a vision for innovation."
        },
        {
            img: Third,
            text: "Our first breakthrough came in sustainable energy solutions."
        }
    ];

    const [current, setCurrent] = useState(0);
    const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);
    const nextSlide = () => setCurrent((current + 1) % slides.length);

    return (
        <div class="relative overflow-hidden bg-white">
            <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">

                    {/* Flex container for heading/text and carousel */}
                    <div class="flex flex-col lg:flex-row lg:items-start lg:space-x-12">
                        <div class="sm:max-w-lg flex-1">
                            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">The History of Alkion Technologies</h1>
                            <p class="mt-4 text-l text-gray-500 pt-2">Text about Chalmers, idea for product, from product to company. Text about Chalmers, idea for product, from product to company. Text about Chalmers, idea for product, from product to company. Text about Chalmers, idea for product, from product to company.</p>                        </div>
                        <div class="mt-10 lg:mt-0 flex-1 flex flex-col items-center">

                            {/* Carousel */}
                            <div class="w-64 h-80 flex flex-col items-center justify-center">
                                <div class="relative w-[30em] h-[30em] flex items-center justify-center">
                                    <img
                                        src={slides[current].img}
                                        alt=""
                                        class="w-[30em] h-[30em] object-cover rounded-lg"
                                    />
                                    {/* Prev/Next buttons */}
                                    <button
                                        class="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-10 rounded-full p-2"
                                        onClick={prevSlide}
                                        aria-label="Previous"
                                    >
                                        &#10094;
                                    </button>
                                    <button
                                        class="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-10 rounded-full p-2"
                                        onClick={nextSlide}
                                        aria-label="Next"
                                    >
                                        &#10095;
                                    </button>
                                </div>
                                <div class="mt-4 text-center text-gray-700">
                                    {slides[current].text}
                                </div>
                                <div class="mt-2 flex justify-center space-x-2">
                                    {slides.map((_, idx) => (
                                        <button
                                            key={idx}
                                            class={`w-2 h-2 rounded-full ${idx === current ? "bg-indigo-600" : "bg-gray-300"}`}
                                            onClick={() => setCurrent(idx)}
                                            aria-label={`Go to slide ${idx + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                            {/* End Carousel */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default History2;