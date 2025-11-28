import Section from "./Section";
import Button from "./Button";

export default function MidPageCTA() {
  return (
    <Section background="gradient" pattern decorative>
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12 lg:p-16">
          <div className="text-center space-y-8">
            {/* Heading with enhanced typography */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Ready to Replace Your Five Disconnected Systems?
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                See how Appello integrates everything ICI contractors need—from scheduling and time tracking to payroll, safety compliance, and project management—all in one unified platform.
              </p>
            </div>

            {/* CTA Buttons with enhanced styling */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button 
                href="https://meetings.hubspot.com/shelson/appello-demo" 
                size="lg"
                className="shadow-lg hover:shadow-xl transition-shadow min-w-[200px]"
              >
                Book a Free Demo
              </Button>
              <Button 
                href="/case-studies" 
                variant="outline" 
                size="lg"
                className="min-w-[200px]"
              >
                View Case Studies
              </Button>
            </div>

            {/* Trust indicators with icons */}
            <div className="pt-6 border-t border-gray-200">
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-sm md:text-base">
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">No credit card required</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">2-4 weeks to go live</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">Personal onboarding</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

