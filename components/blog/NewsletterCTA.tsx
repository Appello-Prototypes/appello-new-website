"use client";

import { useState } from "react";
import Button from "@/components/Button";

interface NewsletterCTAProps {
  title?: string;
  description?: string;
}

export default function NewsletterCTA({
  title = "Stay Updated",
  description = "Get the latest insights and updates delivered to your inbox.",
}: NewsletterCTAProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with HubSpot forms API or email service
    console.log("Newsletter signup:", email);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 md:p-10 my-8 text-center shadow-lg">
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h3>
      <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">{description}</p>
      
      {submitted ? (
        <div className="text-white font-medium">Thanks for subscribing!</div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 text-gray-900"
          />
          <Button
            type="submit"
            className="bg-white text-primary hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all"
          >
            Subscribe
          </Button>
        </form>
      )}
    </div>
  );
}


