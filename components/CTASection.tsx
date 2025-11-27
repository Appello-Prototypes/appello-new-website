"use client";

import { useState } from "react";
import Section from "./Section";
import Button from "./Button";
import Card from "./Card";

const benefits = [
  {
    title: "Hassle Free Onboarding",
    description: "Our dedicated onboarding team handles the heavy lifting so you don't have to.",
    icon: "🚀",
  },
  {
    title: "Transparent Pricing",
    description: "Simple, transparent and fair pricing based on your size and the features you use.",
    icon: "💰",
  },
  {
    title: "World-Class Customer Support",
    description: "We pride ourselves on our personal, dedicated customer support that actually picks up the phone.",
    icon: "📞",
  },
];

export default function CTASection() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to your email service/HubSpot
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "" });
    }, 3000);
  };

  return (
    <Section>
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <p className="text-gray-600 text-lg">Check out how Appello can help you.</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Ready to Leave the Multiple Disconnected Systems Behind?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
        
        <div className="bg-gray-50 rounded-xl p-8 md:p-12 border border-gray-200">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                See Appello in action <span className="text-primary">Book a Free Demo!</span>
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Company Email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Button className="w-full" type="submit">
                  Get Started
                </Button>
              </form>
              {submitted && (
                <p className="text-green-600 text-sm mt-2 text-center">
                  Thank you! Your submission has been received!
                </p>
              )}
              {/* Rating moved below form */}
              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <p className="text-lg font-semibold text-gray-900">4.80/5</p>
                <p className="text-sm text-gray-600">From 300+ Customer Reviews</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200 space-y-4">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span className="text-green-600 text-lg">✓</span>
                <span>Free 7-day trial</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span className="text-green-600 text-lg">✓</span>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span className="text-green-600 text-lg">✓</span>
                <span>Cancel anytime</span>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Go live in as quick as 2 weeks • Personal hands-on onboarding
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Button href="https://meetings.hubspot.com/shelson/appello-demo" variant="primary">
            Book a Free Demo!
          </Button>
        </div>
      </div>
    </Section>
  );
}
