import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProofBar from "@/components/SocialProofBar";
import VideoSection from "@/components/VideoSection";
import ValueProp from "@/components/ValueProp";
import OrchestrationDiagram from "@/components/OrchestrationDiagram";
import FeaturesGrid from "@/components/FeaturesGrid";
import MidPageCTA from "@/components/MidPageCTA";
import SeeYourBusiness from "@/components/SeeYourBusiness";
import MetricsSection from "@/components/MetricsSection";
import Testimonials from "@/components/Testimonials";
import Integrations from "@/components/Integrations";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <SocialProofBar />
      <VideoSection />
      <ValueProp />
      <OrchestrationDiagram />
      <FeaturesGrid />
      <MidPageCTA />
      <SeeYourBusiness />
      <MetricsSection />
      <Testimonials />
      <Integrations />
      <CTASection />
      <Footer />
    </main>
  );
}

