"use client";

import Section from "./Section";
import Button from "./Button";
import Image from "next/image";

export default function ValueProp() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-primary text-sm font-medium">
            Built FOR Subs, Not FOR Managing Subs
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Software That Actually Understands ICI Work
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Appello was built inside an industrial mechanical contractor and continues to stand out as the only purpose-built platform for ICI trade contractors.
          </p>
          
          {/* Enhanced feature points that connect to the visual */}
          <div className="space-y-4 pt-2">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Built for the Field</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Timesheets, job tracking, and forms that work where your crews actually work — on lifts, in mechanical rooms, at the job site.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-0.5">
                <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">From Shop to Site</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Seamlessly connects fabrication, field installation, project management, and office operations in one integrated platform.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">ICI-Specific Workflows</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Job costing, labor tracking, and project management designed specifically for mechanical, insulation, HVAC, and specialty contractors.</p>
              </div>
            </div>
          </div>
          
          <div>
            <Button href="https://meetings.hubspot.com/shelson/appello-demo">
              Book a Free Demo
            </Button>
          </div>
        </div>
        
        {/* Right Side - ICI Workers Collage */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/images/Untitled design (1).png"
              alt="ICI contractors working in various field settings - construction workers, sheet metal workers, and project teams using Appello"
              width={1200}
              height={900}
              className="w-full h-auto object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            
            {/* Subtle overlay for text readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
          </div>
        </div>
      </div>
    </Section>
  );
}
