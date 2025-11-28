"use client";

import Section from "./Section";
import Card from "./Card";
import { getModuleVisual } from "./ModuleVisuals";

type BusinessFunction = 
  | "Sales & Preconstruction"
  | "Field Execution & Workforce Operations"
  | "Project Delivery & Controls"
  | "Safety & Compliance"
  | "Financial & Administrative Operations";

interface Feature {
  title: string;
  subtitle: string;
  description: string;
  businessFunction: BusinessFunction;
  comingSoon?: boolean;
}

// Color mapping for business functions
const businessFunctionColors: Record<BusinessFunction, { bg: string; text: string }> = {
  "Sales & Preconstruction": {
    bg: "bg-blue-100",
    text: "text-blue-700"
  },
  "Field Execution & Workforce Operations": {
    bg: "bg-green-100",
    text: "text-green-700"
  },
  "Project Delivery & Controls": {
    bg: "bg-amber-100",
    text: "text-amber-700"
  },
  "Safety & Compliance": {
    bg: "bg-red-100",
    text: "text-red-700"
  },
  "Financial & Administrative Operations": {
    bg: "bg-purple-100",
    text: "text-purple-700"
  }
};

const features: Feature[] = [
  {
    title: "CRM, Sales & Estimation",
    subtitle: "Estimate Smarter",
    description: "Create accurate estimates faster with integrated CRM, track leads through your sales pipeline, and convert quotes to jobs seamlessly.",
    businessFunction: "Sales & Preconstruction",
  },
  {
    title: "Scheduling & Dispatch",
    subtitle: "Schedule Smarter",
    description: "Assign crews to jobs with certification cross-checking, drag-and-drop simplicity, and instant mobile notifications to your field teams.",
    businessFunction: "Field Execution & Workforce Operations",
  },
  {
    title: "Timesheets & Workforce Admin",
    subtitle: "Track Time Better",
    description: "GPS-enabled clock in/out with automatic union payroll calculations—multi-classification, shift differentials, prevailing wage, travel pay handled automatically.",
    businessFunction: "Field Execution & Workforce Operations",
  },
  {
    title: "Equipment & Asset Management",
    subtitle: "Manage Assets",
    description: "Full lifecycle management with QR codes: inspection history, installation records, service logs, work orders and mapping —all at your fingertips.",
    businessFunction: "Field Execution & Workforce Operations",
  },
  {
    title: "Job Financials & Cost Control",
    subtitle: "Control Costs",
    description: "Monitor job profitability in real-time, track labor and material costs, and make data-driven decisions to improve margins.",
    businessFunction: "Project Delivery & Controls",
  },
  {
    title: "Project Management",
    subtitle: "Manage Projects",
    description: "Projects, Jobs, Notes, Documents and File Sharing. Coordinate multiple jobs, track progress, manage documents and photos, and keep your entire team aligned.",
    businessFunction: "Project Delivery & Controls",
  },
  {
    title: "Purchase Order & Inventory Management",
    subtitle: "Coming Soon",
    description: "Streamline procurement, track inventory across job sites, and manage purchase orders from request to delivery.",
    businessFunction: "Project Delivery & Controls",
    comingSoon: true,
  },
  {
    title: "Safety & Forms",
    subtitle: "Stay Compliant",
    description: "Digital safety forms with conditional logic, certification tracking with expiration alerts, and instant audit-ready documentation.",
    businessFunction: "Safety & Compliance",
  },
  {
    title: "Training & Compliance",
    subtitle: "Train Your Team",
    description: "Manage employee training records, track certification expirations, and ensure your workforce stays compliant and qualified.",
    businessFunction: "Safety & Compliance",
  },
  {
    title: "Progress Billing & Invoicing",
    subtitle: "Bill Faster",
    description: "Generate AIA-style progress invoices in minutes instead of hours. Automatic QuickBooks sync means you get paid 1-2 weeks faster—cashflow when you need it.",
    businessFunction: "Financial & Administrative Operations",
  },
  {
    title: "Reporting & Dashboards",
    subtitle: "See Your Data",
    description: "Traditional ERP-style reporting with customizable dashboards, metrics, and KPIs. Track financial performance, operational efficiency, and safety compliance across your entire business.",
    businessFunction: "Financial & Administrative Operations",
  },
  {
    title: "Human Resources",
    subtitle: "Manage Your Team",
    description: "Track employee information, manage benefits and payroll, handle onboarding, and maintain comprehensive HR records.",
    businessFunction: "Financial & Administrative Operations",
  },
];

export default function FeaturesGrid() {
  return (
    <Section id="features" background="gray">
      <div className="space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Modules & Platform Features
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Stop juggling separate subscriptions. Appello's integrated CORE platform connects all 12 modules—everything ICI contractors actually need, working together seamlessly.
          </p>
        </div>

        {/* CORE Foundation Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="h-full flex flex-col overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 border-indigo-200">
            <div className="relative w-full h-52 bg-gray-100 overflow-hidden">
              {(() => {
                const CoreVisualComponent = getModuleVisual("CORE");
                return <CoreVisualComponent className="group-hover:scale-105 transition-transform duration-300" />;
              })()}
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="inline-block bg-indigo-100 text-indigo-700 text-[10px] font-medium px-2 py-0.5 rounded-full">
                  Foundational Platform
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                CORE
              </h3>
              <h4 className="text-sm font-medium text-primary mb-3">
                The Foundational Platform
              </h4>
              <p className="text-gray-600 flex-grow leading-relaxed mb-4">
                Everything connects through our unified CORE platform—the foundation that all 12 modules and Appello Intelligence™ are built on top of. One source of truth for your entire business.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Platform Access</h4>
                  <ul className="space-y-1.5 text-xs text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      Users, Roles & Permissions
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      Desktop App
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      Mobile App
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      Map & Location Services
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">System-Wide Flexibility</h4>
                  <ul className="space-y-1.5 text-xs text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                      Drag & Drop Property Management
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                      Custom Fields & Properties
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                      Settings & Configuration
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                      Real-Time Data Synchronization
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const VisualComponent = getModuleVisual(feature.title);
            return (
            <Card key={index} className="h-full flex flex-col overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative w-full h-52 bg-gray-100 overflow-hidden">
                <VisualComponent className="group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className={`inline-block ${businessFunctionColors[feature.businessFunction].bg} ${businessFunctionColors[feature.businessFunction].text} text-[10px] font-medium px-2 py-0.5 rounded-full`}>
                    {feature.businessFunction}
                  </span>
                  {feature.comingSoon && (
                    <span className="bg-[#9333ea] text-white text-[10px] font-medium px-2 py-0.5 rounded-md whitespace-nowrap">
                      COMING SOON
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <h4 className="text-sm font-medium text-primary mb-3">
                  {feature.subtitle}
                </h4>
                <p className="text-gray-600 flex-grow leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
            );
          })}
        </div>
        
        <div className="text-center pt-8">
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Start with what you need today. Add modules as you grow. Full platform access from day one.
          </p>
        </div>
      </div>
    </Section>
  );
}
