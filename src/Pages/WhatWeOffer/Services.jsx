import React from 'react';
import ImageOne from '../../Assets/Other/100kW.jpg';
import ImageTwo from '../../Assets/Other/SID2-3.jpg';
import { CheckCircle, ChevronLeft, ChevronRight, TrendingUp, Droplet, Search, Zap } from "lucide-react"; // Lade till Zap för den nya listan


// --- Custom Tab Content Component 
const TabContent = ({ activeTab }) => {
    // 1. Content for tab 1: Extraction
    const extractionContent = (
        <>
            <p className="text-accent-blue/90 mb-4 font-medium text-base sm:text-base">
                Our high-temperature sampling probes are designed to extract a representative fraction of the gas and aerosol stream from the reactor core.
            </p>
            <p className="text-accent-blue/80 text-sm sm:text-base">
                The probes are the result of extensive research into alkali behavior at high temperatures, where even small thermal or flow disturbances can cause condensation, deposition, or chemical loss in sampling lines. Our system minimizes alkali losses and ensures that what enters the sampling system accurately reflects the true process conditions.
            </p>
        </>
    );

    // 2. Content for tab 2: Conditioning & Dilution
    const conditioningContent = (
        <>
            <p className="text-accent-blue/90 mb-4 font-medium text-base sm:text-base">
                The alkali-rich stream needs to be cooled, diluted, and conditioned to prevent condensation or deposition, ensuring stable operation even under extreme alkali loads.
            </p>
            <p className="text-accent-blue/80 text-sm sm:text-base">
                Alkali compounds can rapidly diffuse to and interact with the walls of the sampling line when temperature or flow is not precisely controlled, leading to clogged lines, drifting measurements, and unreliable data. Our conditioning systems apply well-defined cooling profiles, dilution procedures, and flow regimes developed through years of research, providing sample stability that cannot be achieved with standard or improvised setups.
            </p>
        </>
    );

    // 3. Content for tab 3: Analysis & Interpretation
    const analysisContent = (
        <>
            <p className="text-accent-blue/90 mb-4 font-medium text-base sm:text-base">
                With our detailed alkali monitoring services you can get the information needed to take your process one step further.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">

                {/* Data Provided */}
                <div>
                    <h4 className="font-bold text-accent-green mb-2 flex items-center gap-2">
                        <Search className="w-4 h-4" /> Time-resolved Data
                    </h4>
                    <ul className="space-y-2 text-accent-blue/80 text-sm">
                        <li>- Alkali release profiles</li>
                        <li>- Temperature-dependent Behavior</li>
                        <li>- Gas-to-Particle Partitioning</li>
                        <li>- Transport Phenomena</li>
                        <li>- Speciation Dynamics</li>
                    </ul>
                </div>
                
                {/* Actionable Insights */}
                <div>
                    <h4 className="font-bold text-accent-green mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" /> Actionable Insights
                    </h4>
                    <ul className="space-y-2 text-accent-blue/80 text-sm">
                        <li>- Process Optimization</li>
                        <li>- Corrosion Mitigation</li>
                        <li>- Reaction Kinetics or Activation Properties</li>
                        <li>- Fuel Quality Evaluation</li>
                        <li>- Emission Control Strategies</li>
                    </ul>
                </div>
            </div>
        </>
    );

    switch (activeTab) {
        case 0:
            return extractionContent;
        case 1:
            return conditioningContent;
        case 2:
            return analysisContent;
        default:
            return null;
    }
};


function Services() {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [isPaused, setIsPaused] = React.useState(false);
    const [activeTab, setActiveTab] = React.useState(0); 
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

    const tabs = [
        { name: "Extraction", icon: TrendingUp },
        { name: "Conditioning & Dilution", icon: Droplet },
        { name: "Analysis & Interpretation", icon: Search },
    ];

    const highlights = [
        "High-resolution alkali measurements in both gas and particle phases",
        "Custom-built extraction and sampling systems",
        "Stable operation in high-temperature and high-load conditions",
        "On-site monitoring and process optimization",
        "Data interpretation and reporting"
    ];


    const goToSlide = (index) => {
        setCurrentSlide(index);
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 3000);
    };

    return (
        <section
            className="relative overflow-hidden pt-12 sm:pt-28 bg-accent-beige" 
        >
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

                <div className="grid grid-cols-1 gap-8 lg:flex lg:gap-12 lg:items-start">

                    {/* LEFT: TEXT & SERVICES TABS */}
                    <div className="text-left order-2 lg:order-1 lg:w-3/5 flex flex-col justify-center">

                        <div className="flex items-center gap-3 mb-4">
                            <CheckCircle className="w-7 h-7 text-accent-green" />
                            <span className="text-accent-green text-sm font-semibold uppercase tracking-widest">
                                Services & Solutions
                            </span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl font-extrabold text-accent-blue tracking-tight leading-tight mb-6 sm:mb-8">
                            Complete Monitoring Solutions
                        </h2>
                        
                        {/* --- LIST --- */}
                        <div className="mb-8">
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 text-accent-blue/80 text-base">
                                {highlights.map((item, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-100">

                            {/* Tabs Navigation */}
                            <div className="flex space-x-2 sm:space-x-4 mb-6 border-b border-gray-200 overflow-x-auto">
                                {tabs.map((tab, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveTab(index)}
                                        className={`pb-3 px-1 flex items-center gap-2 text-sm sm:text-base font-semibold transition-all duration-300 whitespace-nowrap ${activeTab === index
                                                ? 'text-accent-green border-b-2 border-accent-green'
                                                : 'text-accent-blue/60 hover:text-accent-blue'
                                            }`}
                                    >
                                        <tab.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                        <span>{tab.name}</span>
                                    </button>
                                ))}
                            </div>

                            {/* Tab Content Area */}
                            <div>
                                <TabContent activeTab={activeTab} />
                            </div>

                        </div>
                    </div>

                    {/* RIGHT: IMAGE CAROUSEL */}
                    <div
                        className="relative w-full rounded-xl shadow-2xl bg-accent-blue/10 overflow-hidden order-2 lg:order-2 mt-0 lg:mt-0 lg:w-2/5 min-h-[280px] sm:min-h-[400px] md:min-h-[480px] lg:min-h-[600px] xl:min-h-[600px]" 
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {/* Slides */}
                        {slides.map((slide, index) => (
                            <img
                                key={index}
                                loading="lazy"
                                src={slide.src}
                                alt={slide.alt}
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

                {/* Horizontal line */}
                <div className="w-full h-0.5 bg-accent-green/30 mx-auto mt-12 sm:mt-20"></div> 

            </div>
        </section>
    );
}

export default Services;