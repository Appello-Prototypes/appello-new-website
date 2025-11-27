import Section from "./Section";
import Card from "./Card";

const problems = [
  {
    title: "Manual System Chaos",
    description: "Paper timesheets written on napkins, Excel spreadsheets for scheduling, text messages for coordination. Your office manager spends 10 hours every Monday just typing in timesheet data.",
    icon: "📄",
    cost: "$25,000-$50,000 annually in hidden labor costs",
  },
  {
    title: "Procore Frustration",
    description: "Built for GCs managing you as a vendor, not for you managing your own operations. $76,000-$257,000 annually for software your field foremen refuse to use.",
    icon: "😤",
    cost: "10-20x what you should actually pay",
  },
  {
    title: "Point Solution Nightmare",
    description: "5-6 disconnected apps that don't talk to each other. One for time tracking, one for safety, one for equipment—you're still doing manual data entry between systems.",
    icon: "🔀",
    cost: "Combined subscriptions costing more than a unified platform",
  },
  {
    title: "Union Payroll Complexity",
    description: "Workers switching classifications mid-shift, shift differentials, travel pay, prevailing wage. Your office manager spends 12-15 hours per pay period calculating—and prays she doesn't make a mistake.",
    icon: "⚖️",
    cost: "One error = union grievance + back pay + damaged relations",
  },
];

export default function ProblemSection() {
  return (
    <Section id="problem" background="gray">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            How Many of These Are You Battling Every Day?
          </h2>
          <p className="text-lg text-gray-600">
            The cost of staying the same is higher than the cost of change. Here's what manual systems, Procore, and point solutions are actually costing you:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <Card key={index} className="border-l-4 border-l-red-500">
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">{problem.icon}</div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    {problem.description}
                  </p>
                  <div className="bg-red-50 border border-red-200 rounded px-3 py-2">
                    <p className="text-sm font-semibold text-red-800">
                      Hidden Cost: {problem.cost}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            The Real Cost of Your Current System
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div>
              <div className="text-3xl font-bold text-red-600">15-20 hrs</div>
              <div className="text-sm text-gray-700 mt-1">Per week wasted on admin</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600">1-2 weeks</div>
              <div className="text-sm text-gray-700 mt-1">Billing delays = cash flow hit</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600">5-15%</div>
              <div className="text-sm text-gray-700 mt-1">Revenue lost to missed change orders</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

