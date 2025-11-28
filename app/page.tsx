import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoGrid from "@/components/LogoGrid";
import Partnerships from "@/components/Partnerships";
import QuickBooksIntegration from "@/components/QuickBooksIntegration";
import VideoSection from "@/components/VideoSection";
import ValueProp from "@/components/ValueProp";
import BusinessFunctions from "@/components/BusinessFunctions";
import CoreModulesWheel from "@/components/CoreModulesWheel";
import FeaturesGrid from "@/components/FeaturesGrid";
import AppelloIntelligence from "@/components/AppelloIntelligence";
import MidPageCTA from "@/components/MidPageCTA";
import SeeYourBusiness from "@/components/SeeYourBusiness";
import MetricsSection from "@/components/MetricsSection";
import Testimonials from "@/components/Testimonials";
import Integrations from "@/components/Integrations";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { getAllCaseStudies } from "@/lib/case-studies";

export default function Home() {
  const caseStudies = getAllCaseStudies();

  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* Connecting background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Subtle grid pattern across entire page */}
        <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        
        {/* Flowing gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-100/10 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-blue-200/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-[700px] h-[700px] bg-blue-50/12 rounded-full blur-3xl"></div>
        
        {/* Connecting lines between sections */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {/* Subtle connecting lines */}
          <line x1="10%" y1="20%" x2="90%" y2="25%" stroke="url(#lineGradient)" strokeWidth="1" />
          <line x1="10%" y1="45%" x2="90%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1" />
          <line x1="10%" y1="70%" x2="90%" y2="75%" stroke="url(#lineGradient)" strokeWidth="1" />
        </svg>
      </div>
      
      <div className="relative z-10">
        <Header />
        <Hero />
        <LogoGrid />
        <VideoSection />
        <ValueProp />
        <BusinessFunctions />
        <CoreModulesWheel />
        <FeaturesGrid />
        <AppelloIntelligence />
        <QuickBooksIntegration />
        <MidPageCTA />
        <SeeYourBusiness />
        <MetricsSection caseStudies={caseStudies} />
        <Testimonials />
        <Integrations />
        <CTASection />
        <Partnerships />
        <Footer />
      </div>
    </main>
  );
}

