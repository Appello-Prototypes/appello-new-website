"use client";

import { useEffect, useRef, useState } from "react";
import Section from "./Section";

type BusinessFunction = 
  | "Sales & Preconstruction"
  | "Field Execution & Workforce Operations"
  | "Project Delivery & Controls"
  | "Safety & Compliance"
  | "Financial & Administrative Operations";

interface Module {
  id: string;
  name: string;
  icon: React.ReactNode;
  businessFunction: BusinessFunction;
  comingSoon?: boolean;
  previewTitle?: string;
  previewLink?: string;
  previewDescription?: string;
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

// SVG Icon Components - Matching reference design
const CRMSalesIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
    <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 16l4-4 4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SchedulingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 14l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TimesheetsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const EquipmentIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const JobFinancialsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="8" r="1" fill="currentColor"/>
    <circle cx="12" cy="16" r="1" fill="currentColor"/>
  </svg>
);

const ProjectManagementIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
    <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PurchaseOrderIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SafetyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TrainingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 12v5c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BillingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 2v6h6M12 18v-6M9 15h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ReportingDashboardsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
    <rect x="3" y="3" width="7" height="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="14" y="3" width="7" height="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="14" y="12" width="7" height="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.5 8.5h0M6.5 11.5h0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HumanResourcesIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Modules ordered clockwise starting from top (12 o'clock position)
const modules: Module[] = [
  { 
    id: "1", 
    name: "CRM, Sales & Estimation", 
    icon: <CRMSalesIcon />,
    businessFunction: "Sales & Preconstruction",
    previewTitle: "CRM, Sales & Estimation",
    previewLink: "Estimate Smarter",
    previewDescription: "Create accurate estimates faster with integrated CRM, track leads through your sales pipeline, and convert quotes to jobs seamlessly."
  },
  { 
    id: "2", 
    name: "Scheduling & Dispatch", 
    icon: <SchedulingIcon />,
    businessFunction: "Field Execution & Workforce Operations",
    previewTitle: "Crew Scheduling",
    previewLink: "Schedule Smarter",
    previewDescription: "Assign crews to jobs with certification cross-checking, drag-and-drop simplicity, and instant mobile notifications to your field teams."
  },
  { 
    id: "3", 
    name: "Timesheets & Workforce Admin", 
    icon: <TimesheetsIcon />,
    businessFunction: "Field Execution & Workforce Operations",
    previewTitle: "Timesheets & Workforce Admin",
    previewLink: "Track Time Better",
    previewDescription: "Capture time and attendance from the field, manage shift differentials and per-diem, and streamline workforce administration."
  },
  { 
    id: "4", 
    name: "Equipment & Asset Management", 
    icon: <EquipmentIcon />,
    businessFunction: "Field Execution & Workforce Operations",
    previewTitle: "Equipment & Asset Management",
    previewLink: "Manage Assets",
    previewDescription: "Track equipment usage, schedule maintenance, and manage asset costs across all your job sites and projects."
  },
  { 
    id: "5", 
    name: "Job Financials & Cost Control", 
    icon: <JobFinancialsIcon />,
    businessFunction: "Project Delivery & Controls",
    previewTitle: "Job Financials & Cost Control",
    previewLink: "Control Costs",
    previewDescription: "Monitor job profitability in real-time, track labor and material costs, and make data-driven decisions to improve margins."
  },
  { 
    id: "6", 
    name: "Project Management", 
    icon: <ProjectManagementIcon />,
    businessFunction: "Project Delivery & Controls",
    previewTitle: "Project Management",
    previewLink: "Manage Projects",
    previewDescription: "Projects, Jobs, Notes, Documents and File Sharing. Coordinate multiple jobs, track progress, manage documents and photos, and keep your entire team aligned."
  },
  { 
    id: "7", 
    name: "Purchase Order & Inventory Management", 
    icon: <PurchaseOrderIcon />,
    businessFunction: "Project Delivery & Controls",
    comingSoon: true,
    previewTitle: "Purchase Order & Inventory Management",
    previewLink: "Coming Soon",
    previewDescription: "Streamline procurement, track inventory across job sites, and manage purchase orders from request to delivery."
  },
  { 
    id: "8", 
    name: "Safety & Forms", 
    icon: <SafetyIcon />,
    businessFunction: "Safety & Compliance",
    previewTitle: "Safety & Forms",
    previewLink: "Stay Compliant",
    previewDescription: "Complete safety forms in the field, track certifications and training, and ensure compliance across all job sites."
  },
  { 
    id: "9", 
    name: "Training & Compliance", 
    icon: <TrainingIcon />,
    businessFunction: "Safety & Compliance",
    previewTitle: "Training & Compliance",
    previewLink: "Train Your Team",
    previewDescription: "Manage employee training records, track certification expirations, and ensure your workforce stays compliant and qualified."
  },
  { 
    id: "10", 
    name: "Progress Billing & Invoicing", 
    icon: <BillingIcon />,
    businessFunction: "Financial & Administrative Operations",
    previewTitle: "Progress Billing & Invoicing",
    previewLink: "Bill Faster",
    previewDescription: "Generate progress invoices from completed work, track billable hours and materials, and get paid faster."
  },
  { 
    id: "11", 
    name: "Reporting & Dashboards", 
    icon: <ReportingDashboardsIcon />,
    businessFunction: "Financial & Administrative Operations",
    previewTitle: "Reporting & Dashboards",
    previewLink: "See Your Data",
    previewDescription: "Traditional ERP-style reporting with customizable dashboards, metrics, and KPIs. Track financial performance, operational efficiency, and safety compliance across your entire business."
  },
  { 
    id: "12", 
    name: "Human Resources", 
    icon: <HumanResourcesIcon />,
    businessFunction: "Financial & Administrative Operations",
    previewTitle: "Human Resources",
    previewLink: "Manage Your Team",
    previewDescription: "Track employee information, manage benefits and payroll, handle onboarding, and maintain comprehensive HR records."
  },
];

export default function CoreModulesWheel() {
  const wheelRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [radius, setRadius] = useState(200); // Default radius, will be calculated
  const [radiusPercent, setRadiusPercent] = useState(40); // Single variable to control both lines and module positions
  const [hoveredModule, setHoveredModule] = useState<Module | null>(null);

  useEffect(() => {
    // Calculate radius based on container size and screen size
    const updateRadius = () => {
      if (wheelRef.current) {
        const containerSize = wheelRef.current.offsetWidth;
        const screenWidth = window.innerWidth;
        
        // Responsive radius percentage based on screen size
        // Adjust these breakpoints and percentages as needed
        let radiusPercentage = 40; // Default 40%
        
        if (screenWidth >= 1920) {
          // Large screens - can go further out
          radiusPercentage = 40;
        } else if (screenWidth >= 1280) {
          // Desktop screens
          radiusPercentage = 40;
        } else if (screenWidth >= 1024) {
          // Tablet landscape / smaller desktop
          radiusPercentage = 40;
        } else if (screenWidth >= 768) {
          // Tablet portrait
          radiusPercentage = 40;
        }
        
        setRadiusPercent(radiusPercentage);
        const calculatedRadius = containerSize * (radiusPercentage / 100);
        setRadius(calculatedRadius);
      }
    };

    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      updateRadius();
    });
    
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  useEffect(() => {
    // Intersection Observer for fade-in animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (wheelRef.current) {
      observer.observe(wheelRef.current);
    }

    return () => {
      if (wheelRef.current) {
        observer.unobserve(wheelRef.current);
      }
    };
  }, []);

  return (
    <Section background="white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Everything You Need, All in One Platform
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Appello's integrated CORE platform connects all your business functions—from field operations to financial management.
          </p>
        </div>

        {/* Radial Wheel Container - Desktop */}
        <div className="hidden md:block py-8 md:py-10 lg:py-12 overflow-hidden">
          <div className="relative max-w-7xl mx-auto">
            <div 
              ref={wheelRef}
              className="relative w-full max-w-[700px] mx-auto aspect-square"
              style={{ minHeight: '700px', maxHeight: '700px' }}
            >
          {/* Background Rings */}
          <div className="absolute inset-[18%] rounded-full border border-[#e0e8ff] pointer-events-none" />
          <div className="absolute inset-[32%] rounded-full border border-[#e0e8ff] pointer-events-none" />

          {/* Connection Lines SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.6s ease-out' }}>
            {modules.map((module, index) => {
              // Start from top (12 o'clock) = -90 degrees offset
              const angle = (index * 360) / modules.length - 90;
              const angleRad = (angle * Math.PI) / 180;
              const centerX = 50; // 50% of container
              const centerY = 50; // 50% of container
              // Use the same radiusPercent variable that controls module positions
              const endX = centerX + radiusPercent * Math.sin(angleRad);
              const endY = centerY - radiusPercent * Math.cos(angleRad);
              const coreRadius = 16; // Half of 32% inset
              const startX = centerX + coreRadius * Math.sin(angleRad);
              const startY = centerY - coreRadius * Math.cos(angleRad);
              
              return (
                <line
                  key={`line-${module.id}`}
                  x1={`${startX}%`}
                  y1={`${startY}%`}
                  x2={`${endX}%`}
                  y2={`${endY}%`}
                  stroke="#000000"
                  strokeWidth="1.5"
                  opacity="0.12"
                  style={{
                    transition: `opacity 0.6s ease-out ${index * 0.05}s`,
                  }}
                />
              );
            })}
          </svg>

          {/* Central CORE */}
          <div className="absolute inset-[32%] rounded-full bg-white shadow-lg flex flex-col items-center justify-center text-center p-4 z-10 transition-shadow duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">CORE</h3>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              Users, Roles & Permissions,<br />Desktop App, Mobile App, Map,<br />Drag & Drop Property Management,<br />Settings & Configuration
            </p>
          </div>

          {/* Module Items */}
          <ul className="list-none m-0 p-0" aria-label="Appello platform modules">
            {modules.map((module, index) => {
              const angle = (index * 360) / modules.length - 90;
              const angleRad = (angle * Math.PI) / 180;
              // Calculate position using 60% of container radius
              const x = radius * Math.sin(angleRad);
              const y = -radius * Math.cos(angleRad);
              
              return (
              <li
                key={module.id}
                className="wheel__item absolute top-1/2 left-1/2 z-20"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  opacity: isVisible ? 1 : 0,
                  transition: `opacity 0.6s ease-out ${index * 0.05}s, transform 0.3s ease`,
                }}
                aria-label={module.name}
                onMouseEnter={() => setHoveredModule(module)}
                onMouseLeave={() => setHoveredModule(null)}
              >
                <div className="wheel__bubble relative bg-white rounded-2xl px-3 py-2.5 hover:scale-105 transition-all duration-300 text-center min-w-[140px] max-w-[160px] focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 cursor-pointer">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#e3edff] flex items-center justify-center mb-1.5 text-blue-700 transition-colors duration-300" aria-hidden="true">
                      {module.icon}
                    </div>
                    <span className={`inline-block ${businessFunctionColors[module.businessFunction].bg} ${businessFunctionColors[module.businessFunction].text} text-[9px] font-medium px-2 py-0.5 rounded-full whitespace-nowrap mb-1`} aria-label={module.businessFunction}>
                      {module.businessFunction}
                    </span>
                    <h4 className="text-xs font-semibold text-gray-900 leading-tight px-1 mb-1">
                      {module.name}
                    </h4>
                    {module.comingSoon && (
                      <span className="inline-block bg-[#9333ea] text-white text-[10px] font-medium px-2 py-0.5 rounded-md whitespace-nowrap mt-1" aria-label="Coming soon">
                        COMING SOON
                      </span>
                    )}
                  </div>
                </div>
              </li>
              );
            })}
          </ul>
          </div>

          {/* Hover Preview Card - Appears in center of circle */}
          {hoveredModule && (
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 p-6 z-40 preview-card-enter" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
              {/* Card Header Graphic */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 mb-4 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-white/10 rounded-full"></div>
                </div>
                <div className="relative z-10">
                  <div className="text-gray-400 text-xs mb-2">Module Preview</div>
                  <div className="mb-2">
                    <span className={`inline-block ${businessFunctionColors[hoveredModule.businessFunction].bg} ${businessFunctionColors[hoveredModule.businessFunction].text} text-[10px] font-medium px-2 py-0.5 rounded-full`}>
                      {hoveredModule.businessFunction}
                    </span>
                  </div>
                  <div className="text-white text-xl font-bold">{hoveredModule.previewTitle || hoveredModule.name}</div>
                </div>
              </div>

              {/* Card Content */}
              <div>
                <a 
                  href="#" 
                  className="text-primary hover:text-primary-dark font-semibold text-sm mb-3 inline-block transition-colors"
                >
                  {hoveredModule.previewLink || "Learn More"} →
                </a>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {hoveredModule.previewDescription || "Learn more about this module and how it can help your business."}
                </p>
              </div>
            </div>
          )}
          </div>
        </div>

        {/* Mobile List - Stacked Layout */}
        <div className="md:hidden space-y-4 max-w-2xl mx-auto">
          <p className="text-lg font-semibold text-gray-900 mb-6 text-center">
            All modules included in CORE
          </p>
          <ul className="space-y-3" aria-label="Appello platform modules">
            {modules.map((module) => (
              <li key={module.id}>
                <div className="bg-white rounded-full px-4 py-3 flex items-center gap-3 transition-shadow duration-300 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2">
                  <div className="w-10 h-10 rounded-full bg-[#e3edff] flex items-center justify-center flex-shrink-0 text-primary" aria-hidden="true">
                    {module.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="mb-1">
                      <span className={`inline-block ${businessFunctionColors[module.businessFunction].bg} ${businessFunctionColors[module.businessFunction].text} text-[10px] font-medium px-2 py-0.5 rounded-full`} aria-label={module.businessFunction}>
                        {module.businessFunction}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-gray-900">
                      {module.name}
                    </h4>
                    {module.comingSoon && (
                      <span className="inline-block mt-1 bg-[#9333ea] text-white text-[10px] font-medium px-2 py-0.5 rounded-full" aria-label="Coming soon">
                        COMING SOON
                      </span>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

