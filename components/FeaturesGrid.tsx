import Section from "./Section";
import Card from "./Card";
import Image from "next/image";

const features = [
  {
    title: "Crew Scheduling",
    subtitle: "Schedule Smarter",
    description: "Assign crews to jobs with certification cross-checking, drag-and-drop simplicity, and instant mobile notifications to your field teams.",
    image: "/images/feature-03.webp",
  },
  {
    title: "Mobile Timesheets / Punch Cards",
    subtitle: "Track Time Accurately",
    description: "GPS-enabled clock in/out with automatic union payroll calculations—multi-classification, shift differentials, prevailing wage, travel pay handled automatically.",
    image: "/images/feature-04.webp",
  },
  {
    title: "Equipment & Asset Management",
    subtitle: "Know Your Assets",
    description: "Full lifecycle management with QR codes: inspection history, installation records, service logs, work orders and mapping —all at your fingertips.",
    image: "/images/feature-05.webp",
  },
  {
    title: "Safety & Compliance",
    subtitle: "Stay Compliant",
    description: "Digital safety forms with conditional logic, certification tracking with expiration alerts, and instant audit-ready documentation.",
    image: "/images/feature-03.webp",
  },
  {
    title: "Real-Time Job Costing",
    subtitle: "See Profitability Live",
    description: "Know exactly where every job stands financially in real-time. Track labor, materials, and expenses by project—catch overruns early, make informed decisions.",
    image: "/images/feature-04.webp",
  },
  {
    title: "Progress Billing",
    subtitle: "Get Paid Faster",
    description: "Generate AIA-style progress invoices in minutes instead of hours. Automatic QuickBooks sync means you get paid 1-2 weeks faster—cashflow when you need it.",
    image: "/images/feature-05.webp",
  },
  {
    title: "**NEW** QuickBooks Online 2-Way Data Sync",
    subtitle: "Eliminate Double-Entry",
    description: "Bi-directional QuickBooks Online integration means timesheets, expenses, and invoices flow automatically—no more manual data entry or reconciliation headaches.",
    image: "/images/feature-03.webp",
  },
  {
    title: "Document Management",
    subtitle: "Find & Share Files Fast",
    description: "Store drawings, specs, contracts, and certifications in one searchable location. Field teams find what they need in seconds - goodbye non stop text messaging.",
    image: "/images/feature-04.webp",
  },
  {
    title: "Customer Portal",
    subtitle: "Collaborate Seamlessly",
    description: "Share project updates, documents, and progress with clients through a branded portal. Professional communication that sets you apart from competitors.",
    image: "/images/feature-05.webp",
  },
];

export default function FeaturesGrid() {
  return (
    <Section id="features" background="gray">
      <div className="space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Replace Five Systems With One Platform
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Stop juggling separate subscriptions for scheduling, time tracking, safety forms, equipment, and billing. Appello integrates everything ICI contractors actually need—no more, no less.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="h-full flex flex-col overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative w-full h-52 bg-gray-100 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={`${feature.title} - ${feature.subtitle} feature in Appello software for ICI subcontractors`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <h4 className="text-sm font-medium text-primary mb-3">
                  {feature.subtitle}
                </h4>
                <p className="text-gray-600 flex-grow leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center pt-8">
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Start with what you need today. Add modules as you grow. Full platform access from day one.
          </p>
        </div>
      </div>
    </Section>
  );
}
