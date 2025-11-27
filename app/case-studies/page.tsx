import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getAllCaseStudies } from "@/lib/case-studies";
import { Metadata } from "next";
import Card from "@/components/Card";
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
                <Link 
                  key={caseStudy.slug} 
                  href={`/case-studies/${caseStudy.slug}`}
                  className="group"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 hover:border-primary/20">
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-primary/10 text-primary font-semibold rounded-full text-xs">
                          {caseStudy.industry}
                        </span>
                        <span className="text-sm text-gray-500">
                          {new Date(caseStudy.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                          })}
                        </span>
                      </div>
                      
                      <h2 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                        {caseStudy.title}
                      </h2>
                      
                      <p className="text-lg font-semibold text-gray-700">
                        {caseStudy.company}
                      </p>
                      
                      <p className="text-gray-600 line-clamp-3 leading-relaxed">
                        {caseStudy.excerpt}
                      </p>
                      
                      {caseStudy.results.length > 0 && (
                        <div className="pt-5 border-t border-gray-200">
                          <div className="grid grid-cols-2 gap-4">
                            {caseStudy.results.slice(0, 2).map((result, index) => (
                              <div key={index} className="p-3 bg-gray-50 rounded-lg">
                                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-primary to-primary-dark bg-clip-text text-transparent">
                                  {result.value}
                                </div>
                                <div className="text-sm text-gray-600 font-medium mt-1">
                                  {result.metric}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="pt-4 flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                        <span>Read full case study</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}


