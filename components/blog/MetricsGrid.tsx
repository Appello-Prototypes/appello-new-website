import MetricCard from "./MetricCard";

interface Metric {
  value: string;
  label: string;
}

interface MetricsGridProps {
  metrics: Metric[];
}

export default function MetricsGrid({ metrics }: MetricsGridProps) {
  if (metrics.length === 0) {
    return null;
  }

  return (
    <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 md:p-10 my-8 border border-primary/20 shadow-sm">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {metrics.map((metric, index) => (
          <MetricCard key={index} value={metric.value} label={metric.label} />
        ))}
      </div>
    </div>
  );
}


