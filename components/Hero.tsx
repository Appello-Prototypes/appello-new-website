"use client";

import { useState } from "react";
import Button from "./Button";

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
    <section className="bg-white py-16 md:py-24 lg:py-32 overflow-x-hidden" aria-label="Hero section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[2.5fr_2fr] gap-4 lg:gap-4 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-primary text-sm font-semibold">
              <span className="mr-2" aria-hidden="true">⚡</span>
              Purpose-Built for ICI Subcontractors
            </div>
            
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
              Built for the trades who<br />
              <span className="text-primary">actually do the work.</span>
            </h1>
            
            {/* Body Text */}
            <div className="space-y-3 max-w-2xl">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                The only platform built specifically for ICI subcontractors — so you can run your business without spreadsheets or disconnected apps.
              </p>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Replace spreadsheets, clipboards, and 5 disconnected apps with one integrated platform.
              </p>
            </div>
            
            {/* Email Form */}
            <div className="space-y-3 pt-2">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl" aria-label="Demo request form">
                <label htmlFor="hero-email" className="sr-only">Email address</label>
                <input
                  id="hero-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  aria-required="true"
                  className="flex-1 px-5 py-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base transition-colors"
                />
                <Button type="submit" className="w-full sm:w-auto px-8 py-4 whitespace-nowrap" aria-label="Submit demo request">
                  Get Free Demo
                </Button>
              </form>
              <p className="text-sm text-gray-500">No credit card required. No pressure.</p>
            </div>
            
            {submitted && (
              <p className="text-green-600 text-sm font-medium" role="status" aria-live="polite">
                Thank you! Your submission has been received!
              </p>
            )}
          </div>
          
          {/* Right Column - Dashboard Image */}
          <div className="relative lg:-ml-4">
            <img
              src="/images/website-exports.gif"
              alt="Appello software interface showing timesheet management, field forms, and job costing features for ICI subcontractors"
              className="w-full h-auto lg:w-[calc(100%+12rem)] lg:max-w-none lg:scale-[1.55] lg:origin-left"
              loading="eager"
              width={1200}
              height={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
