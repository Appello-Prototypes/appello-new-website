import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Section from "@/components/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real-Time Job Costing - Appello | See Profitability Live",
  description: "Know exactly where every job stands financially in real-time. Track labor, materials, and expenses by project. Catch overruns early.",
  openGraph: {
    title: "Real-Time Job Costing - Appello",
    description: "See profitability live with real-time job costing.",
  },
};

export default function JobCostingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <Section className="pt-24">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              See Your Business In Real-Time
            </h1>
            <p className="text-xl text-gray-600">
              Know exactly where every job stands financially. Track labor, materials, and expenses by project—catch overruns early, make informed decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Stop Waiting Until Month-End
              </h2>
              <p className="text-lg text-gray-700">
                Traditional job costing means waiting until month-end to know if jobs are profitable. By then, it's too late to make adjustments.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">✗</span>
                  <span>Discover overruns after the fact</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">✗</span>
                  <span>No ability to course-correct mid-project</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">✗</span>
                  <span>Reactive decision-making</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Real-Time Job Costing Benefits
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>See profitability as work happens</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Catch overruns early</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Make informed decisions today</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Track labor, materials, and expenses separately</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Compare actual costs to budget instantly</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-primary text-white rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Make Decisions With Confidence
            </h2>
            <p className="text-xl mb-8 opacity-90">
              See how real-time job costing can transform your project management.
            </p>
            <Button href="https://meetings.hubspot.com/shelson/appello-demo" variant="secondary">
              Book a Free Demo
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}


