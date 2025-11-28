import Link from "next/link";
import Card from "./Card";
import { CaseStudy } from "@/lib/case-studies";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  variant?: "light" | "dark";
  className?: string;
}

export default function CaseStudyCard({ caseStudy, variant = "light", className = "" }: CaseStudyCardProps) {
  const getVideoId = (url: string): string => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/);
    return match ? match[1] : '';
  };

  const isDark = variant === "dark";
  const cardClasses = isDark 
    ? "h-full hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-700 hover:border-primary/30 overflow-hidden bg-gray-800"
    : "h-full hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 hover:border-primary/20 overflow-hidden";

  return (
    <Link 
      href={`/case-studies/${caseStudy.slug}`}
      className={`group ${className}`}
    >
      <Card className={cardClasses}>
        <div className="space-y-5">
          {caseStudy.video && (() => {
            const videoId = getVideoId(caseStudy.video);
            
            return (
              <div className={`aspect-video rounded-lg overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-gray-100'} -mx-6 -mt-6 mb-5`}>
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`${caseStudy.company} Case Study Video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            );
          })()}
          
          <div className={`flex items-center justify-between ${isDark ? 'px-6' : 'px-6'}`}>
            <span className={`px-3 py-1 ${isDark ? 'bg-primary/20 text-primary' : 'bg-primary/10 text-primary'} font-semibold rounded-full text-xs`}>
              {caseStudy.industry}
            </span>
            <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              {new Date(caseStudy.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
              })}
            </span>
          </div>
          
          <h2 className={`text-2xl font-bold ${isDark ? 'text-white group-hover:text-primary' : 'text-gray-900 group-hover:text-primary'} transition-colors px-6`}>
            {caseStudy.title}
          </h2>
          
          <p className={`text-lg font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'} px-6`}>
            {caseStudy.company}
          </p>
          
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} line-clamp-3 leading-relaxed px-6`}>
            {caseStudy.excerpt}
          </p>
          
          {caseStudy.results.length > 0 && (
            <div className={`pt-5 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'} px-6`}>
              <div className="grid grid-cols-2 gap-4">
                {caseStudy.results.slice(0, 2).map((result, index) => (
                  <div key={index} className={`p-3 ${isDark ? 'bg-gray-700/50' : 'bg-gray-50'} rounded-lg`}>
                    <div className={`text-2xl md:text-3xl font-bold ${isDark ? 'text-white' : 'bg-gradient-to-br from-primary to-primary-dark bg-clip-text text-transparent'}`}>
                      {result.value}
                    </div>
                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} font-medium mt-1`}>
                      {result.metric}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className={`pt-4 flex items-center gap-2 ${isDark ? 'text-primary' : 'text-primary'} font-medium group-hover:gap-3 transition-all px-6 pb-6`}>
            <span>Read full case study</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}

