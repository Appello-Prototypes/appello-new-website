"use client";

import { useEffect, useState } from "react";
import Section from "./Section";
import Button from "./Button";

interface InsightCard {
  title: string;
  tag: string;
  tagColor: string;
  icon: React.ReactNode;
  visualType: 'pattern' | 'correlation' | 'prediction' | 'connection' | 'text';
  insights: Array<{
    text: string;
    color: string;
    source?: string;
    value?: string | number;
  }>;
  connection?: {
    label: string;
    value: string;
    color: string;
  };
  chartData?: {
    type: 'bar' | 'line' | 'pie' | 'trend';
    values: number[];
    labels?: string[];
  };
}

// Icon Components
const PatternIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const CorrelationIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const PredictionIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const ConnectionIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
);

const TextAnalysisIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const insightCards: InsightCard[] = [
  {
    title: "Hidden Pattern Detected",
    tag: "Pattern Recognition",
    tagColor: "purple",
    icon: <PatternIcon />,
    visualType: 'pattern',
    insights: [
      { text: "Field notes mention 'delays' 3x more on Job #247", color: "blue", source: "Unstructured Data", value: 3 },
      { text: "Timesheets show 23% overtime spike", color: "blue", source: "Structured Data", value: 23 },
      { text: "Safety reports: 2 near-misses this week", color: "blue", source: "Unstructured Data", value: 2 },
    ],
    connection: {
      label: "Connected Insight",
      value: "Root cause: Equipment shortage causing delays & safety risks",
      color: "purple"
    },
    chartData: {
      type: 'bar',
      values: [3, 23, 2],
      labels: ['Delays', 'Overtime %', 'Near-misses']
    }
  },
  {
    title: "Cross-Domain Intelligence",
    tag: "Data Correlation",
    tagColor: "blue",
    icon: <CorrelationIcon />,
    visualType: 'correlation',
    insights: [
      { text: "Financials: Job profitability down 12%", color: "green", source: "Structured Data", value: -12 },
      { text: "Field notes: 'Material waste increasing'", color: "green", source: "Unstructured Data" },
      { text: "Invoices: 15% over-budget on materials", color: "green", source: "Structured Data", value: 15 },
    ],
    connection: {
      label: "Connected Insight",
      value: "Pattern: Material waste correlates with profit decline",
      color: "blue"
    },
    chartData: {
      type: 'trend',
      values: [100, 95, 88],
      labels: ['Week 1', 'Week 2', 'Week 3']
    }
  },
  {
    title: "Predictive Pattern Recognition",
    tag: "AI Analysis",
    tagColor: "indigo",
    icon: <PredictionIcon />,
    visualType: 'prediction',
    insights: [
      { text: "Historical data: Similar projects 87% likely to overrun", color: "purple", source: "Pattern Match", value: 87 },
      { text: "Current metrics: Tracking 15% behind schedule", color: "purple", source: "Structured Data", value: 15 },
      { text: "Field sentiment: 'Tight timeline' mentioned 8x", color: "purple", source: "Unstructured Data", value: 8 },
    ],
    connection: {
      label: "Connected Insight",
      value: "87% confidence: Project at risk of overrun",
      color: "indigo"
    },
    chartData: {
      type: 'line',
      values: [85, 86, 87],
      labels: ['Confidence']
    }
  },
  {
    title: "Connecting the Dots",
    tag: "Multi-Source Analysis",
    tagColor: "teal",
    icon: <ConnectionIcon />,
    visualType: 'connection',
    insights: [
      { text: "Crew A: 15% productivity increase", color: "blue", source: "Timesheets", value: 15 },
      { text: "Field notes: 'Better equipment setup'", color: "blue", source: "Unstructured Data" },
      { text: "Job financials: 8% margin improvement", color: "blue", source: "Structured Data", value: 8 },
    ],
    connection: {
      label: "Connected Insight",
      value: "Equipment optimization drives productivity & profitability",
      color: "teal"
    },
    chartData: {
      type: 'trend',
      values: [100, 115, 123],
      labels: ['Baseline', 'Productivity', 'Margin']
    }
  },
  {
    title: "Unstructured Data Intelligence",
    tag: "Text Analysis",
    tagColor: "pink",
    icon: <TextAnalysisIcon />,
    visualType: 'text',
    insights: [
      { text: "Safety reports: 'Slippery conditions' mentioned 5x", color: "red", source: "Field Notes", value: 5 },
      { text: "Weather data: Rain forecast for next 3 days", color: "red", source: "External Data", value: 3 },
      { text: "Project timeline: Critical path activities scheduled", color: "red", source: "Structured Data" },
    ],
    connection: {
      label: "Connected Insight",
      value: "Weather risk identified: Reschedule critical activities",
      color: "pink"
    },
    chartData: {
      type: 'bar',
      values: [5, 3],
      labels: ['Mentions', 'Days']
    }
  }
];

const tagColors: Record<string, { bg: string; text: string }> = {
  purple: { bg: "bg-purple-50", text: "text-purple-600" },
  blue: { bg: "bg-blue-50", text: "text-blue-600" },
  indigo: { bg: "bg-indigo-50", text: "text-indigo-600" },
  teal: { bg: "bg-teal-50", text: "text-teal-600" },
  pink: { bg: "bg-pink-50", text: "text-pink-600" },
};

const dotColors: Record<string, string> = {
  blue: "bg-blue-500",
  green: "bg-green-500",
  purple: "bg-purple-500",
  red: "bg-red-500",
};

// Animated Counter Component
const AnimatedCounter = ({ value, duration = 1000 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const startValue = 0;
    const endValue = value;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(startValue + (endValue - startValue) * easeOutQuart));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration]);

  return <span>{count}</span>;
};

// Progress Ring Component
const ProgressRing = ({ value, max = 100, size = 60, strokeWidth = 6, color }: { value: number; max?: number; size?: number; strokeWidth?: number; color: string }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const percentage = Math.min((value / max) * 100, 100);
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          className="text-gray-200"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className={`transition-all duration-1000 ease-out ${color}`}
          style={{ transition: 'stroke-dashoffset 1s ease-out' }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`text-xs font-bold ${color.replace('text-', 'text-')}`} style={{ color: color.includes('purple') ? '#9333ea' : color.includes('blue') ? '#3b82f6' : color.includes('indigo') ? '#6366f1' : color.includes('teal') ? '#14b8a6' : '#ec4899' }}>
          {Math.round(percentage)}%
        </span>
      </div>
    </div>
  );
};

// Sparkline Component
const Sparkline = ({ data, color, height = 20 }: { data: number[]; color: string; height?: number }) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const width = 60;
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * width;
    const y = height - ((value - min) / range) * height;
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg width={width} height={height} className="opacity-70">
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-all duration-500"
      />
    </svg>
  );
};

// Visual Component for Charts
const ChartVisual = ({ card }: { card: InsightCard }) => {
  if (!card.chartData) return null;

  const { type, values, labels } = card.chartData;
  const maxValue = Math.max(...values);
  const colorMap: Record<string, string> = {
    purple: '#9333ea',
    blue: '#3b82f6',
    indigo: '#6366f1',
    teal: '#14b8a6',
    pink: '#ec4899'
  };
  const color = colorMap[card.tagColor] || '#9333ea';

  if (type === 'bar') {
    return (
      <div className="flex items-end justify-between gap-2 h-24 mt-3 mb-2 relative">
        {/* Grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between opacity-20">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="border-t border-gray-300" style={{ borderStyle: 'dashed' }}></div>
          ))}
        </div>
        {values.map((value, idx) => (
          <div key={idx} className="flex-1 flex flex-col items-center relative z-10 group">
            <div className="w-full flex flex-col items-center justify-end h-full">
              <div
                className={`w-full rounded-t transition-all duration-1000 ease-out group-hover:opacity-80 ${
                  card.tagColor === 'purple' ? 'bg-gradient-to-t from-purple-500 to-purple-400' :
                  card.tagColor === 'blue' ? 'bg-gradient-to-t from-blue-500 to-blue-400' :
                  card.tagColor === 'indigo' ? 'bg-gradient-to-t from-indigo-500 to-indigo-400' :
                  card.tagColor === 'teal' ? 'bg-gradient-to-t from-teal-500 to-teal-400' :
                  'bg-gradient-to-t from-pink-500 to-pink-400'
                } shadow-sm`}
                style={{ 
                  height: `${(value / maxValue) * 100}%`, 
                  minHeight: '12px',
                  animation: `growUp 0.8s ease-out ${idx * 0.1}s both`
                }}
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-semibold" style={{ color }}>
                  {value}
                </div>
              </div>
            </div>
            {labels && labels[idx] && (
              <span className="text-xs text-gray-500 mt-2 text-center font-medium">{labels[idx]}</span>
            )}
          </div>
        ))}
      </div>
    );
  }

  if (type === 'trend') {
    return (
      <div className="h-20 mt-3 mb-2 relative bg-gradient-to-b from-gray-50 to-transparent rounded-lg p-2">
        <svg className="w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none">
          {/* Gradient area under line */}
          <defs>
            <linearGradient id={`gradient-${card.tagColor}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="0.3" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d={`M 0,60 ${values.map((v, i) => `L ${(i * 200) / (values.length - 1)},${60 - (v / maxValue) * 50}`).join(' ')} L 200,60 Z`}
            fill={`url(#gradient-${card.tagColor})`}
            className="transition-opacity duration-500"
          />
          <polyline
            points={values.map((v, i) => `${(i * 200) / (values.length - 1)},${60 - (v / maxValue) * 50}`).join(' ')}
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-500"
            style={{ strokeDasharray: '200', strokeDashoffset: '200', animation: 'drawLine 1s ease-out forwards' }}
          />
          {values.map((v, i) => (
            <circle
              key={i}
              cx={(i * 200) / (values.length - 1)}
              cy={60 - (v / maxValue) * 50}
              r="5"
              fill={color}
              className="transition-all duration-500"
              style={{ animation: `fadeInScale 0.5s ease-out ${0.3 + i * 0.1}s both` }}
            />
          ))}
        </svg>
        {labels && (
          <div className="flex justify-between text-xs text-gray-500 mt-1 px-1">
            {labels.map((label, idx) => (
              <span key={idx} className="font-medium">{label}</span>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (type === 'line') {
    const confidenceValue = values[values.length - 1];
    return (
      <div className="h-20 mt-3 mb-2 flex items-center justify-center">
        <div className="relative">
          <ProgressRing 
            value={confidenceValue} 
            max={100} 
            size={70} 
            strokeWidth={8}
            color={card.tagColor === 'purple' ? 'text-purple-600' : card.tagColor === 'blue' ? 'text-blue-600' : card.tagColor === 'indigo' ? 'text-indigo-600' : card.tagColor === 'teal' ? 'text-teal-600' : 'text-pink-600'}
          />
        </div>
        <div className="ml-4">
          <div className="text-xs text-gray-500 mb-1">Confidence Level</div>
          <div className="text-lg font-bold" style={{ color }}>
            <AnimatedCounter value={confidenceValue} />%
          </div>
        </div>
      </div>
    );
  }

  return null;
};

// Data Source Icons
const DataSourceIcon = ({ source }: { source?: string }) => {
  if (!source) return null;
  
  if (source.includes('Unstructured') || source.includes('Field Notes')) {
    return (
      <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    );
  }
  
  if (source.includes('Structured')) {
    return (
      <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    );
  }
  
  return (
    <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );
};

export default function AppelloIntelligence() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % insightCards.length);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentCard = insightCards[currentIndex];
  const tagColorClasses = tagColors[currentCard.tagColor];

  return (
    <Section background="gradient" pattern decorative>
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
              Connect the dots across your entire business. Appello Intelligence™ analyzes both structured data (financials, timesheets, invoices) and unstructured data (field notes, safety reports, project updates) to uncover hidden patterns and insights you never knew existed.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Hidden Pattern Recognition</h3>
                  <p className="text-gray-600 text-sm">AI discovers hidden connections between structured financial data and unstructured field notes, safety reports, and project updates—revealing insights that would otherwise go unnoticed.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Structured + Unstructured Data</h3>
                  <p className="text-gray-600 text-sm">Derive actionable insights from both structured data (numbers, metrics, reports) and unstructured data (text notes, comments, observations) to see the complete picture.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Connecting the Dots</h3>
                  <p className="text-gray-600 text-sm">AI correlates data points across financials, operations, safety, and field notes to identify root causes, predict issues, and reveal optimization opportunities.</p>
                </div>
              </div>
            </div>

            <div>
              <Button href="https://meetings.hubspot.com/shelson/appello-demo">
                See Appello Intelligence™ in Action
              </Button>
            </div>
          </div>

          {/* Right Column - Rotating Visual Cards */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-64 h-64 bg-purple-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
              <div className="relative z-10">
              <div className="space-y-6">
                {/* Rotating Insight Card */}
                <div 
                  key={currentIndex}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 animate-fadeIn relative overflow-hidden group hover:shadow-xl transition-all duration-300"
                  style={{
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  {/* Subtle gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tagColorClasses.bg} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
                  
                  {/* Corner accent */}
                  <div className={`absolute top-0 right-0 w-20 h-20 ${tagColorClasses.bg} opacity-5 rounded-bl-full transform translate-x-8 -translate-y-8`}></div>
                  {/* Header with Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className={`${tagColorClasses.bg} ${tagColorClasses.text} p-2 rounded-lg`}>
                        {currentCard.icon}
                      </div>
                      <h4 className="font-semibold text-gray-900">{currentCard.title}</h4>
                    </div>
                    <span className={`text-xs font-medium ${tagColorClasses.text} ${tagColorClasses.bg} px-2 py-1 rounded`}>
                      {currentCard.tag}
                    </span>
                  </div>

                  {/* Visual Chart */}
                  {currentCard.chartData && (
                    <div className="mb-4 pb-3 border-b border-gray-100">
                      <ChartVisual card={currentCard} />
                    </div>
                  )}
                  
                  {/* Insights List */}
                  <div className="space-y-3 mb-4">
                    {currentCard.insights.map((insight, idx) => {
                      const hasValue = insight.value !== undefined && typeof insight.value === 'number';
                      const sparklineData = hasValue ? [Math.abs(insight.value as number) * 0.7, Math.abs(insight.value as number) * 0.9, Math.abs(insight.value as number)] : [20, 35, 30, 45];
                      const colorValue = currentCard.tagColor === 'purple' ? '#9333ea' : currentCard.tagColor === 'blue' ? '#3b82f6' : currentCard.tagColor === 'indigo' ? '#6366f1' : currentCard.tagColor === 'teal' ? '#14b8a6' : '#ec4899';
                      
                      return (
                        <div 
                          key={idx} 
                          className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-all duration-200 group"
                          style={{ animation: `fadeInUp 0.5s ease-out ${idx * 0.1}s both` }}
                        >
                          {/* Visual Indicator Column */}
                          <div className="flex-shrink-0 flex flex-col items-center gap-1 mt-0.5">
                            <div className={`w-3 h-3 ${dotColors[insight.color]} rounded-full ring-2 ring-white shadow-sm`}></div>
                            {/* Connection Line */}
                            {idx < currentCard.insights.length - 1 && (
                              <div className={`w-0.5 h-6 ${dotColors[insight.color]} opacity-30`}></div>
                            )}
                          </div>
                          
                          {/* Content Column */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <span className="text-sm text-gray-700 leading-relaxed">{insight.text}</span>
                              {hasValue && typeof insight.value === 'number' && (
                                <div className={`text-xs font-bold px-2 py-0.5 rounded ${tagColorClasses.bg} ${tagColorClasses.text} whitespace-nowrap`}>
                                  {insight.value > 0 && '+'}{insight.value}{insight.value < 100 ? '%' : ''}
                                </div>
                              )}
                            </div>
                            
                            {/* Source and Sparkline Row */}
                            <div className="flex items-center justify-between gap-2 mt-1">
                              {insight.source && (
                                <div className="flex items-center gap-1.5">
                                  <DataSourceIcon source={insight.source} />
                                  <span className="text-xs text-gray-500 font-medium">{insight.source}</span>
                                </div>
                              )}
                              {hasValue && (
                                <div className="opacity-60 group-hover:opacity-100 transition-opacity">
                                  <Sparkline data={sparklineData} color={colorValue} />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Connection Flow Visualization */}
                  {currentCard.insights.length > 1 && (
                    <div className="mb-4 relative h-8 flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center">
                        <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                      </div>
                      <div className={`relative ${tagColorClasses.bg} ${tagColorClasses.text} px-3 py-1 rounded-full text-xs font-medium shadow-sm`}>
                        Connecting...
                      </div>
                    </div>
                  )}

                  {/* Connection Insight */}
                  {currentCard.connection && (
                    <div className={`pt-4 border-t-2 ${tagColorClasses.text.replace('text-', 'border-')} border-opacity-30 ${tagColorClasses.bg} rounded-lg p-4 relative overflow-hidden group`}>
                      {/* Animated Background Pattern */}
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity">
                        <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
                          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                      </div>
                      
                      {/* Pulsing Connection Nodes */}
                      <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-current opacity-60 animate-pulse"></div>
                      <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-current opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-current opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
                      
                      <div className="relative">
                        <div className="flex items-center gap-2 mb-3">
                          <div className={`p-1.5 ${tagColorClasses.bg} rounded-lg ${tagColorClasses.text}`}>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                          </div>
                          <div className="text-xs font-semibold text-gray-700 uppercase tracking-wide">{currentCard.connection.label}</div>
                        </div>
                        <div className={`text-sm font-bold ${tagColorClasses.text} leading-relaxed flex items-start gap-2`}>
                          <span className="text-lg leading-none">💡</span>
                          <span>{currentCard.connection.value}</span>
                        </div>
                        
                        {/* Impact Indicator */}
                        <div className="mt-3 flex items-center gap-2 text-xs text-gray-600">
                          <div className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                            <span>Actionable Insight</span>
                          </div>
                          <span>•</span>
                          <span>AI Generated</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Navigation Dots */}
                <div className="flex items-center justify-center gap-2 pt-2">
                  {insightCards.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentIndex(index);
                        setIsAutoPlaying(false);
                        setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
                      }}
                      className={`transition-all duration-300 ${
                        index === currentIndex
                          ? "w-8 h-2 bg-purple-600 rounded-full"
                          : "w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400"
                      }`}
                      aria-label={`Go to insight ${index + 1}`}
                    />
                  ))}
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
      </div>
    </Section>
  );
}

