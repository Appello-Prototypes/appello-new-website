import Section from "./Section";
import Button from "./Button";
import RealTimeMetrics from "./RealTimeMetrics";

export default function SeeYourBusiness() {
  return (
    <Section background="white">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Chart/Graph */}
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 min-h-[500px] flex items-center">
          <RealTimeMetrics />
        </div>
        
        {/* Right Side - Enhanced Text Content */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            See Your Business In Real-Time
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            No more waiting until month-end to know if jobs are profitable. Appello gives you instant visibility into labor costs, material spending, equipment utilization, and project margins. Make informed decisions today, not after it's too late to adjust.
          </p>
          </div>

          {/* Feature Highlights - Connected to Dashboard Metrics */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Track Labor Costs Instantly</h3>
                <p className="text-gray-600 text-sm">Monitor crew productivity and labor expenses in real-time, not weeks later. Spot overruns before they impact your bottom line.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-0.5">
                <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Control Material Spending</h3>
                <p className="text-gray-600 text-sm">See exactly where your material dollars are going with live tracking. Identify waste and optimize purchasing decisions.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Protect Project Margins</h3>
                <p className="text-gray-600 text-sm">Know your profitability at every moment. Catch margin erosion early and take corrective action while there's still time.</p>
              </div>
            </div>
          </div>
          
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
