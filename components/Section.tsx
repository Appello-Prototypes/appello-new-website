import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  background?: "white" | "gray" | "blue" | "gradient";
  pattern?: boolean;
  decorative?: boolean;
}

export default function Section({
  children,
  id,
  className = "",
  background = "white",
  pattern = false,
  decorative = false,
}: SectionProps) {
  const bgColor = 
    background === "gray" ? "bg-gray-50" : 
    background === "blue" ? "bg-blue-50" :
    background === "gradient" ? "bg-gradient-to-br from-blue-50 via-white to-blue-50/30" :
    "bg-white";
  
  return (
    <section 
      id={id} 
      className={`${bgColor} py-20 md:py-28 lg:py-32 relative overflow-hidden ${className}`}
    >
      {/* Pattern overlay */}
      {pattern && (
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,_rgb(0,0,0)_1px,_transparent_0)] bg-[length:32px_32px]" aria-hidden="true"></div>
      )}
      
      {/* Decorative elements */}
      {decorative && (
        <>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" aria-hidden="true"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl" aria-hidden="true"></div>
        </>
      )}
      
      {/* Connecting line element */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-blue-200/20 to-transparent opacity-30" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {children}
      </div>
    </section>
  );
}
