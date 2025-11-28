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
  }));
};

const RealTimeMetrics = () => {
  const [data, setData] = useState<ReturnType<typeof generateTimeSeriesData> | null>(null);
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [mounted, setMounted] = useState(false);

  // Initialize data only on client side to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
    setData(generateTimeSeriesData());
    setCurrentTime(new Date());
  }, []);

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
  } : {
    laborCost: 0,
    materialSpending: 0,
    margin: 0,
    budgetUtilization: 0,
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

  return (
    <div className="w-full h-full p-6 bg-white rounded-xl">
      {/* Header with real-time indicator */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Real-Time Project Metrics
          </h3>
          <p className="text-sm text-gray-500">Live updates every 5 seconds</p>
        </div>
        <div className="flex items-center gap-2 bg-green-50 px-3 py-1.5 rounded-full border border-green-200">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-medium text-green-700">
            {mounted && currentTime ? formatTime(currentTime) : "--:--:--"}
          </span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 transition-all duration-300 hover:shadow-md">
          <p className="text-xs font-medium text-blue-600 uppercase tracking-wide mb-1">
            Labor Costs
          </p>
          <p className="text-2xl font-bold text-blue-900 transition-all duration-500">
            {formatCurrency(currentMetrics.laborCost)}
          </p>
          <p className="text-xs text-blue-600 mt-1">This week</p>
        </div>

        <div className="bg-purple-50 rounded-lg p-4 border border-purple-100 transition-all duration-300 hover:shadow-md">
          <p className="text-xs font-medium text-purple-600 uppercase tracking-wide mb-1">
            Material Spending
          </p>
          <p className="text-2xl font-bold text-purple-900 transition-all duration-500">
            {formatCurrency(currentMetrics.materialSpending)}
          </p>
          <p className="text-xs text-purple-600 mt-1">This week</p>
        </div>

        <div className="bg-green-50 rounded-lg p-4 border border-green-100 transition-all duration-300 hover:shadow-md">
          <p className="text-xs font-medium text-green-600 uppercase tracking-wide mb-1">
            Project Margin
          </p>
          <p className="text-2xl font-bold text-green-900 transition-all duration-500">
            {currentMetrics.margin.toFixed(1)}%
          </p>
          <p className="text-xs text-green-600 mt-1">Current</p>
        </div>

        <div className="bg-orange-50 rounded-lg p-4 border border-orange-100 transition-all duration-300 hover:shadow-md">
          <p className="text-xs font-medium text-orange-600 uppercase tracking-wide mb-1">
            Budget Utilization
          </p>
          <p className="text-2xl font-bold text-orange-900 transition-all duration-500">
            {currentMetrics.budgetUtilization.toFixed(1)}%
          </p>
          <p className="text-xs text-orange-600 mt-1">Used</p>
        </div>
      </div>

      {/* Combined Trend Chart */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">
          Weekly Trend Analysis
        </h4>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data || []} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.5} />
            <XAxis
              dataKey="day"
              stroke="#6b7280"
              fontSize={11}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              yAxisId="left"
              stroke="#6b7280"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="#6b7280"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{ fontSize: "11px", paddingTop: "10px" }}
              iconType="line"
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="laborCost"
              stroke="#2563eb"
              strokeWidth={2.5}
              dot={{ fill: "#2563eb", r: 3 }}
              activeDot={{ r: 5 }}
              name="Labor Costs"
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="materialSpending"
              stroke="#9333ea"
              strokeWidth={2.5}
              dot={{ fill: "#9333ea", r: 3 }}
              activeDot={{ r: 5 }}
              name="Material Spending"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="margin"
              stroke="#16a34a"
              strokeWidth={2.5}
              dot={{ fill: "#16a34a", r: 3 }}
              activeDot={{ r: 5 }}
              name="Margin %"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Budget Utilization Bar */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-sm font-semibold text-gray-700">
            Budget Utilization
          </h4>
          <span className="text-sm font-medium text-gray-600">
            {currentMetrics.budgetUtilization.toFixed(1)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-orange-400 to-orange-500 h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${currentMetrics.budgetUtilization}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default RealTimeMetrics;

