import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Section from "@/components/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Appello | Transparent Pricing for ICI Trade Contractors",
  description: "Simple, transparent pricing for ICI trade contractors. Choose the plan that fits your business size. No hidden fees, cancel anytime.",
  openGraph: {
    title: "Pricing - Appello",
    description: "Simple, transparent pricing for ICI trade contractors.",
  },
};

const pricingTiers = [
  {
    name: "Starter",
    price: "Custom",
    description: "Perfect for small contractors getting started",
    features: [
      "Up to 25 employees",
      "Crew Scheduling",
      "Mobile Timesheets",
      "Basic Job Costing",
      "Email Support",
      "Standard Onboarding",
    ],
    cta: "Book a Demo",
    popular: false,
  },
  {
    name: "Professional",
    price: "Custom",
    description: "For growing contractors who need full visibility",
    features: [
      "Up to 100 employees",
      "All Starter features",
      "Real-Time Job Costing",
      "Progress Billing",
      "Equipment Management",
      "Safety & Compliance",
      "QuickBooks Integration",
      "Priority Support",
      "Dedicated Onboarding",
    ],
    cta: "Book a Demo",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large contractors with complex needs",
    features: [
      "Unlimited employees",
      "All Professional features",
      "Advanced Reporting & Analytics",
      "Custom Integrations",
      "API Access",
      "Dedicated Account Manager",
      "Custom Training",
      "SLA Guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const faqs = [
  {
    question: "Do you offer a free trial?",
    answer: "Yes! We offer a personalized demo and can set up a trial period for qualified contractors. Book a demo to learn more.",
  },
  {
    question: "Can I change plans later?",
    answer: "Absolutely. You can upgrade or downgrade your plan at any time. We'll prorate any changes to your billing.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards and can also set up ACH payments for Enterprise customers.",
  },
  {
    question: "Is there a setup fee?",
    answer: "No setup fees. Our onboarding team will help you get started at no additional cost.",
  },
  {
    question: "What if I need to cancel?",
    answer: "You can cancel anytime with 30 days notice. No long-term contracts or cancellation fees.",
  },
  {
    question: "Do you offer discounts for annual plans?",
    answer: "Yes, we offer significant discounts for annual commitments. Contact us to learn more about annual pricing.",
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <Section className="pt-24">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600">
            Choose the plan that fits your business. All plans include full platform access with no hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl border-2 p-8 ${
                tier.popular
                  ? "border-primary shadow-lg scale-105"
                  : "border-gray-200"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {tier.name}
                </h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {tier.price}
                </div>
                <p className="text-gray-600">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                href={
                  tier.name === "Enterprise"
                    ? "/contact"
                    : "https://meetings.hubspot.com/shelson/appello-demo"
                }
                className="w-full"
                variant={tier.popular ? "primary" : "outline"}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center max-w-2xl mx-auto space-y-4">
          <p className="text-gray-600">
            All plans include: Hassle-free onboarding • World-class support • Regular feature updates • 99.9% uptime SLA
          </p>
          <p className="text-sm text-gray-500">
            Pricing is based on your company size and specific needs. Book a demo to get a custom quote.
          </p>
        </div>
      </Section>

      <Section background="gray">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600">
            Book a free demo to see Appello in action and get a custom quote for your business.
          </p>
          <Button href="https://meetings.hubspot.com/shelson/appello-demo">
            Book a Free Demo
          </Button>
        </div>
      </Section>

      <Footer />
    </main>
  );
}


