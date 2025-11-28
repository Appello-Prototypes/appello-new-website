"use client";

import Section from "./Section";
import Button from "./Button";
import Image from "next/image";

const trades = [
  {
    name: "Mechanical Insulation",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        {/* Horizontal pipe with insulation wrap */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16" strokeWidth={3} />
        {/* Insulation wrap layers */}
        <ellipse cx="6" cy="12" rx="2" ry="4" strokeLinecap="round" strokeLinejoin="round" />
        <ellipse cx="12" cy="12" rx="2" ry="4" strokeLinecap="round" strokeLinejoin="round" />
        <ellipse cx="18" cy="12" rx="2" ry="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "HVAC",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        {/* Air duct/ventilation system */}
        {/* Main duct */}
        <rect x="4" y="10" width="16" height="4" rx="1" strokeLinecap="round" strokeLinejoin="round" />
        {/* Branch ducts */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10v-4M16 10v-4M8 14v4M16 14v4" />
        {/* Airflow arrows */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h2M16 12h2" strokeWidth={2.5} />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 11l1 1-1 1M17 11l1 1-1 1" strokeWidth={2} />
        {/* Vent grilles */}
        <rect x="5" y="6" width="6" height="2" rx="0.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="13" y="6" width="6" height="2" rx="0.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="5" y="16" width="6" height="2" rx="0.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="13" y="16" width="6" height="2" rx="0.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Sheet Metal",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        {/* Metal sheet with folded/bent edge */}
        {/* Main sheet */}
        <rect x="5" y="8" width="14" height="8" rx="0.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Folded edge showing thickness */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 8v8M19 8v8" strokeWidth={2.5} />
        {/* Bend/fold line */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 8h8" strokeWidth={2} strokeDasharray="2 2" />
        {/* Metal texture lines */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 11h10M7 13h10" strokeWidth={1} opacity="0.5" />
        {/* Corner detail showing metal edge */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 8l2-2M19 8l-2-2" strokeWidth={1.5} />
      </svg>
    ),
  },
  {
    name: "Electrical",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
        {/* Lightning bolt */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
      </svg>
    ),
  },
  {
    name: "Plumbing",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        {/* Pipe with elbow joints */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 4v6h6v6h6v6" />
        {/* Pipe connections */}
        <circle cx="6" cy="4" r="1.5" fill="currentColor" />
        <circle cx="12" cy="10" r="1.5" fill="currentColor" />
        <circle cx="18" cy="16" r="1.5" fill="currentColor" />
        {/* Water drop */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 20c0 1.5-1.5 2-2 2s-2-.5-2-2" fill="currentColor" opacity="0.3" />
      </svg>
    ),
  },
  {
    name: "Fire Protection",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        {/* Fire sprinkler head */}
        <circle cx="12" cy="8" r="3" strokeLinecap="round" strokeLinejoin="round" />
        {/* Sprinkler pipe */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11v6" strokeWidth={2.5} />
        {/* Water spray */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 18l4-2M16 18l-4-2M12 17v2" strokeWidth={1.5} />
        {/* Base plate */}
        <rect x="9" y="19" width="6" height="2" rx="1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Asbestos Abatement",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        {/* Hazmat symbol - triangle with exclamation */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L4 20h16L12 3z" strokeWidth={2.5} />
        {/* Exclamation mark */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4" strokeWidth={3} />
        <circle cx="12" cy="16" r="1" fill="currentColor" />
        {/* Protective gear outline */}
        <circle cx="12" cy="11" r="4" strokeWidth={1.5} strokeDasharray="2 2" opacity="0.5" />
      </svg>
    ),
  },
  {
    name: "Scaffolding",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        {/* Vertical posts */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v16M20 4v16M8 4v16M16 4v16" />
        {/* Horizontal platforms */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 12h16M4 16h16M4 20h16" />
        {/* Cross braces */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8l4 4M20 8l-4 4M4 16l4 4M20 16l-4 4" />
      </svg>
    ),
  },
  {
    name: "Fire Stopping",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        {/* Wall/barrier */}
        <rect x="6" y="4" width="12" height="16" rx="1" strokeLinecap="round" strokeLinejoin="round" />
        {/* Penetration hole */}
        <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
        {/* Fire sealant/intumescent material */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6" strokeWidth={2.5} />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6" strokeWidth={2.5} />
        {/* Fire symbol */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l1 2h2l-1 2 1 2h-2l-1 2" strokeWidth={1.5} opacity="0.7" />
      </svg>
    ),
  },
];

const integrations = [
  {
    name: "QuickBooks Online",
    badge: "Silver Partner",
    icon: (
      <div className="w-8 h-8 relative">
        <Image
          src="https://cdn.simpleicons.org/quickbooks/0077D3"
          alt="QuickBooks Online"
          fill
          className="object-contain"
          unoptimized
        />
      </div>
    ),
  },
  {
    name: "Zapier",
    icon: (
      <div className="w-8 h-8 relative">
        <Image
          src="https://cdn.simpleicons.org/zapier/FF4A00"
          alt="Zapier"
          fill
          className="object-contain"
          unoptimized
        />
      </div>
    ),
  },
  {
    name: "Xero",
    icon: (
      <div className="w-8 h-8 relative">
        <Image
          src="https://cdn.simpleicons.org/xero/13B5EA"
          alt="Xero"
          fill
          className="object-contain"
          unoptimized
        />
      </div>
    ),
  },
  {
    name: "Slack",
    icon: (
      <div className="w-8 h-8 relative">
        <Image
          src="https://cdn.simpleicons.org/slack/4A154B"
          alt="Slack"
          fill
          className="object-contain"
          unoptimized
        />
      </div>
    ),
  },
  {
    name: "Microsoft Teams",
    icon: (
      <div className="w-8 h-8 relative">
        <Image
          src="https://cdn.simpleicons.org/microsoftteams/6264A7"
          alt="Microsoft Teams"
          fill
          className="object-contain"
          unoptimized
        />
      </div>
    ),
  },
  {
    name: "Google Drive",
    icon: (
      <div className="w-8 h-8 relative">
        <Image
          src="https://cdn.simpleicons.org/googledrive/4285F4"
          alt="Google Drive"
          fill
          className="object-contain"
          unoptimized
        />
      </div>
    ),
  },
  {
    name: "Dropbox",
    icon: (
      <div className="w-8 h-8 relative">
        <Image
          src="https://cdn.simpleicons.org/dropbox/0061FF"
          alt="Dropbox"
          fill
          className="object-contain"
          unoptimized
        />
      </div>
    ),
  },
  {
    name: "Mailchimp",
    icon: (
      <div className="w-8 h-8 relative">
        <Image
          src="https://cdn.simpleicons.org/mailchimp/FFE01B"
          alt="Mailchimp"
          fill
          className="object-contain"
          unoptimized
        />
      </div>
    ),
  },
  {
    name: "HubSpot",
    icon: (
      <div className="w-8 h-8 relative">
        <Image
          src="https://cdn.simpleicons.org/hubspot/FF7A59"
          alt="HubSpot"
          fill
          className="object-contain"
          unoptimized
        />
      </div>
    ),
  },
  {
    name: "Salesforce",
    icon: (
      <div className="w-8 h-8 relative">
        <Image
          src="https://cdn.simpleicons.org/salesforce/00A1E0"
          alt="Salesforce"
          fill
          className="object-contain"
          unoptimized
        />
      </div>
    ),
  },
  {
    name: "Asana",
    icon: (
      <div className="w-8 h-8 relative">
        <Image
          src="https://cdn.simpleicons.org/asana/F06A6A"
          alt="Asana"
          fill
          className="object-contain"
          unoptimized
        />
      </div>
    ),
  },
  {
    name: "Trello",
    icon: (
      <div className="w-8 h-8 relative">
        <Image
          src="https://cdn.simpleicons.org/trello/0052CC"
          alt="Trello"
          fill
          className="object-contain"
          unoptimized
        />
      </div>
    ),
  },
  {
    name: "Twilio",
    icon: (
      <div className="w-8 h-8 relative">
        <Image
          src="https://cdn.simpleicons.org/twilio/F22F46"
          alt="Twilio"
          fill
          className="object-contain"
          unoptimized
        />
      </div>
    ),
  },
  {
    name: "JotForms",
    icon: (
      <div className="w-8 h-8 relative">
        <Image
          src="https://cdn.simpleicons.org/jotform/FFB120"
          alt="JotForms"
          fill
          className="object-contain"
          unoptimized
        />
      </div>
    ),
  },
  {
    name: "Google Forms",
    icon: (
      <div className="w-8 h-8 relative">
        <Image
          src="https://cdn.simpleicons.org/googleforms/4285F4"
          alt="Google Forms"
          fill
          className="object-contain"
          unoptimized
        />
      </div>
    ),
  },
];

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
                  <span>9 specialized trades</span>
                </div>
              </div>
              
              {/* Scrolling Trade Icons */}
              <div className="relative overflow-hidden pt-8 -mx-8 group/container">
                <div className="flex animate-scroll-right will-change-transform group-hover/container:[animation-play-state:paused]">
                  {/* First set */}
                  {trades.map((trade, index) => (
                    <div
                      key={`trade-1-${index}`}
                      className="flex-shrink-0 mx-4 flex flex-col items-center justify-center gap-2 group"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center text-primary transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:from-primary/20 group-hover:to-primary/10">
                        {trade.icon}
                      </div>
                      <span className="text-xs font-medium text-gray-600 whitespace-nowrap text-center">
                        {trade.name}
                      </span>
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {trades.map((trade, index) => (
                    <div
                      key={`trade-2-${index}`}
                      className="flex-shrink-0 mx-4 flex flex-col items-center justify-center gap-2 group"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center text-primary transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:from-primary/20 group-hover:to-primary/10">
                        {trade.icon}
                      </div>
                      <span className="text-xs font-medium text-gray-600 whitespace-nowrap text-center">
                        {trade.name}
                      </span>
                    </div>
                  ))}
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
              
              {/* Scrolling Integration Icons */}
              <div className="relative overflow-hidden pt-8 -mx-8 group/container">
                <div className="flex animate-scroll-left will-change-transform group-hover/container:[animation-play-state:paused]">
                  {/* First set */}
                  {integrations.map((integration, index) => (
                    <div
                      key={`integration-1-${index}`}
                      className="flex-shrink-0 mx-4 flex flex-col items-center justify-center gap-2 group relative"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center text-gray-600 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:from-gray-100 group-hover:to-gray-200">
                        {integration.icon}
                      </div>
                      <span className="text-xs font-medium text-gray-600 whitespace-nowrap text-center">
                        {integration.name}
                      </span>
                      {integration.badge && (
                        <span className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap shadow-md border border-blue-500/30">
                          {integration.badge}
                        </span>
                      )}
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {integrations.map((integration, index) => (
                    <div
                      key={`integration-2-${index}`}
                      className="flex-shrink-0 mx-4 flex flex-col items-center justify-center gap-2 group relative"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center text-gray-600 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:from-gray-100 group-hover:to-gray-200">
                        {integration.icon}
                      </div>
                      <span className="text-xs font-medium text-gray-600 whitespace-nowrap text-center">
                        {integration.name}
                      </span>
                      {integration.badge && (
                        <span className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap shadow-md border border-blue-500/30">
                          {integration.badge}
                        </span>
                      )}
                    </div>
                  ))}
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
