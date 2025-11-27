import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Section from "@/components/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crew Scheduling Software - Appello | Schedule Smarter",
  description: "Assign crews to jobs with certification cross-checking, drag-and-drop simplicity, and instant mobile notifications. Built for ICI trade contractors.",
  openGraph: {
    title: "Crew Scheduling Software - Appello",
    description: "Schedule smarter with certification cross-checking and mobile notifications.",
  },
};

export default function SchedulingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <Section className="pt-24">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Crew Scheduling That Actually Works
            </h1>
            <p className="text-xl text-gray-600">
              Assign crews to jobs with confidence. Certification cross-checking, drag-and-drop simplicity, and instant mobile notifications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                The Problem with Traditional Scheduling
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">✗</span>
                  <span>Crews showing up without required certifications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">✗</span>
                  <span>Manual scheduling leads to double-booking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">✗</span>
                  <span>Field teams don't know about schedule changes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">✗</span>
                  <span>No visibility into crew availability</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                How Appello Solves It
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Automatic certification cross-checking before assignment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Drag-and-drop scheduling with conflict detection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Instant mobile notifications to field teams</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Real-time crew availability and location tracking</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-primary text-white rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Schedule Smarter?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              See how Appello's crew scheduling can transform your operations.
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


