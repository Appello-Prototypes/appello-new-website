import Section from "./Section";
import Button from "./Button";

export default function Integrations() {
  return (
    <Section background="gray">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Purpose-Built Workflows for ICI Trades
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you're doing mechanical insulation, HVAC installations, sheet metal fabrication, or electrical work—Appello understands the specific workflows, compliance requirements, and operational complexity of your trade.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Button href="#" variant="primary">
              Get started
            </Button>
            <Button href="#" variant="outline">
              View all (25+)
            </Button>
          </div>
        </div>
        
        {/* Two Cards Side by Side */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Trade Specializations Card */}
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
            <div className="text-center space-y-6">
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  BUILT FOR THE TRADES THAT DO THE WORK
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Trade Specializations
                </h3>
                <div className="flex items-center justify-center gap-2 text-gray-600 text-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Over 15+ trades served</span>
                </div>
              </div>
              
              {/* App Icons - Discord, Slack, Zoom, Google Meet */}
              <div className="flex justify-center gap-4 pt-8 opacity-60">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-semibold text-gray-400">Discord</span>
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-semibold text-gray-400">Slack</span>
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-semibold text-gray-400">Zoom</span>
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-semibold text-gray-400">Meet</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-500 italic pt-4">
                *Appello is built for trade contractors in the industrial, commercial institutional sector.
              </p>
            </div>
          </div>
          
          {/* Seamless Data Connectivity Card */}
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
            <div className="text-center space-y-6">
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  ZAPIER, QUICKBOOKS ONLINE AND MORE!
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Seamless Data Connectivity
                </h3>
                <div className="flex items-center justify-center gap-2 text-gray-600 text-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  <span>Appello integrates with over 7500+ apps</span>
                </div>
              </div>
              
              {/* App Icons - Figma, Asana, Mailchimp, Zapier */}
              <div className="flex justify-center gap-4 pt-8 opacity-60">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-semibold text-gray-400">Figma</span>
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-semibold text-gray-400">Asana</span>
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-semibold text-gray-400">Mailchimp</span>
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-semibold text-gray-400">Zapier</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-500 italic pt-4">
                *Don't see an integration you need? Contact us - we add them weekly!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
