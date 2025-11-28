import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoGrid from "@/components/LogoGrid";
import VideoSection from "@/components/VideoSection";
import ValueProp from "@/components/ValueProp";
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
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <LogoGrid />
      <VideoSection />
      <ValueProp />
      <CoreModulesWheel />
      <FeaturesGrid />
      <AppelloIntelligence />
      <MidPageCTA />
      <SeeYourBusiness />
      <MetricsSection caseStudies={caseStudies} />
      <Testimonials />
      <Integrations />
      <CTASection />
      <Footer />
    </main>
  );
}

