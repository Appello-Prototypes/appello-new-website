import Section from "./Section";
import Button from "./Button";
import Image from "next/image";
import LaborHoursChart from "./LaborHoursChart";

export default function ValueProp() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-primary text-sm font-medium">
            Built FOR Subs, Not FOR Managing Subs
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Software That Actually Understands ICI Work
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Appello was built inside an industrial mechanical contractor and continues to stand out as the only purpose-built platform for ICI trade contractors.
          </p>
          
          <div>
            <Button href="https://meetings.hubspot.com/shelson/appello-demo">
              Book a Free Demo
            </Button>
          </div>
          
        </div>
        
        {/* Right Side - Chart/Graph */}
        <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
          <LaborHoursChart />
        </div>
      </div>
    </Section>
  );
}
