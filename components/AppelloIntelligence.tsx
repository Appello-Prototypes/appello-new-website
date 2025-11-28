import Section from "./Section";
import Button from "./Button";

export default function AppelloIntelligence() {
  return (
    <Section background="gray">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-purple-50 to-blue-50 text-primary text-sm font-medium">
              <span className="mr-2" aria-hidden="true">🤖</span>
              AI Powered Business Intelligence
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Appello Intelligence™
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              While Reporting & Dashboards give you traditional ERP metrics and KPIs, Appello Intelligence™ goes further. It combines structured and unstructured data—financial records, operational logs, safety reports, field notes, and more—to generate the complete picture of what's happening across your entire business.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Unified Data Intelligence</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Connects structured data (financials, timesheets, invoices) with unstructured data (field notes, safety reports, email communications) to reveal hidden patterns and relationships across your entire operation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Cross-Domain Intelligence</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Correlate financial data with operational metrics and safety incidents to identify root causes. See how field conditions impact profitability, how safety compliance affects project timelines, and how operational efficiency drives financial outcomes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Predictive Pattern Recognition</h3>
                  <p className="text-gray-600 leading-relaxed">
                    AI analyzes patterns across disparate data sources to predict issues before they occur. Identify at-risk projects by correlating financial trends with field notes, safety incidents, and operational metrics—not just single data points.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Cross-Domain Intelligence</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Correlate financial data with operational metrics and safety incidents to identify root causes. See how field conditions impact profitability, how safety compliance affects project timelines, and how operational efficiency drives financial outcomes.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Button href="https://meetings.hubspot.com/shelson/appello-demo">
                See Appello Intelligence™ in Action
              </Button>
            </div>
          </div>

          {/* Right Column - Visual/Graphic */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="space-y-6">
                {/* AI Insights Cards */}
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">Project Risk Score</h4>
                    <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">Low Risk</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Budget Variance</span>
                      <span className="font-medium text-gray-900">+2.3%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '23%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">Efficiency Insights</h4>
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">AI Analysis</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Crew A productivity up 15% this week</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Recommended: Assign Crew A to high-priority jobs</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">Predictive Forecast</h4>
                    <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded">Next 30 Days</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Expected Revenue</span>
                      <span className="font-semibold text-gray-900">$485K</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Confidence Level</span>
                      <span className="font-medium text-purple-600">87%</span>
                    </div>
                  </div>
                </div>

                {/* AI Badge */}
                <div className="text-center pt-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm font-medium">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Powered by AI
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

