import Section from "./Section";

const metrics = [
  { 
    value: "15-20 hrs", 
    label: "Reclaimed weekly from administrative chaos"
  },
  { 
    value: "1-2 weeks", 
    label: "Faster cash flow with accelerated billing"
  },
  { 
    value: "100%", 
    label: "Of billable change orders captured in real-time"
  },
  { 
    value: "$25K-50K", 
    label: "Annual savings in hidden labor costs eliminated"
  },
];

export default function MetricsSection() {
  return (
    <section className="bg-gray-900 text-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Built By Contractors, For Contractors
            </h2>
          </div>
          
          {/* Video Thumbnail Placeholder */}
          <div className="aspect-video rounded-lg overflow-hidden bg-gray-800 border border-gray-700 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <p className="text-lg mb-2">Video Thumbnail</p>
              <p className="text-sm">(built-by-contractors-video.webp placeholder)</p>
            </div>
          </div>
          
          {/* Metrics Below Video */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-white">
                  {metric.value}
                </div>
                <div className="text-sm md:text-base text-gray-300">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
