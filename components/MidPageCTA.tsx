import Section from "./Section";
import Button from "./Button";

export default function MidPageCTA() {
  return (
    <Section background="gray">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Ready to Replace Your Five Disconnected Systems?
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          See how Appello integrates everything ICI contractors need—from scheduling and time tracking to payroll, safety compliance, and project management—all in one unified platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button href="https://meetings.hubspot.com/shelson/appello-demo" size="lg">
            Book a Free Demo
          </Button>
          <Button href="/case-studies" variant="secondary" size="lg">
            View Case Studies
          </Button>
        </div>
        <p className="text-sm text-gray-500 pt-2">
          No credit card required • 2-4 weeks to go live • Personal onboarding
        </p>
      </div>
    </Section>
  );
}

