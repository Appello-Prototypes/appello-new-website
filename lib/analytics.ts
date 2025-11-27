// Analytics utility functions

export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, properties);
  }
};

export const trackConversion = (conversionType: string) => {
  trackEvent("conversion", {
    conversion_type: conversionType,
    timestamp: new Date().toISOString(),
  });
};

export const trackDemoBooking = () => {
  trackConversion("demo_booking");
};

export const trackFormSubmission = (formType: string) => {
  trackConversion("form_submission");
  trackEvent("form_submit", {
    form_type: formType,
  });
};

export const trackPageView = (url: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    });
  }
};


