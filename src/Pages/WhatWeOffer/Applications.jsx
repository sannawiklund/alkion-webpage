import React from "react";
import { Cog, Flame, BatteryFull, Leaf } from "lucide-react";

function Applications() {
  const industries = [
    {
      icon: Flame,
      label: "Heat & Power",
      description: "Solutions to optimize fuel conversion and power generation, while mitigating corrosion and emissions."
    },
    {
      icon: BatteryFull,
      label: "Recycling & Next-gen Na/K batteries",
      description: "Advanced monitoring for cutting-edge battery technologies and sustainable recycling."
    },
    {
      icon: Leaf,
      label: "Environmental & Atmospheric science",
      description: "Supplying measurement solutions for climate and environmental research."
    }
  ];

  const applications = [
    "Real-time alkali release measurements",
    "Alkali speciation and conversion tracking",
    "Corrosion, fouling and agglomeration mitigation",
    "Fuel characterization",
    "Catalysis and reaction kinetics",
    "Aerosol science",
  ];

  return (
    <section
      id="applications"
      className="pt-14 sm:pt-20 sm:pb-20 bg-accent-beige text-accent-blue"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header Section */}
        <div className="mb-12 sm:mb-12 max-w-4xl mx-auto text-center">
            
          <div className="flex items-center justify-center gap-3 mb-3">
            <Cog className="w-6 h-6 sm:w-8 sm:h-8 text-accent-green" />
            <span className="text-accent-green text-sm sm:text-xl font-medium tracking-wide">
              Applications & Industries
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-accent-blue tracking-tight">
            Precision Measurements Across Industries
          </h2>

          <p className="mt-8 text-base sm:text-lg text-accent-blue/80 max-w-6xl mx-auto">
            Our product applications span a diverse array of industries and fields. From
            enhancing combustion efficiency in power generation to pioneering advancements in
            battery technologies and environmental research, our solutions are engineered to
            meet the unique challenges of each sector.
          </p>
        </div>

        {/* Applications List Section */}
        <div className="mb-8 sm:mb-15"> 

          <h3 className="text-3xl sm:text-5xl font-bold text-accent-blue mb-6 text-center">
            Key Applications
          </h3>

          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 lg:p-10 border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-5 text-base sm:text-md text-accent-blue/90">
              {applications.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <svg className="w-5 h-5 text-accent-green mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Industries Section */}
        <div className="mb-12">
            <h3 className="text-3xl sm:text-5xl font-bold text-accent-blue text-center mb-6">
                Industries
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {industries.map(({ icon: Icon, label, description }, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-xl shadow-lg p-6 lg:p-8 border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col"
                    >
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="p-3 rounded-full bg-accent-green/20 text-accent-green flex-shrink-0">
                                <Icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-accent-blue leading-tight">
                                {label}
                            </h3>
                        </div>
                        <p className="text-sm sm:text-base text-accent-blue/80 leading-relaxed">
                            {description}
                        </p>
                    </div>
                ))}
            </div>
        </div>

        {/* Horizontal line */}
        <div className="w-full h-0.5 bg-accent-green/30 mx-auto mt-20"></div>

      </div>
    </section>
  );
}

export default Applications;