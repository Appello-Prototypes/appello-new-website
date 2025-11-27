import Section from "./Section";

export default function Integrations() {
  return (
    <Section background="gray">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Trade Specializations Section */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-primary text-sm font-medium">
              Built for Your Trade
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Purpose-Built Workflows for ICI Trades
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you're doing mechanical insulation, HVAC installations, sheet metal fabrication, or electrical work—Appello understands the specific workflows, compliance requirements, and operational complexity of your trade.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <a href="#" className="text-primary font-medium hover:underline">Get started</a>
              <span className="text-gray-300">|</span>
              <a href="#" className="text-primary font-medium hover:underline">View all (25+)</a>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
            <div className="text-center space-y-6">
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  BUILT FOR THE TRADES THAT DO THE WORK
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Trade Specializations
                </h3>
                <p className="text-gray-600 text-lg">
                  Over 15+ trades served
                </p>
              </div>
              
              {/* Trade Icons Grid */}
              <div className="grid grid-cols-5 gap-6 max-w-2xl mx-auto pt-8">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                  <div
                    key={i}
                    className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <span className="text-2xl">🔧</span>
                  </div>
                ))}
              </div>
              
              <p className="text-sm text-gray-500 italic pt-4">
                *Appello is built for trade contractors in the industrial, commercial institutional sector.
              </p>
            </div>
          </div>
        </div>
        
        {/* Integrations Section */}
        <div className="space-y-8">
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
            <div className="text-center space-y-6">
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  ZAPier, QUICKBOOKS ONLINE and more!
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Seamless Data Connectivity
                </h3>
                <p className="text-gray-600 text-lg">
                  Appello integrates with over 7,500+ apps
                </p>
              </div>
              
              {/* Integration Icons Grid */}
              <div className="grid grid-cols-5 gap-6 max-w-2xl mx-auto pt-8">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                  <div
                    key={i}
                    className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <span className="text-2xl">🔗</span>
                  </div>
                ))}
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
