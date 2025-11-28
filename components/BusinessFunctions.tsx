"use client";

import Section from "./Section";
import Card from "./Card";

const businessFunctions = [
  {
    title: "Sales & Pre-Construction",
    description: "Everything that happens before the contract is signed—from CRM and lead management to estimation and proposal creation.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        {/* Document/Proposal */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        {/* Chart/Growth arrow */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeWidth={2.5} />
        {/* Handshake/Deal */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 14l-2-2m0 0l2-2m-2 2h12m-4 4l2 2m0 0l-2 2m2-2H8" strokeWidth={1.5} opacity="0.6" />
      </svg>
    ),
    gradient: "from-blue-500 to-cyan-500",
    modules: ["CRM & Sales", "Estimation", "Proposals"],
  },
  {
    title: "Field Execution & Workforce Operations",
    description: "Managing your people in the field to do the work—scheduling, dispatch, timesheets, and workforce administration.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        {/* Workers/Team */}
        <circle cx="9" cy="7" r="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="15" cy="7" r="3" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 20v-2a4 4 0 018 0v2" strokeWidth={2.5} />
        {/* Clock/Time */}
        <circle cx="15" cy="15" r="5" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2-2m0 0l2-2m-2 2h4" strokeWidth={2.5} />
        {/* Calendar/Schedule */}
        <rect x="2" y="4" width="5" height="4" rx="0.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} opacity="0.6" />
      </svg>
    ),
    gradient: "from-green-500 to-emerald-500",
    modules: ["Scheduling & Dispatch", "Timesheets", "Workforce Admin"],
  },
  {
    title: "Project Delivery & Controls",
    description: "All of your financial control costs—measuring costs to make sure you're on track or off track with project financials and job costing.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        {/* Dashboard/Chart */}
        <rect x="3" y="4" width="18" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        {/* Bar chart bars */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16v-4M11 16v-8M15 16v-6M19 16v-2" strokeWidth={3} />
        {/* Target/Goal indicator */}
        <circle cx="18" cy="6" r="2" fill="currentColor" opacity="0.3" />
        <circle cx="18" cy="6" r="1" strokeLinecap="round" strokeLinejoin="round" />
        {/* Dollar sign */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2" strokeWidth={2.5} />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8V7m0 1v8m0 0v1" strokeWidth={2.5} />
      </svg>
    ),
    gradient: "from-amber-500 to-orange-500",
    modules: ["Job Financials", "Cost Control", "Project Management"],
  },
  {
    title: "Safety & Compliance",
    description: "Your safety operations—training records, certifications, safety forms, inspections, and compliance tracking.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        {/* Shield with checkmark */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeWidth={2.5} />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" strokeWidth={3} />
        {/* Certificate/Clipboard */}
        <rect x="4" y="2" width="6" height="8" rx="1" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} opacity="0.4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 4h4M5 6h4" strokeWidth={1.5} opacity="0.6" />
      </svg>
    ),
    gradient: "from-red-500 to-pink-500",
    modules: ["Training & Compliance", "Safety Forms", "Equipment Inspections"],
  },
  {
    title: "Financial & Administrative Operations",
    description: "Your executive team and administrative operations—HR, accounting integrations, progress billing, invoicing, and financial reporting.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        {/* Calculator/Financial tool */}
        <rect x="4" y="4" width="16" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        {/* Calculator buttons */}
        <rect x="6" y="7" width="3" height="3" rx="0.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
        <rect x="11" y="7" width="3" height="3" rx="0.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
        <rect x="16" y="7" width="3" height="3" rx="0.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
        <rect x="6" y="12" width="3" height="3" rx="0.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
        <rect x="11" y="12" width="3" height="3" rx="0.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
        {/* Dollar sign */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth={2.5} />
        {/* Document/Invoice */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17h6m-6-4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeWidth={1.5} opacity="0.5" />
      </svg>
    ),
    gradient: "from-purple-500 to-indigo-500",
    modules: ["HR Management", "Accounting Integration", "Progress Billing"],
  },
  {
    title: "Business Intelligence & Strategic Oversight",
    description: "AI-powered insights and strategic oversight—predictive analytics, risk identification, cross-domain intelligence, and executive dashboards that reveal the complete picture of your business.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        {/* Brain/AI symbol */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeWidth={2.5} />
        {/* Dashboard/Chart */}
        <rect x="3" y="14" width="18" height="6" rx="1" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} opacity="0.6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18v-2M10 18v-4M14 18v-3M18 18v-1" strokeWidth={2.5} />
        {/* Network/Connections */}
        <circle cx="8" cy="10" r="1.5" fill="currentColor" opacity="0.4" />
        <circle cx="12" cy="8" r="1.5" fill="currentColor" opacity="0.6" />
        <circle cx="16" cy="10" r="1.5" fill="currentColor" opacity="0.4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10l4-2M12 8l4 2" strokeWidth={1.5} opacity="0.5" />
        {/* Lightbulb/Insight */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673" strokeWidth={2.5} />
      </svg>
    ),
    gradient: "from-indigo-500 to-violet-500",
    modules: ["Appello Intelligence™", "Predictive Analytics", "Executive Dashboards"],
  },
];

export default function BusinessFunctions() {
  return (
    <Section background="white">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Section */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider">
            Complete Business Coverage
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Six Core Business Functions
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Appello covers every aspect of your ICI contracting business, from pre-construction through project delivery, financial operations, and strategic intelligence.
          </p>
        </div>

        {/* Business Functions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessFunctions.map((func, index) => (
            <Card
              key={index}
              className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-6">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${func.gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
                  {func.icon}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {func.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {func.description}
                  </p>

                  {/* Modules List */}
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                      Key Modules
                    </p>
                    <ul className="space-y-2">
                      {func.modules.map((module, moduleIndex) => (
                        <li key={moduleIndex} className="flex items-center gap-2 text-gray-700">
                          <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">{module}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

