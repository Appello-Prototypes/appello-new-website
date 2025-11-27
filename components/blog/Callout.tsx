import { ReactNode } from "react";

interface CalloutProps {
  type: "note" | "warning" | "tip" | "info";
  children: ReactNode;
}

export default function Callout({ type, children }: CalloutProps) {
  const styles = {
    note: {
      container: "bg-blue-50 border-l-4 border-blue-500",
      icon: "text-blue-600",
      title: "text-blue-900",
      iconSvg: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      ),
      label: "Note",
    },
    warning: {
      container: "bg-yellow-50 border-l-4 border-yellow-500",
      icon: "text-yellow-600",
      title: "text-yellow-900",
      iconSvg: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      ),
      label: "Warning",
    },
    tip: {
      container: "bg-green-50 border-l-4 border-green-500",
      icon: "text-green-600",
      title: "text-green-900",
      iconSvg: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      label: "Tip",
    },
    info: {
      container: "bg-purple-50 border-l-4 border-purple-500",
      icon: "text-purple-600",
      title: "text-purple-900",
      iconSvg: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      ),
      label: "Info",
    },
  };

  const style = styles[type];

  return (
    <div className={`${style.container} rounded-r-lg p-4 my-6 shadow-sm`}>
      <div className="flex items-start gap-3">
        <div className={`${style.icon} flex-shrink-0 mt-0.5`}>
          {style.iconSvg}
        </div>
        <div className="flex-1 min-w-0">
          <div className={`${style.title} font-semibold text-sm uppercase tracking-wide mb-2`}>
            {style.label}
          </div>
          <div className="text-gray-800 prose prose-sm max-w-none">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}


