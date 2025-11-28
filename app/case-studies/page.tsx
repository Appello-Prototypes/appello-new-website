import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllCaseStudies } from "@/lib/case-studies";
import { Metadata } from "next";
import CaseStudyCard from "@/components/CaseStudyCard";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Case Studies - Appello | Customer Success Stories",
  description: "See how ICI trade contractors are using Appello to improve operations, reduce costs, and grow their businesses.",
  openGraph: {
    title: "Case Studies - Appello",
    description: "Customer success stories from ICI trade contractors.",
  },
};

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="bg-white pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Customer Success Stories
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              See how ICI trade contractors are transforming their operations with Appello
            </p>
            <Button href="https://meetings.hubspot.com/shelson/appello-demo">
              Book a Demo to See Your Results
            </Button>
          </div>

          {caseStudies.length === 0 ? (
            <div className="max-w-2xl mx-auto text-center py-12">
              <p className="text-gray-600 mb-6">
                Case studies coming soon! Check back to see how contractors are succeeding with Appello.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {caseStudies.map((caseStudy) => (
                <CaseStudyCard 
                  key={caseStudy.slug} 
                  caseStudy={caseStudy}
                  variant="light"
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}


