import Section from "./Section";
import Card from "./Card";
import Image from "next/image";

const testimonial = {
  quote: "Your software has truly changed the way we share information between the office and the field. Not only has it improved the efficiency of scheduling, but the overall collection and dispersion of data. I'm no longer looking at multiple places for pictures, time sheets and job specs. Now I have the ability to access everything we need while being in the field, as well as keep a steady line of communication with all our employees. I really appreciate the help from you and your team.",
  author: "Ryan Patterson",
  company: "EPI Insulation | Troy, Michigan",
  avatar: "/images/testimonial-avatar-1.avif",
};

const stats = [
  { value: "100,000+", label: "Timesheets Processed" },
  { value: "0%", label: "Churn Rate" },
  { value: "4.8", label: "Google" },
  { value: "4.9", label: "Trustpilot" },
];

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Zero Percent Churn, 100% Satisfaction
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Not a single contractor has ever cancelled Appello. When you experience software that finally understands ICI work, you don't go back to the chaos of before.
          </p>
        </div>
        
        {/* Single Large Testimonial Card - Centered */}
        <div className="max-w-4xl mx-auto">
          <Card className="h-full p-8 md:p-10">
            <div className="space-y-6">
              <div className="flex items-start gap-5">
                <div className="relative w-20 h-20 flex-shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <div className="font-semibold text-gray-900 text-xl mb-1">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.company}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic text-lg">
                "{testimonial.quote}"
              </p>
              <div className="pt-6 border-t border-gray-200">
                <p className="text-xl font-semibold text-gray-900">4.80/5 from customer reviews</p>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Trust Statement */}
        <div className="text-center pt-4">
          <p className="text-xl text-gray-700 font-medium">
            Every single customer before you is still with us. You'll be the same.
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto pt-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
