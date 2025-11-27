import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Section from "@/components/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Appello | Built by Contractors, For Contractors",
  description: "Appello was built inside an industrial mechanical contractor. We understand ICI work because we've lived it. Learn our story and mission.",
  openGraph: {
    title: "About Us - Appello",
    description: "Built by contractors, for contractors. Learn our story.",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <Section className="pt-24">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Built by Contractors, For Contractors
            </h1>
            <p className="text-xl text-gray-600">
              We understand ICI work because we've lived it.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 text-gray-700">
              <p>
                Appello wasn't born in a Silicon Valley boardroom. It was built inside an industrial mechanical contractor, 
                where we experienced firsthand the chaos of managing field crews, tracking job costs, and trying to get paid 
                faster—all while juggling spreadsheets, clipboards, and five different disconnected apps.
              </p>
              
              <p>
                We knew there had to be a better way. So we built it ourselves.
              </p>
              
              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Our Mission
              </h2>
              
              <p>
                To give ICI trade contractors the software they actually need—not software designed for general contractors 
                or field service companies, but purpose-built for the unique challenges of industrial, commercial, and 
                institutional trade work.
              </p>
              
              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Why We're Different
              </h2>
              
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>
                  <strong>We speak your language.</strong> We understand union payroll, multi-classification work, 
                  prevailing wage, and the complexity of ICI projects.
                </li>
                <li>
                  <strong>We've been in your shoes.</strong> Our founders spent years running field operations, 
                  managing crews, and dealing with the same pain points you face every day.
                </li>
                <li>
                  <strong>We build what you need.</strong> Every feature in Appello was designed to solve real problems 
                  we encountered in the field, not theoretical use cases.
                </li>
                <li>
                  <strong>We're committed to your success.</strong> Zero percent churn isn't a marketing claim—it's our 
                  commitment to building software so valuable that contractors never want to go back to the old way.
                </li>
              </ul>
              
              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Our Values
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Purpose-Built
                  </h3>
                  <p className="text-gray-700">
                    We don't try to be everything to everyone. We focus exclusively on ICI trade contractors and 
                    build features that matter to your business.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Customer-First
                  </h3>
                  <p className="text-gray-700">
                    Your success is our success. We pick up the phone, respond quickly, and actually listen to 
                    what you need.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Transparency
                  </h3>
                  <p className="text-gray-700">
                    No hidden fees, no surprise charges, no long-term contracts. Simple, fair pricing that makes sense.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Continuous Improvement
                  </h3>
                  <p className="text-gray-700">
                    We're always learning, always improving, and always adding features that make your life easier.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Experience the Difference?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              See how Appello can transform your operations.
            </p>
            <Button href="https://meetings.hubspot.com/shelson/appello-demo">
              Book a Free Demo
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}


