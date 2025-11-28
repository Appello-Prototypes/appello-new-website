"use client";

import Image from "next/image";

export default function QuickBooksIntegration() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50/30 py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,_rgb(0,0,0)_1px,_transparent_0)] bg-[length:32px_32px]" aria-hidden="true"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8 md:mb-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg mb-4">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-xs font-bold uppercase tracking-wider">Intuit QuickBooks Silver Partner</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Appello + QuickBooks Online Integration
            </h2>
            <p className="text-lg md:text-xl text-blue-600 font-semibold max-w-3xl mx-auto mb-2">
              Eliminate manual entry. Automate job costing with real-time, two-way sync.
            </p>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Direct API integration with enterprise-grade reliability. Designed for construction teams that want accurate books without extra admin work.
            </p>
          </div>

          {/* Main Content Grid - Benefits and Video - Starts right after description */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* Left Side - Benefits */}
            <div>
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 text-center lg:text-left">
                  Enterprise-Grade Integration Benefits
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Two-way sync</h4>
                      <p className="text-sm text-gray-600">Automatically sync Bills, Invoices, Payments, Jobs, and Expenses between Appello and QuickBooks Online in real-time.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">One-click mapping</h4>
                      <p className="text-sm text-gray-600">Easily map customers, vendors, wage rates, and GL accounts with a single click. No complex configuration required.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Accurate job costing</h4>
                      <p className="text-sm text-gray-600">Precise job costing with sub-customer sync and project sync. Track every dollar across your construction projects.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Eliminate hours of admin work</h4>
                      <p className="text-sm text-gray-600">Designed for construction teams that want accurate books without extra admin work. See how Appello + QuickBooks eliminate manual entry.</p>
                    </div>
                  </div>
                </div>
                
                {/* GIF and Intuit Badge - Side by side below "Eliminate hours of admin work" */}
                <div className="pt-6 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 items-center">
                  {/* Appello + QuickBooks Integration GIF */}
                  <div className="relative w-full">
                    <Image
                      src="/images/Untitled (600 x 150 px).gif"
                      alt="Appello + QuickBooks Online Integration"
                      width={600}
                      height={150}
                      className="w-full h-auto object-contain"
                      unoptimized
                    />
                  </div>
                  
                  {/* Intuit Silver Partner Badge */}
                  <div className="relative w-full max-w-[200px] h-[140px] group justify-self-start md:justify-self-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/Intuit-silver-partner .png"
                        alt="Intuit QuickBooks Silver Partner Badge"
                        fill
                        className="object-contain drop-shadow-2xl group-hover:scale-105 transition-all duration-300 group-hover:drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
                        sizes="200px"
                      />
                      {/* Enhanced shine animation on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-lg">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - YouTube Short Video */}
            <div className="space-y-6">
              <div className="aspect-[9/16] max-w-md mx-auto rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/aZgr1i_GfE8"
                  title="QuickBooks Online Integration with Appello"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-center text-sm text-gray-600">
                See how Appello + QuickBooks eliminate hours of admin work —{" "}
                <a href="https://meetings.hubspot.com/shelson/appello-demo" className="text-blue-600 font-semibold underline hover:text-blue-700">
                  book a demo
                </a>{" "}
                today.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

