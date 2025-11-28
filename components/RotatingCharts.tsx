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
  Area,
  AreaChart,
} from "recharts";

type ChartView = 
  | "labor-curve" 
  | "productivity-factor"
  | "spent-vs-earned"
  | "install-velocity"
  | "progress-billing"
  | "job-performance";

// Generate sample data for different chart types
const generateLaborCurveData = () => {
  return [
    { date: 'Mar 15', planned: 5, actual: 4 },
    { date: 'Apr 1', planned: 8, actual: 7 },
    { date: 'Apr 15', planned: 12, actual: 10 },
    { date: 'May 1', planned: 18, actual: 16 },
    { date: 'May 15', planned: 25, actual: 24 },
    { date: 'Jun 1', planned: 32, actual: 30 },
    { date: 'Jun 15', planned: 40, actual: 38 },
    { date: 'Jul 1', planned: 48, actual: 46 },
    { date: 'Jul 15', planned: 52, actual: 50 },
    { date: 'Aug 1', planned: 55, actual: 53 },
    { date: 'Aug 15', planned: 58, actual: 56 },
    { date: 'Sep 1', planned: 60, actual: 58 },
    { date: 'Sep 15', planned: 58, actual: 56 },
    { date: 'Oct 1', planned: 55, actual: 53 },
    { date: 'Oct 15', planned: 50, actual: 48 },
    { date: 'Nov 1', planned: 42, actual: 40 },
    { date: 'Nov 15', planned: 32, actual: 30 },
    { date: 'Dec 1', planned: 20, actual: 18 },
    { date: 'Dec 15', planned: 10, actual: 8 },
    { date: 'Dec 20', planned: 5, actual: 4 },
  ];
};

const generateProductivityFactorData = () => {
  const weeks = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8"];
  return weeks.map((week, index) => ({
    week,
    hoursEarned: 320 + index * 15 + Math.random() * 20,
    hoursBurned: 300 + index * 12 + Math.random() * 25,
    pf: 0,
  })).map(item => ({
    ...item,
    pf: (item.hoursEarned / item.hoursBurned) * 100,
  }));
};

const generateSpentVsEarnedData = () => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  return months.map((month, index) => ({
    month,
    spent: 450000 + index * 25000 + Math.random() * 30000,
    earned: 480000 + index * 30000 + Math.random() * 35000,
    margin: 0,
  })).map(item => ({
    ...item,
    margin: ((item.earned - item.spent) / item.earned) * 100,
  }));
};

const generateInstallVelocityData = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return days.map((day, index) => ({
    day,
    unitsCompleted: 45 + index * 3 + Math.random() * 8,
    target: 50,
  }));
};

const generateProgressBillingData = () => {
  const periods = ["Period 1", "Period 2", "Period 3", "Period 4", "Period 5", "Period 6"];
  return periods.map((period, index) => ({
    period,
    billed: 120000 + index * 15000 + Math.random() * 10000,
    actuals: 115000 + index * 14000 + Math.random() * 12000,
  }));
};

const generateJobPerformanceData = () => {
  const jobs = ["Job A", "Job B", "Job C", "Job D", "Job E"];
  return jobs.map((job) => ({
    job,
    budget: 500000 + Math.random() * 200000,
    actual: 0,
    margin: 0,
  })).map(item => ({
    ...item,
    actual: item.budget * (0.85 + Math.random() * 0.15),
    margin: ((item.budget - item.actual) / item.budget) * 100,
  }));
};

interface RotatingChartsProps {
  currentView: ChartView;
}

export default function RotatingCharts({ currentView }: RotatingChartsProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {`${entry.name}: ${
                entry.name.includes("$") || entry.value > 1000
                  ? formatCurrency(entry.value)
                  : entry.name.includes("PF") || entry.name.includes("Margin")
                  ? `${entry.value.toFixed(1)}%`
                  : entry.value.toFixed(1)
              }`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const renderChart = () => {
    if (!mounted) return null;

    switch (currentView) {
      case "labor-curve":
        const laborData = generateLaborCurveData();
        return (
          <>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Labor Hours Curve</h3>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={laborData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="date" stroke="#6b7280" style={{ fontSize: '12px' }} tick={{ fill: '#6b7280' }} />
                <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} tick={{ fill: '#6b7280' }} domain={[0, 65]} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} iconType="line" />
                <Line type="monotone" dataKey="planned" stroke="#3b82f6" strokeWidth={2} strokeDasharray="5 5" dot={{ fill: '#3b82f6', r: 4 }} name="Planned (S-Curve)" />
                <Line type="monotone" dataKey="actual" stroke="#3b82f6" strokeWidth={2} dot={{ fill: '#3b82f6', r: 4 }} name="Actual Hours" />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-xs text-gray-700 leading-relaxed">
                <strong className="text-gray-900">What is a Good Labor Curve?</strong> The ideal S-curve shows a slow start, 
                gradual ramp-up, peak activity in the middle, and a controlled finish—helping you spot issues before they impact your margin.
              </p>
            </div>
          </>
        );

      case "productivity-factor":
        const pfData = generateProductivityFactorData();
        const avgPF = pfData.reduce((sum, d) => sum + d.pf, 0) / pfData.length;
        return (
          <>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Productivity Factor (PF)</h3>
            <div className="mb-4 p-3 bg-emerald-50 rounded-lg border border-emerald-100">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-emerald-700">Average PF</span>
                <span className="text-2xl font-bold text-emerald-900">{avgPF.toFixed(1)}%</span>
              </div>
              <p className="text-xs text-emerald-600 mt-1">Hours Earned ÷ Hours Burned</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={pfData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="week" stroke="#6b7280" style={{ fontSize: '12px' }} tick={{ fill: '#6b7280' }} />
                <YAxis yAxisId="left" stroke="#6b7280" style={{ fontSize: '12px' }} tick={{ fill: '#6b7280' }} tickFormatter={(value) => `${value.toFixed(0)}%`} />
                <YAxis yAxisId="right" orientation="right" stroke="#6b7280" style={{ fontSize: '12px' }} tick={{ fill: '#6b7280' }} tickFormatter={(value) => `${value.toFixed(0)}h`} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                <Area yAxisId="left" type="monotone" dataKey="pf" stroke="#10b981" fill="#10b981" fillOpacity={0.3} name="Productivity Factor %" />
                <Line yAxisId="right" type="monotone" dataKey="hoursEarned" stroke="#3b82f6" strokeWidth={2} strokeDasharray="5 5" dot={false} name="Hours Earned" />
                <Line yAxisId="right" type="monotone" dataKey="hoursBurned" stroke="#ef4444" strokeWidth={2} dot={false} name="Hours Burned" />
              </AreaChart>
            </ResponsiveContainer>
            <div className="mt-4 p-3 bg-emerald-50 rounded-lg border border-emerald-100">
              <p className="text-xs text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Productivity Factor:</strong> Measures efficiency by comparing hours earned (work completed) 
                to hours burned (time spent). PF &gt; 100% means you're ahead of schedule.
              </p>
            </div>
          </>
        );

      case "spent-vs-earned":
        const spentEarnedData = generateSpentVsEarnedData();
        return (
          <>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Spent vs Earned</h3>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={spentEarnedData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" style={{ fontSize: '12px' }} tick={{ fill: '#6b7280' }} />
                <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} tick={{ fill: '#6b7280' }} tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                <Bar dataKey="earned" fill="#10b981" radius={[4, 4, 0, 0]} name="Earned" />
                <Bar dataKey="spent" fill="#ef4444" radius={[4, 4, 0, 0]} name="Spent" />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-100">
              <p className="text-xs text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Spent vs Earned:</strong> Compare what you've spent against what you've earned 
                to see if jobs are trending profitable. This is critical for catching margin erosion early.
              </p>
            </div>
          </>
        );

      case "install-velocity":
        const velocityData = generateInstallVelocityData();
        const avgVelocity = velocityData.reduce((sum, d) => sum + d.unitsCompleted, 0) / velocityData.length;
        return (
          <>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Install Velocity</h3>
            <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-blue-700">Avg Units/Day</span>
                <span className="text-2xl font-bold text-blue-900">{avgVelocity.toFixed(0)} units</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={velocityData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="day" stroke="#6b7280" style={{ fontSize: '12px' }} tick={{ fill: '#6b7280' }} />
                <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} tick={{ fill: '#6b7280' }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                <Bar dataKey="unitsCompleted" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Units Completed" />
                <Bar dataKey="target" fill="#94a3b8" fillOpacity={0.5} radius={[4, 4, 0, 0]} name="Target" />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-xs text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Install Velocity:</strong> Track units completed per day to measure crew productivity 
                and identify when projects are falling behind schedule.
              </p>
            </div>
          </>
        );

      case "progress-billing":
        const billingData = generateProgressBillingData();
        return (
          <>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Progress Billing vs Actuals</h3>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={billingData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="period" stroke="#6b7280" style={{ fontSize: '12px' }} tick={{ fill: '#6b7280' }} />
                <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} tick={{ fill: '#6b7280' }} tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} iconType="line" />
                <Line type="monotone" dataKey="billed" stroke="#10b981" strokeWidth={2} dot={{ fill: '#10b981', r: 4 }} name="Billed" />
                <Line type="monotone" dataKey="actuals" stroke="#ef4444" strokeWidth={2} strokeDasharray="5 5" dot={{ fill: '#ef4444', r: 4 }} name="Actual Costs" />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-4 p-3 bg-purple-50 rounded-lg border border-purple-100">
              <p className="text-xs text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Progress Billing:</strong> Compare what you've billed against actual costs 
                to ensure you're staying ahead of cash flow and maintaining healthy margins.
              </p>
            </div>
          </>
        );

      case "job-performance":
        const performanceData = generateJobPerformanceData();
        return (
          <>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Job Performance Overview</h3>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={performanceData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="job" stroke="#6b7280" style={{ fontSize: '12px' }} tick={{ fill: '#6b7280' }} />
                <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} tick={{ fill: '#6b7280' }} tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                <Bar dataKey="budget" fill="#94a3b8" fillOpacity={0.6} radius={[4, 4, 0, 0]} name="Budget" />
                <Bar dataKey="actual" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Actual" />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 p-3 bg-indigo-50 rounded-lg border border-indigo-100">
              <p className="text-xs text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Job Performance:</strong> Compare budgeted vs actual costs across all active jobs 
                to quickly identify which projects need attention.
              </p>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full h-full transition-all duration-700 ease-in-out">
      {renderChart()}
    </div>
  );
}

