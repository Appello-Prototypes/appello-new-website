export default function SocialProofBar() {
  const stats = [
    { value: "92%", label: "Launch Success" },
    { value: "0%", label: "Churn Rate" },
    { value: "15-20 hrs", label: "Reclaimed weekly from administrative chaos" },
    { value: "1-2 weeks", label: "Faster cash flow with accelerated billing" },
  ];

  return (
    <section className="bg-gray-50 py-8 border-y border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Trusted by mechanical, HVAC, and electrical contractors
          </p>
        </div>
      </div>
    </section>
  );
}
