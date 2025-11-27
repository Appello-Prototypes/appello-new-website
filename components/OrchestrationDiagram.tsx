import Section from "./Section";

export default function OrchestrationDiagram() {
  return (
    <Section background="white">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Zero Percent Churn, 100% Satisfaction
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Not a single contractor has ever cancelled Appello. When you experience software that finally understands ICI work, you don't go back to the chaos of before.
          </p>
        </div>
        
        {/* SVG Diagram - Centered */}
        <div className="flex justify-center items-center py-8">
          <div className="relative w-full max-w-6xl mx-auto">
            <img
              src="/images/appello-orchestration.svg"
              alt="Appello Platform Orchestration - Showing all integrated systems and features"
              className="w-full h-auto"
            />
          </div>
        </div>
        
        {/* Bottom Summary */}
        <div className="text-center pt-8">
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Appello integrates everything ICI contractors need—from scheduling and time tracking to payroll, safety compliance, and project management—all in one unified platform.
          </p>
        </div>
      </div>
    </Section>
  );
}
