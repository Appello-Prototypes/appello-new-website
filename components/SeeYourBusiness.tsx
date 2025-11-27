import Section from "./Section";
import Button from "./Button";

export default function SeeYourBusiness() {
  return (
    <Section background="white">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Chart/Graph */}
        <div className="bg-gray-50 rounded-xl p-12 border border-gray-200 flex items-center justify-center min-h-[500px]">
          <div className="text-center text-gray-400">
            <p className="text-lg mb-2">Chart/Graph Visualization</p>
            <p className="text-sm">(metrics-chart.webp placeholder)</p>
          </div>
        </div>
        
        {/* Right Side - Text Content */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            See Your Business In Real-Time
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            No more waiting until month-end to know if jobs are profitable. Appello gives you instant visibility into labor costs, material spending, equipment utilization, and project margins. Make informed decisions today, not after it's too late to adjust.
          </p>
          
          <div>
            <Button href="https://meetings.hubspot.com/shelson/appello-demo">
              Book a Free Demo
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
