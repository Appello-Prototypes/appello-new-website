"use client";

import { useState } from "react";
import Button from "./Button";
import Image from "next/image";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to your email service/HubSpot
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section className="bg-white py-12 md:py-20 lg:py-24 overflow-x-hidden" aria-label="Hero section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-4 items-center relative">
          {/* Left Column - Text Content */}
          <div className="space-y-6 lg:pr-8">
            {/* Badge - Improved styling with better contrast */}
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#EEF6FF] text-primary text-sm font-medium" aria-label="Purpose-built badge">
              <span className="mr-2" aria-hidden="true">⚡</span>
              Purpose-Built for ICI Subcontractors
            </div>
            
            {/* Headline - Optimized for clarity and scannability */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              More building.<br />Less paperwork.
            </h1>
            
            {/* Benefit Subheadline - Clear value prop */}
            <p className="text-xl md:text-2xl font-semibold text-gray-900">
              Built for ICI subcontractors.
            </p>
            
            {/* Body Text - Reduced density, improved flow */}
            <div className="space-y-3">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                The only platform built specifically for ICI subcontractors — so you can run your business without spreadsheets or disconnected apps.
              </p>
              
              <p className="text-lg md:text-xl text-gray-600">
                Replace spreadsheets, clipboards, and 5 disconnected apps with one integrated platform.
              </p>
            </div>
            
            {/* Email Form - Improved with heading and micro-copy */}
            <div className="space-y-3 pt-2">
              <h2 className="text-lg font-semibold text-gray-900">Get your free demo</h2>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg" aria-label="Demo request form">
                <label htmlFor="hero-email" className="sr-only">Email address</label>
                <input
                  id="hero-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address..."
                  required
                  aria-required="true"
                  className="flex-1 px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-base"
                />
                <Button type="submit" className="w-full sm:w-auto px-8 py-4" aria-label="Submit demo request">
                  Get Free Demo
                </Button>
              </form>
              <p className="text-sm text-gray-500">No credit card. No pressure.</p>
            </div>
            
            {submitted && (
              <p className="text-green-600 text-sm" role="status" aria-live="polite">
                Thank you! Your submission has been received!
              </p>
            )}
            
            {/* Social Proof - Simplified */}
            <div className="flex items-center gap-3 pt-2">
              <p className="text-sm text-gray-600">
                <span className="text-primary font-semibold" aria-hidden="true">*</span> Join Contractors Across North America Using Appello
              </p>
            </div>
          </div>
          
          {/* Right Column - Dashboard GIF - Extends off screen with improved contrast and accessibility */}
          <div className="relative lg:-mr-[calc((100vw-100%)/2-36rem)] lg:ml-auto">
            <div className="drop-shadow-lg">
              <img
                src="/images/website-exports.gif"
                alt="Appello software interface showing timesheet management, field forms, and job costing features for ICI subcontractors"
                className="w-full h-auto lg:w-[calc(60vw+4rem)] lg:max-w-none lg:scale-110 lg:origin-left"
                loading="eager"
                width={1200}
                height={800}
              />
            </div>
          </div>
        </div>
        
        {/* Feature Callout Bar - Quick capability overview */}
        <div className="mt-12 pt-8 border-t border-gray-200" aria-label="Key features">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center" aria-hidden="true">
                <span className="text-2xl">⏱️</span>
              </div>
              <span className="text-sm font-medium text-gray-900">Time Tracking</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center" aria-hidden="true">
                <span className="text-2xl">🔧</span>
              </div>
              <span className="text-sm font-medium text-gray-900">Equipment Management</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center" aria-hidden="true">
                <span className="text-2xl">💰</span>
              </div>
              <span className="text-sm font-medium text-gray-900">Job Costing</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center" aria-hidden="true">
                <span className="text-2xl">📋</span>
              </div>
              <span className="text-sm font-medium text-gray-900">Field Forms</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center" aria-hidden="true">
                <span className="text-2xl">📦</span>
              </div>
              <span className="text-sm font-medium text-gray-900">Purchase Orders</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
