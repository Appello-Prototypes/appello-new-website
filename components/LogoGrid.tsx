"use client";

import { useState, useEffect } from "react";

// Logo grid component for displaying contractor logos
// 24 logos total: 6 per row, 4 rows
// Update company names as needed
const contractorLogos = [
  { name: "Hexcon", logo: "/images/1.png" },
  { name: "All Temperature Insulations", logo: "/images/2.png" },
  { name: "Collins Construction", logo: "/images/3.png" },
  { name: "EPI Insulation Company", logo: "/images/4.png" },
  { name: "Headrick Insulation", logo: "/images/5.png" },
  { name: "Southern States Insulation", logo: "/images/6.png" },
  { name: "R.A. Barnes Ltd.", logo: "/images/7.png" },
  { name: "Westglas Insulation", logo: "/images/8.png" },
  { name: "Owens Insulation", logo: "/images/9.png" },
  { name: "Thomas Kanata Inc.", logo: "/images/10.png" },
  { name: "Thermogenix", logo: "/images/11.png" },
  { name: "Vanos Insulations", logo: "/images/12.png" },
  { name: "Rival Insulation LLC", logo: "/images/13.png" },
  { name: "ACE", logo: "/images/14.png" },
  { name: "Mkwa Contracting", logo: "/images/15.png" },
  { name: "Bluewater Energy", logo: "/images/16.png" },
  { name: "LJ Insulation", logo: "/images/17.png" },
  { name: "SMS Industrial", logo: "/images/18.png" },
  { name: "Thermec Insulation", logo: "/images/19.png" },
  { name: "Waterpool Refrigeration", logo: "/images/20.png" },
  { name: "Sommerdyk Construction", logo: "/images/21.png" },
  { name: "Clement Construction", logo: "/images/22.png" },
  { name: "Bison Management Solutions", logo: "/images/23.png" },
  { name: "Contractor 24", logo: "/images/24.png" },
];

function LogoItem({ contractor, index }: { contractor: typeof contractorLogos[0]; index: number }) {
  const [hasError, setHasError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Staggered fade-in animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 30); // 30ms delay between each logo
    return () => clearTimeout(timer);
  }, [index]);

  // Calculate animation delay for floating effect (creates wave pattern)
  const floatDelay = index * 0.15;
  const floatDuration = 3 + (index % 3) * 0.5; // Vary duration between 3-4.5s

  if (hasError) {
    return (
      <div 
        className={`flex items-center justify-center w-full h-20 md:h-24 lg:h-28 transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: `${index * 30}ms` }}
      >
        <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-xs font-medium">
          {contractor.name.split(' ')[0]}
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`flex items-center justify-center w-full h-20 md:h-24 lg:h-28 group transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ 
        transitionDelay: `${index * 30}ms`,
        animation: `float ${floatDuration}s ease-in-out infinite`,
        animationDelay: `${floatDelay}s`
      }}
    >
      <div className="relative w-full h-full flex items-center justify-center p-2 md:p-3 rounded-lg bg-white border border-transparent group-hover:border-gray-200 group-hover:shadow-xl transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:-translate-y-1">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative w-full h-full flex items-center justify-center opacity-100 group-hover:opacity-100 transition-all duration-300 ease-in-out">
          <img
            src={contractor.logo}
            alt={`${contractor.name} logo`}
            className="max-w-full max-h-full object-contain filter drop-shadow-sm group-hover:drop-shadow-lg transition-all duration-300"
            loading="lazy"
            onError={() => setHasError(true)}
          />
        </div>
      </div>
    </div>
  );
}

export default function LogoGrid() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-20 lg:py-24 border-y border-gray-100 relative overflow-hidden">
      {/* Animated background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,_rgb(0,0,0)_1px,_transparent_0)] bg-[length:24px_24px]"
        style={{
          animation: 'patternMove 20s linear infinite'
        }}
        aria-hidden="true"
      ></div>
      
      {/* Floating gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} aria-hidden="true"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced heading with subtle animation */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 mb-4 animate-fade-in">
            <span className="text-primary text-xs font-semibold uppercase tracking-wider">Trusted Partners</span>
          </div>
          <h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3"
            style={{
              animation: 'fadeInUp 0.8s ease-out'
            }}
          >
            Used by Top Contractors Across North America
          </h2>
          <p 
            className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto"
            style={{
              animation: 'fadeInUp 0.8s ease-out 0.2s both'
            }}
          >
            Join industry leaders who trust Appello to power their operations
          </p>
        </div>
        
        {/* Enhanced Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 lg:gap-10 items-center justify-items-center">
          {contractorLogos.map((contractor, index) => (
            <LogoItem key={index} contractor={contractor} index={index} />
          ))}
        </div>
        
        {/* Bottom accent with animation */}
        <div className="mt-12 md:mt-16 text-center">
          <div 
            className="inline-flex items-center gap-2 text-sm text-gray-500"
            style={{
              animation: 'fadeIn 1s ease-out 0.5s both'
            }}
          >
            <div className="h-px w-12 bg-gray-300"></div>
            <span>24+ Trusted Partners</span>
            <div className="h-px w-12 bg-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

