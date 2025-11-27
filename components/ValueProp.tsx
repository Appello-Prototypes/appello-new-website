import Section from "./Section";
import Button from "./Button";
import Image from "next/image";

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
          
          {/* Inline Testimonial Below Button */}
          <div className="pt-8 border-t border-gray-200">
            <p className="text-gray-700 italic text-base leading-relaxed mb-4">
              "Appello has transformed how we manage our field operations. The real-time visibility into job costs and crew scheduling has been a game-changer."
            </p>
            <div className="flex items-center gap-3">
              <Image
                src="/images/content-avatar.webp"
                alt="Chris Theodoru"
                width={48}
                height={48}
                className="rounded-full flex-shrink-0"
              />
              <div>
                <h3 className="font-semibold text-gray-900">Chris Theodoru</h3>
                <p className="text-sm text-gray-600">VP, EPI Insulation | Troy, Michigan</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side - Chart/Graph */}
        <div className="bg-gray-50 rounded-xl p-12 border border-gray-200 flex items-center justify-center min-h-[500px]">
          <div className="text-center text-gray-400">
            <p className="text-lg mb-2">Chart/Graph Visualization</p>
            <p className="text-sm">(value-prop-chart.webp placeholder)</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
