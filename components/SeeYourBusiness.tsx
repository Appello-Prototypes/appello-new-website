"use client";

import Section from "./Section";
import Button from "./Button";
import RealTimeMetrics from "./RealTimeMetrics";
import RotatingCharts from "./RotatingCharts";
import { useState, useEffect } from "react";

type ChartView = 
  | "labor-curve" 
  | "productivity-factor"
  | "spent-vs-earned"
  | "install-velocity"
  | "progress-billing"
  | "job-performance";

type MetricView = 
  | "project-financials" 
  | "equipment-utilization" 
  | "crew-productivity" 
  | "change-orders"
  | "safety-compliance"
  | "productivity-factor"
  | "spent-vs-earned"
  | "install-velocity";

// Descriptions that match each view combination
const getDescription = (metricView: string, chartView: string) => {
  const descriptions: Record<string, Record<string, string>> = {
    "project-financials": {
      "labor-curve": "Track labor costs in real-time while monitoring your labor curve to ensure projects stay on schedule. Spot overruns before they impact your bottom line.",
      "productivity-factor": "Monitor project financials alongside productivity factor to see if you're earning more hours than you're burning—the key to profitable projects.",
      "spent-vs-earned": "Compare your financial performance with spent vs earned analysis to catch margin erosion early and protect profitability.",
      "install-velocity": "Track financial metrics while monitoring install velocity to ensure crews are meeting productivity targets and staying profitable.",
      "progress-billing": "See project financials alongside progress billing to ensure you're billing ahead of costs and maintaining healthy cash flow.",
      "job-performance": "Compare financial performance across all jobs to quickly identify which projects need attention and which are exceeding expectations.",
    },
    "equipment-utilization": {
      "labor-curve": "Monitor equipment utilization while tracking labor curves to optimize resource allocation and ensure crews have what they need when they need it.",
      "productivity-factor": "Track equipment efficiency alongside productivity factor to ensure your fleet is supporting crew productivity, not hindering it.",
      "spent-vs-earned": "Compare equipment costs against earned revenue to ensure your fleet investments are driving profitability.",
      "install-velocity": "Monitor equipment utilization with install velocity to ensure tools and equipment are enabling crew productivity.",
      "progress-billing": "Track equipment costs against progress billing to ensure equipment expenses are covered in your billings.",
      "job-performance": "See equipment utilization across all jobs to optimize fleet allocation and reduce idle equipment costs.",
    },
    "crew-productivity": {
      "labor-curve": "Monitor crew productivity alongside labor curves to ensure your teams are performing efficiently throughout the project lifecycle.",
      "productivity-factor": "Track crew productivity with productivity factor to measure efficiency and identify opportunities for improvement.",
      "spent-vs-earned": "Compare crew productivity against financial performance to ensure productive crews are translating to profitable projects.",
      "install-velocity": "Monitor crew productivity with install velocity to ensure teams are meeting daily production targets.",
      "progress-billing": "Track crew productivity alongside progress billing to ensure productive work is being billed appropriately.",
      "job-performance": "Compare crew productivity across all jobs to identify top-performing teams and areas for improvement.",
    },
    "change-orders": {
      "labor-curve": "Track change orders while monitoring labor curves to see how scope changes impact project timelines and resource allocation.",
      "productivity-factor": "Monitor change orders with productivity factor to ensure scope changes aren't negatively impacting crew efficiency.",
      "spent-vs-earned": "Compare change order value against spent vs earned to ensure change orders are profitable and properly tracked.",
      "install-velocity": "Track change orders alongside install velocity to see how scope changes impact daily production rates.",
      "progress-billing": "Monitor change orders with progress billing to ensure all scope changes are properly documented and billed.",
      "job-performance": "Compare change order frequency and value across jobs to identify patterns and improve change order management.",
    },
    "safety-compliance": {
      "labor-curve": "Monitor safety compliance while tracking labor curves to ensure safe work practices don't slow down project progress.",
      "productivity-factor": "Track safety metrics with productivity factor to prove that safe work practices don't compromise efficiency.",
      "spent-vs-earned": "Compare safety compliance costs against earned revenue to ensure safety investments are protecting profitability.",
      "install-velocity": "Monitor safety compliance with install velocity to ensure safe work practices support, not hinder, productivity.",
      "progress-billing": "Track safety compliance alongside progress billing to ensure safety requirements are properly accounted for in billings.",
      "job-performance": "Compare safety metrics across all jobs to identify best practices and ensure consistent compliance.",
    },
    "productivity-factor": {
      "labor-curve": "Track productivity factor alongside labor curves to ensure efficient crews are maintaining proper project pacing.",
      "productivity-factor": "Monitor productivity factor comprehensively to measure how efficiently you're completing work versus planned hours.",
      "spent-vs-earned": "Compare productivity factor with spent vs earned to ensure efficient work translates to profitable projects.",
      "install-velocity": "Track productivity factor with install velocity to ensure efficient crews are meeting daily production targets.",
      "progress-billing": "Monitor productivity factor alongside progress billing to ensure efficient work is being billed appropriately.",
      "job-performance": "Compare productivity factor across all jobs to identify efficiency leaders and improvement opportunities.",
    },
    "spent-vs-earned": {
      "labor-curve": "Compare spent vs earned while monitoring labor curves to ensure projects stay profitable throughout their lifecycle.",
      "productivity-factor": "Track spent vs earned with productivity factor to see how efficiency impacts profitability.",
      "spent-vs-earned": "Monitor spent vs earned comprehensively to catch margin erosion early and protect project profitability.",
      "install-velocity": "Compare spent vs earned with install velocity to ensure productive crews are driving profitable projects.",
      "progress-billing": "Track spent vs earned alongside progress billing to ensure you're billing ahead of costs.",
      "job-performance": "Compare spent vs earned across all jobs to quickly identify which projects are trending profitable.",
    },
    "install-velocity": {
      "labor-curve": "Track install velocity alongside labor curves to ensure daily production rates align with project timelines.",
      "productivity-factor": "Monitor install velocity with productivity factor to ensure productive crews are meeting daily targets.",
      "spent-vs-earned": "Compare install velocity with spent vs earned to ensure productive work translates to profitable projects.",
      "install-velocity": "Monitor install velocity comprehensively to track daily production rates and ensure crews meet targets.",
      "progress-billing": "Track install velocity alongside progress billing to ensure productive work is being billed appropriately.",
      "job-performance": "Compare install velocity across all jobs to identify top-performing crews and improvement opportunities.",
    },
  };

  return descriptions[metricView]?.[chartView] || 
    "No more waiting until month-end to know if jobs are profitable. Appello gives you instant visibility into labor costs, material spending, equipment utilization, and project margins. Make informed decisions today, not after it's too late to adjust.";
};

export default function SeeYourBusiness() {
  const [currentChartView, setCurrentChartView] = useState<ChartView>("labor-curve");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const chartViews: ChartView[] = [
      "labor-curve",
      "productivity-factor",
      "spent-vs-earned",
      "install-velocity",
      "progress-billing",
      "job-performance"
    ];
    
    let chartIndex = 0;
    const chartInterval = setInterval(() => {
      chartIndex = (chartIndex + 1) % chartViews.length;
      setCurrentChartView(chartViews[chartIndex]);
    }, 8000); // Rotate every 8 seconds (same as metrics)

    return () => clearInterval(chartInterval);
  }, []);

  // Get current metric view from RealTimeMetrics (we'll need to expose this)
  // For now, we'll use a simplified approach
  const [currentMetricView, setCurrentMetricView] = useState<MetricView>("project-financials");
  
  useEffect(() => {
    if (!mounted) return;
    const metricViews: MetricView[] = [
      "project-financials",
      "equipment-utilization",
      "crew-productivity",
      "change-orders",
      "safety-compliance",
      "productivity-factor",
      "spent-vs-earned",
      "install-velocity"
    ];
    
    let metricIndex = 0;
    const metricInterval = setInterval(() => {
      metricIndex = (metricIndex + 1) % metricViews.length;
      setCurrentMetricView(metricViews[metricIndex]);
    }, 8000);

    return () => clearInterval(metricInterval);
  }, [mounted]);

  return (
    <Section background="gradient" pattern decorative>
      <div className="space-y-12">
        {/* Header Section with Rotating Description */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            See Your Business In Real-Time
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed transition-all duration-700 ease-in-out min-h-[4rem]">
            {mounted ? getDescription(currentMetricView, currentChartView) : 
              "No more waiting until month-end to know if jobs are profitable. Appello gives you instant visibility into labor costs, material spending, equipment utilization, and project margins. Make informed decisions today, not after it's too late to adjust."}
          </p>
        </div>

        {/* Visuals Grid - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Rotating Real-Time Metrics */}
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 min-h-[500px] flex items-center transition-all duration-700">
            <RealTimeMetrics />
          </div>
          
          {/* Right Side - Rotating Charts */}
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm min-h-[500px] flex items-center transition-all duration-700">
            <RotatingCharts currentView={currentChartView} />
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
        
        {/* CTA */}
        <div className="text-center">
          <Button href="https://meetings.hubspot.com/shelson/appello-demo">
            Book a Free Demo
          </Button>
        </div>
      </div>
    </Section>
  );
}
