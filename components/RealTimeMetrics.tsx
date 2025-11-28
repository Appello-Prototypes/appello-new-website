"use client";

import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
} from "recharts";

// Sample data that demonstrates real-time metrics
const generateTimeSeriesData = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return days.map((day, index) => ({
    day,
    laborCost: 45000 + Math.random() * 10000,
    materialSpending: 120000 + Math.random() * 20000,
    margin: 18 + Math.random() * 5,
    budgetUtilization: 65 + index * 3 + Math.random() * 2,
    equipmentUtilization: 72 + Math.random() * 8,
    crewProductivity: 85 + Math.random() * 10,
    changeOrders: 3 + Math.floor(Math.random() * 4),
    safetyIncidents: Math.floor(Math.random() * 2),
  }));
};

// Different metric views to rotate through - expanded based on ATLAS insights
type MetricView = 
  | "project-financials" 
  | "equipment-utilization" 
  | "crew-productivity" 
  | "change-orders"
  | "safety-compliance"
  | "productivity-factor"
  | "spent-vs-earned"
  | "install-velocity";

const RealTimeMetrics = () => {
  const [data, setData] = useState<ReturnType<typeof generateTimeSeriesData> | null>(null);
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [mounted, setMounted] = useState(false);
  const [currentView, setCurrentView] = useState<MetricView>("project-financials");

  // Initialize data only on client side to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
    setData(generateTimeSeriesData());
    setCurrentTime(new Date());
  }, []);

  // Rotate through different metric views every 8 seconds
  useEffect(() => {
    if (!mounted) return;
    
    const views: MetricView[] = [
      "project-financials",
      "equipment-utilization", 
      "crew-productivity",
      "change-orders",
      "safety-compliance",
      "productivity-factor",
      "spent-vs-earned",
      "install-velocity"
    ];
    
    let viewIndex = 0;
    const viewInterval = setInterval(() => {
      viewIndex = (viewIndex + 1) % views.length;
      setCurrentView(views[viewIndex]);
    }, 8000); // Rotate every 8 seconds

    return () => clearInterval(viewInterval);
  }, [mounted]);

  // Simulate real-time updates
  useEffect(() => {
    if (!mounted) return;
    
    const interval = setInterval(() => {
      setData(generateTimeSeriesData());
      setCurrentTime(new Date());
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, [mounted]);

  // Calculate current metrics
  const currentMetrics = data ? {
    laborCost: data[data.length - 1].laborCost,
    materialSpending: data[data.length - 1].materialSpending,
    margin: data[data.length - 1].margin,
    budgetUtilization: data[data.length - 1].budgetUtilization,
    equipmentUtilization: data[data.length - 1].equipmentUtilization,
    crewProductivity: data[data.length - 1].crewProductivity,
    changeOrders: data[data.length - 1].changeOrders,
    safetyIncidents: data[data.length - 1].safetyIncidents,
  } : {
    laborCost: 0,
    materialSpending: 0,
    margin: 0,
    budgetUtilization: 0,
    equipmentUtilization: 0,
    crewProductivity: 0,
    changeOrders: 0,
    safetyIncidents: 0,
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatTime = (date: Date | null) => {
    if (!date) return "--:--:--";
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  // Custom tooltip
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {`${entry.name}: ${
                entry.name.includes("Cost") || entry.name.includes("Spending")
                  ? formatCurrency(entry.value)
                  : entry.name.includes("Margin")
                  ? `${entry.value.toFixed(1)}%`
                  : `${entry.value.toFixed(1)}%`
              }`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  // Render different views based on currentView
  const renderView = () => {
    if (!data) return null;

    switch (currentView) {
      case "project-financials":
        return (
          <>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 transition-all duration-500">
                <p className="text-xs font-medium text-blue-600 uppercase tracking-wide mb-1">
                  Labor Costs
                </p>
                <p className="text-2xl font-bold text-blue-900">
                  {formatCurrency(currentMetrics.laborCost)}
                </p>
                <p className="text-xs text-blue-600 mt-1">This week</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-100 transition-all duration-500">
                <p className="text-xs font-medium text-purple-600 uppercase tracking-wide mb-1">
                  Material Spending
                </p>
                <p className="text-2xl font-bold text-purple-900">
                  {formatCurrency(currentMetrics.materialSpending)}
                </p>
                <p className="text-xs text-purple-600 mt-1">This week</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-100 transition-all duration-500">
                <p className="text-xs font-medium text-green-600 uppercase tracking-wide mb-1">
                  Project Margin
                </p>
                <p className="text-2xl font-bold text-green-900">
                  {currentMetrics.margin.toFixed(1)}%
                </p>
                <p className="text-xs text-green-600 mt-1">Current</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-4 border border-orange-100 transition-all duration-500">
                <p className="text-xs font-medium text-orange-600 uppercase tracking-wide mb-1">
                  Budget Utilization
                </p>
                <p className="text-2xl font-bold text-orange-900">
                  {currentMetrics.budgetUtilization.toFixed(1)}%
                </p>
                <p className="text-xs text-orange-600 mt-1">Used</p>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">
                Weekly Financial Trends
              </h4>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.5} />
                  <XAxis dataKey="day" stroke="#6b7280" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis yAxisId="left" stroke="#6b7280" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                  <YAxis yAxisId="right" orientation="right" stroke="#6b7280" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}%`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ fontSize: "11px", paddingTop: "10px" }} iconType="line" />
                  <Line yAxisId="left" type="monotone" dataKey="laborCost" stroke="#2563eb" strokeWidth={2.5} dot={{ fill: "#2563eb", r: 3 }} activeDot={{ r: 5 }} name="Labor Costs" />
                  <Line yAxisId="left" type="monotone" dataKey="materialSpending" stroke="#9333ea" strokeWidth={2.5} dot={{ fill: "#9333ea", r: 3 }} activeDot={{ r: 5 }} name="Material Spending" />
                  <Line yAxisId="right" type="monotone" dataKey="margin" stroke="#16a34a" strokeWidth={2.5} dot={{ fill: "#16a34a", r: 3 }} activeDot={{ r: 5 }} name="Margin %" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </>
        );

      case "equipment-utilization":
        return (
          <>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100 transition-all duration-500">
                <p className="text-xs font-medium text-indigo-600 uppercase tracking-wide mb-1">
                  Equipment Utilization
                </p>
                <p className="text-2xl font-bold text-indigo-900">
                  {currentMetrics.equipmentUtilization.toFixed(1)}%
                </p>
                <p className="text-xs text-indigo-600 mt-1">Fleet average</p>
              </div>
              <div className="bg-teal-50 rounded-lg p-4 border border-teal-100 transition-all duration-500">
                <p className="text-xs font-medium text-teal-600 uppercase tracking-wide mb-1">
                  Active Equipment
                </p>
                <p className="text-2xl font-bold text-teal-900">24/32</p>
                <p className="text-xs text-teal-600 mt-1">Units in use</p>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">
                Equipment Utilization Trend
              </h4>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.5} />
                  <XAxis dataKey="day" stroke="#6b7280" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke="#6b7280" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}%`} domain={[0, 100]} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="equipmentUtilization" fill="#6366f1" radius={[4, 4, 0, 0]} name="Utilization %" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </>
        );

      case "crew-productivity":
        return (
          <>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100 transition-all duration-500">
                <p className="text-xs font-medium text-emerald-600 uppercase tracking-wide mb-1">
                  Crew Productivity
                </p>
                <p className="text-2xl font-bold text-emerald-900">
                  {currentMetrics.crewProductivity.toFixed(1)}%
                </p>
                <p className="text-xs text-emerald-600 mt-1">vs. baseline</p>
              </div>
              <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-100 transition-all duration-500">
                <p className="text-xs font-medium text-cyan-600 uppercase tracking-wide mb-1">
                  Active Crews
                </p>
                <p className="text-2xl font-bold text-cyan-900">12</p>
                <p className="text-xs text-cyan-600 mt-1">On job sites</p>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">
                Crew Productivity Trend
              </h4>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.5} />
                  <XAxis dataKey="day" stroke="#6b7280" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke="#6b7280" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}%`} domain={[70, 100]} />
                  <Tooltip content={<CustomTooltip />} />
                  <Line type="monotone" dataKey="crewProductivity" stroke="#10b981" strokeWidth={2.5} dot={{ fill: "#10b981", r: 3 }} activeDot={{ r: 5 }} name="Productivity %" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </>
        );

      case "change-orders":
        return (
          <>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-amber-50 rounded-lg p-4 border border-amber-100 transition-all duration-500">
                <p className="text-xs font-medium text-amber-600 uppercase tracking-wide mb-1">
                  Change Orders
                </p>
                <p className="text-2xl font-bold text-amber-900">
                  {currentMetrics.changeOrders}
                </p>
                <p className="text-xs text-amber-600 mt-1">This week</p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-100 transition-all duration-500">
                <p className="text-xs font-medium text-yellow-600 uppercase tracking-wide mb-1">
                  Total Value
                </p>
                <p className="text-2xl font-bold text-yellow-900">
                  {formatCurrency(currentMetrics.changeOrders * 15000)}
                </p>
                <p className="text-xs text-yellow-600 mt-1">Pending approval</p>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">
                Change Orders This Week
              </h4>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.5} />
                  <XAxis dataKey="day" stroke="#6b7280" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke="#6b7280" fontSize={11} tickLine={false} axisLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="changeOrders" fill="#f59e0b" radius={[4, 4, 0, 0]} name="Change Orders" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </>
        );

      case "safety-compliance":
        return (
          <>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-red-50 rounded-lg p-4 border border-red-100 transition-all duration-500">
                <p className="text-xs font-medium text-red-600 uppercase tracking-wide mb-1">
                  Safety Incidents
                </p>
                <p className="text-2xl font-bold text-red-900">
                  {currentMetrics.safetyIncidents}
                </p>
                <p className="text-xs text-red-600 mt-1">This week</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-100 transition-all duration-500">
                <p className="text-xs font-medium text-green-600 uppercase tracking-wide mb-1">
                  Compliance Rate
                </p>
                <p className="text-2xl font-bold text-green-900">98.5%</p>
                <p className="text-xs text-green-600 mt-1">Certifications current</p>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">
                Safety & Compliance Overview
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-700">Safety Forms Submitted</span>
                  <span className="text-sm font-semibold text-gray-900">142/145</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-700">Certifications Expiring Soon</span>
                  <span className="text-sm font-semibold text-gray-900">3</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-700">Equipment Inspections Due</span>
                  <span className="text-sm font-semibold text-gray-900">8</span>
                </div>
              </div>
            </div>
          </>
        );

      case "productivity-factor":
        const avgPF = data ? data.reduce((sum, d) => sum + (d.crewProductivity || 85), 0) / data.length : 0;
        return (
          <>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100 transition-all duration-500">
                <p className="text-xs font-medium text-emerald-600 uppercase tracking-wide mb-1">
                  Productivity Factor
                </p>
                <p className="text-2xl font-bold text-emerald-900">
                  {avgPF.toFixed(1)}%
                </p>
                <p className="text-xs text-emerald-600 mt-1">Hours Earned ÷ Burned</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 transition-all duration-500">
                <p className="text-xs font-medium text-blue-600 uppercase tracking-wide mb-1">
                  Status
                </p>
                <p className="text-2xl font-bold text-blue-900">
                  {avgPF > 100 ? "Ahead" : avgPF > 95 ? "On Track" : "Behind"}
                </p>
                <p className="text-xs text-blue-600 mt-1">vs. schedule</p>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">
                Productivity Factor Trend
              </h4>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={data || []} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.5} />
                  <XAxis dataKey="day" stroke="#6b7280" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke="#6b7280" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}%`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Line type="monotone" dataKey="crewProductivity" stroke="#10b981" strokeWidth={2.5} dot={{ fill: "#10b981", r: 3 }} activeDot={{ r: 5 }} name="PF %" />
                  <Line type="monotone" dataKey={() => 100} stroke="#94a3b8" strokeWidth={1} strokeDasharray="5 5" dot={false} name="100% Baseline" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </>
        );

      case "spent-vs-earned":
        const totalSpent = data ? data.reduce((sum, d) => sum + d.laborCost + d.materialSpending, 0) : 0;
        const totalEarned = totalSpent * 1.15; // Simulated earned amount
        return (
          <>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-red-50 rounded-lg p-4 border border-red-100 transition-all duration-500">
                <p className="text-xs font-medium text-red-600 uppercase tracking-wide mb-1">
                  Total Spent
                </p>
                <p className="text-2xl font-bold text-red-900">
                  {formatCurrency(totalSpent)}
                </p>
                <p className="text-xs text-red-600 mt-1">This week</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-100 transition-all duration-500">
                <p className="text-xs font-medium text-green-600 uppercase tracking-wide mb-1">
                  Total Earned
                </p>
                <p className="text-2xl font-bold text-green-900">
                  {formatCurrency(totalEarned)}
                </p>
                <p className="text-xs text-green-600 mt-1">This week</p>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">
                Spent vs Earned Comparison
              </h4>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={data || []} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.5} />
                  <XAxis dataKey="day" stroke="#6b7280" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke="#6b7280" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="laborCost" stackId="spent" fill="#ef4444" radius={[0, 0, 0, 0]} name="Labor Spent" />
                  <Bar dataKey="materialSpending" stackId="spent" fill="#f87171" radius={[4, 4, 0, 0]} name="Material Spent" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </>
        );

      case "install-velocity":
        const avgUnits = data ? data.reduce((sum, d) => sum + (d.crewProductivity || 85), 0) / data.length : 0;
        return (
          <>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 transition-all duration-500">
                <p className="text-xs font-medium text-blue-600 uppercase tracking-wide mb-1">
                  Avg Units/Day
                </p>
                <p className="text-2xl font-bold text-blue-900">
                  {avgUnits.toFixed(0)}
                </p>
                <p className="text-xs text-blue-600 mt-1">This week</p>
              </div>
              <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100 transition-all duration-500">
                <p className="text-xs font-medium text-indigo-600 uppercase tracking-wide mb-1">
                  Target
                </p>
                <p className="text-2xl font-bold text-indigo-900">50</p>
                <p className="text-xs text-indigo-600 mt-1">Units/day</p>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">
                Daily Install Velocity
              </h4>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={data || []} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.5} />
                  <XAxis dataKey="day" stroke="#6b7280" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke="#6b7280" fontSize={11} tickLine={false} axisLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="crewProductivity" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Units Completed" />
                  <Bar dataKey="day" fill="#94a3b8" fillOpacity={0.3} radius={[4, 4, 0, 0]} name="Target" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  const getViewTitle = () => {
    switch (currentView) {
      case "project-financials": return "Project Financials";
      case "equipment-utilization": return "Equipment Utilization";
      case "crew-productivity": return "Crew Productivity";
      case "change-orders": return "Change Orders";
      case "safety-compliance": return "Safety & Compliance";
      case "productivity-factor": return "Productivity Factor";
      case "spent-vs-earned": return "Spent vs Earned";
      case "install-velocity": return "Install Velocity";
      default: return "Real-Time Metrics";
    }
  };

  return (
    <div className="w-full h-full p-6 bg-white rounded-xl">
      {/* Header with real-time indicator */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 transition-all duration-500">
            {getViewTitle()}
          </h3>
          <p className="text-sm text-gray-500">Live updates • Rotates every 8 seconds</p>
        </div>
        <div className="flex items-center gap-2 bg-green-50 px-3 py-1.5 rounded-full border border-green-200">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-medium text-green-700">
            {mounted && currentTime ? formatTime(currentTime) : "--:--:--"}
          </span>
        </div>
      </div>

      {/* Rotating content */}
      <div className="transition-all duration-500 ease-in-out">
        {renderView()}
      </div>
    </div>
  );
};

export default RealTimeMetrics;

