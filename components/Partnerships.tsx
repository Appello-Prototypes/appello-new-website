"use client";

import { useState, useEffect } from "react";

// Trade association logos
const tradeAssociations = [
  { name: "LDCA", logo: "/images/association-logo-1.png" },
  { name: "ESICA", logo: "/images/association-logo-2.png" },
  { name: "CSIA", logo: "/images/association-logo-3.png" },
  { name: "MICA", logo: "/images/association-logo-4.png" },
  { name: "TIAC ACIT", logo: "/images/association-logo-5.png" },
  { name: "SMACNA", logo: "/images/association-logo-6.png" },
  { name: "BCA", logo: "/images/association-logo-7.png" },
  { name: "MIA", logo: "/images/association-logo-8.png" },
];

function AssociationLogo({ association, index }: { association: typeof tradeAssociations[0]; index: number }) {
  const [hasError, setHasError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 50);
    return () => clearTimeout(timer);
  }, [index]);

  if (hasError) {
    return (
      <div 
        className={`flex items-center justify-center w-full h-20 md:h-24 transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: `${index * 50}ms` }}
      >
        <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-xs font-medium border border-gray-200">
          {association.name}
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`flex items-center justify-center w-full h-20 md:h-24 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="relative w-full h-full group">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 group-hover:border-primary/30 group-hover:shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative w-full h-full flex items-center justify-center p-3 md:p-4">
          <img
            src={association.logo}
            alt={`${association.name} logo`}
            className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-110"
            loading="lazy"
            onError={() => setHasError(true)}
          />
        </div>
      </div>
    </div>
  );
}

export default function Partnerships() {
  return (
    <section className="bg-gradient-to-b from-white via-gray-50/30 to-white py-16 md:py-20 lg:py-24 border-y border-gray-100 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(circle_at_1px_1px,_rgb(0,0,0)_1px,_transparent_0)] bg-[length:32px_32px]"
        aria-hidden="true"
      ></div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 mb-4 shadow-sm">
            <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span className="text-primary text-xs font-semibold uppercase tracking-wider">Industry Memberships</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Proud Members Of Industry Associations Across North America
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Active participation in leading trade associations supporting contractors across the continent. We're committed to advancing the industry through collaboration and innovation.
          </p>
        </div>
        
        {/* Association Logos Grid - Full Width */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            {tradeAssociations.map((association, index) => (
              <AssociationLogo key={index} association={association} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

