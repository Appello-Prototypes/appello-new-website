interface MetricCardProps {
  value: string;
  label: string;
}

export default function MetricCard({ value, label }: MetricCardProps) {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-primary-dark bg-clip-text text-transparent mb-2">
        {value}
      </div>
      <div className="text-gray-700 font-medium">{label}</div>
    </div>
  );
}


