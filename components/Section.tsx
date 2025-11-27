import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  background?: "white" | "gray" | "dark";
}

export default function Section({
  children,
  id,
  className = "",
  background = "white",
}: SectionProps) {
  const bgColor = background === "gray" ? "bg-gray-50" : background === "dark" ? "bg-gray-900" : "bg-white";
  
  return (
    <section id={id} className={`${bgColor} py-20 md:py-28 lg:py-32 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
