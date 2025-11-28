"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data representing the S-curve pattern from the screenshot
const chartData = [
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

export default function LaborHoursChart() {
  return (
    <div className="w-full h-full">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Labor Hours Curve</h3>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={chartData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="date" 
            stroke="#6b7280"
            style={{ fontSize: '12px' }}
            tick={{ fill: '#6b7280' }}
          />
          <YAxis 
            stroke="#6b7280"
            style={{ fontSize: '12px' }}
            tick={{ fill: '#6b7280' }}
            domain={[0, 65]}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#fff', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '12px'
            }}
          />
          <Legend 
            wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }}
            iconType="line"
          />
          <Line 
            type="monotone" 
            dataKey="planned" 
            stroke="#3b82f6" 
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ fill: '#3b82f6', r: 4 }}
            name="Planned (S-Curve)"
          />
          <Line 
            type="monotone" 
            dataKey="actual" 
            stroke="#3b82f6" 
            strokeWidth={2}
            dot={{ fill: '#3b82f6', r: 4 }}
            name="Actual Hours"
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
        <p className="text-xs text-gray-700 leading-relaxed">
          <strong className="text-gray-900">What is a Good Labor Curve?</strong> The ideal S-curve shows a slow start, 
          gradual ramp-up, peak activity in the middle, and a controlled finish—helping you spot issues before they impact your margin.
        </p>
      </div>
    </div>
  );
}

