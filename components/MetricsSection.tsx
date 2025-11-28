"use client";

import { CaseStudy } from "@/lib/case-studies";
import CaseStudyCard from "./CaseStudyCard";

interface MetricsSectionProps {
  caseStudies: CaseStudy[];
}

export default function MetricsSection({ caseStudies }: MetricsSectionProps) {
  const featuredCaseStudies = caseStudies.filter(cs => cs.featured);

  if (featuredCaseStudies.length === 0) {
    return null;
  }

  // Duplicate cards for seamless loop
  const duplicatedCaseStudies = [...featuredCaseStudies, ...featuredCaseStudies];

  return (
    <section className="bg-gradient-to-b from-white via-blue-50/10 to-white py-16 md:py-24 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-50/15 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full mb-4">
            <span className="text-primary text-xs font-semibold uppercase tracking-wider">Customer Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Built By Contractors, For Contractors
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how contractors are transforming their operations with Appello
          </p>
        </div>
        
        {/* Scrolling Cards Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex gap-6"
              style={{
                animation: `scrollCaseStudies ${featuredCaseStudies.length * 20}s linear infinite`,
              }}
            >
              {duplicatedCaseStudies.map((caseStudy, index) => (
                <div 
                  key={`${caseStudy.slug}-${index}`}
                  className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[480px]"
                >
                  <CaseStudyCard 
                    caseStudy={caseStudy} 
                    variant="light"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
      </div>
    </section>
  );
}
