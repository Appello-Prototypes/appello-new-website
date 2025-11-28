"use client";

import { useState } from "react";
import Section from "./Section";
import Button from "./Button";
import Card from "./Card";

const benefits = [
  {
    title: "Hassle Free Onboarding",
    description: "Our dedicated onboarding team handles the heavy lifting so you don't have to.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Transparent Pricing",
    description: "Simple, transparent and fair pricing based on your size and the features you use.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "World-Class Customer Support",
    description: "We pride ourselves on our personal, dedicated customer support that actually picks up the phone.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    gradient: "from-green-500 to-emerald-500",
  },
];

export default function CTASection() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "" });

  const validateForm = () => {
    const newErrors = { name: "", email: "" };
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    setErrors(newErrors);
    return !newErrors.name && !newErrors.email;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // In production, this would submit to your email service/HubSpot
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "" });
        setErrors({ name: "", email: "" });
      }, 3000);
    }
  };

  return (
    <Section className="bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Section */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider">
            Check out how Appello can help you
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Ready to Leave the Multiple Disconnected Systems Behind?
          </h2>
          <p className="text-xl text-gray-600">
            Join Contractors Across North America Using Appello
          </p>
        </div>
        
        {/* Benefits Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${benefit.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
        
        {/* Demo Booking Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-blue-50/50 to-primary/5 rounded-2xl"></div>
          <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 lg:p-16 border border-gray-200 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Form Section */}
              <div className="space-y-8">
                <div className="space-y-3">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    See Appello in action
                  </h3>
                  <p className="text-xl text-primary font-semibold">
                    Book a Free Demo!
                  </p>
                  <p className="text-gray-600 mt-4">
                    Get a personalized walkthrough tailored to your business needs
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: "" });
                      }}
                      placeholder="John Smith"
                      required
                      className={`w-full px-5 py-3.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                        errors.name ? "border-red-300 bg-red-50" : "border-gray-300 bg-white"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: "" });
                      }}
                      placeholder="john@company.com"
                      required
                      className={`w-full px-5 py-3.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                        errors.email ? "border-red-300 bg-red-50" : "border-gray-300 bg-white"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>
                  
                  <Button className="w-full text-lg py-4 shadow-lg hover:shadow-xl transition-all" type="submit">
                    {submitted ? "✓ Request Received!" : "Get Started Free"}
                  </Button>
                  
                  {submitted && (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                      <p className="text-green-800 font-medium">
                        Thank you! We'll be in touch shortly to schedule your demo.
                      </p>
                    </div>
                  )}
                </form>
                
                {/* Trust Indicators */}
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center gap-3 text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">Built with customer feedback from day one</span>
                  </div>
                </div>
              </div>
              
              {/* Benefits List */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 space-y-6">
                <h4 className="text-xl font-bold text-gray-900 mb-6">
                  What you get:
                </h4>
                <div className="space-y-4">
                  {[
                    "Personalized demo tailored to your pain points",
                    "Discovery questions to understand your needs",
                    "Module overview and case study materials",
                    "See how Appello addresses your specific challenges",
                    "Transparent modular pricing discussion",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Trusted by Trade Contractors Across North America</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
