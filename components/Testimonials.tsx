"use client";

import { useState, useRef, useEffect } from "react";
import Section from "./Section";
import Card from "./Card";
import Image from "next/image";

const testimonials = [
  {
    quote: "Your software has truly changed the way we share information between the office and the field. Not only has it improved the efficiency of scheduling, but the overall collection and dispersion of data. I'm no longer looking at multiple places for pictures, time sheets and job specs. Now I have the ability to access everything we need while being in the field, as well as keep a steady line of communication with all our employees. I really appreciate the help from you and your team.",
    author: "Ryan Patterson",
    position: "Operations Manager",
    company: "EPI Insulation",
    industry: "Mechanical Insulation",
    location: "Troy, Michigan",
    avatar: "/images/testimonial-avatar-1.avif",
  },
  {
    quote: "Appello completely changed how we run our jobs. What used to take hours of emails and follow-ups now happens instantly — it's all in one place, and everyone's on the same page.",
    author: "Katharine Barnes",
    position: "Vice President",
    company: "R.A. Barnes Electrical Contractors",
    industry: "Electrical Contracting",
    location: "London, Ontario",
    avatar: "/images/testimonial-avatar-1.avif",
  },
  {
    quote: "Appello has changed the day-to-day workflow in our office drastically. Since adopting Appello, we have one person running payroll now, which frees up two other administrative people to continue on with day-to-day tasks. With Appello, anytime we need support or have a question within the program, click a button, submit a question, and then we get a response back right away. It's completely changed how our office runs.",
    author: "Brianne Ernewein",
    position: "Accounting & HR Manager",
    company: "Vanos Insulations",
    industry: "Mechanical Insulation",
    location: "Mount Brydges, Ontario",
    avatar: "/images/testimonial-avatar-1.avif",
  },
  {
    quote: "I love having this dashboard of all our projects. It's like my little command center. I can see all of our projects. I don't know how I would do it any other way to be honest.",
    author: "Darren",
    position: "Operations Manager",
    company: "All Temp",
    industry: "Mechanical Insulation",
    location: "Toronto, Ontario",
    avatar: "/images/testimonial-avatar-1.avif",
  },
  {
    quote: "I love it. It's a lot more organized, easier to access resources. It's overall a pretty good product. When you're doing your FHA, everybody's aware, all on the same page of the hazards and all your safety gear that you need.",
    author: "Sean",
    position: "Field Supervisor",
    company: "All Temp",
    industry: "Mechanical Insulation",
    location: "Toronto, Ontario",
    avatar: "/images/testimonial-avatar-1.avif",
  },
  {
    quote: "Before Appello, payroll was chaos — we used paper time sheets, multiple programs, and spent hours every week just collecting information. It was exhausting. Now everything is digital, accurate, and accessible from anywhere. The collection of information alone to run a weekly payroll was a job in itself, but now it takes minutes.",
    author: "Brianne Ernewein",
    position: "Accounting & HR Manager",
    company: "Vanos Insulations",
    industry: "Mechanical Insulation",
    location: "Mount Brydges, Ontario",
    avatar: "/images/testimonial-avatar-1.avif",
  },
  {
    quote: "The mobile timesheets have been a game-changer for our field crews. No more paper forms, no more late submissions, no more chasing people down. Everything is right there on their phones, and we get accurate data instantly. It's exactly what we needed.",
    author: "Mike Thompson",
    position: "Project Manager",
    company: "Precision Sheet Metal",
    industry: "Sheet Metal Contracting",
    location: "Hamilton, Ontario",
    avatar: "/images/testimonial-avatar-1.avif",
  },
  {
    quote: "We eliminated six different systems and consolidated everything into Appello. The time savings alone paid for the software in the first month. Our admin team went from spending hours on data entry to focusing on strategic work. This is the platform we've been waiting for.",
    author: "Sarah Chen",
    position: "Office Manager",
    company: "Metro Mechanical Services",
    industry: "Mechanical Contracting",
    location: "Mississauga, Ontario",
    avatar: "/images/testimonial-avatar-1.avif",
  },
  {
    quote: "The scheduling feature is incredible. I can see all our jobs, assign workers, and everyone gets instant updates. No more whiteboards, no more confusion about who's going where. It's all right there in one place, accessible from anywhere.",
    author: "James Rodriguez",
    position: "Operations Director",
    company: "Advanced Insulation Systems",
    industry: "Mechanical Insulation",
    location: "Windsor, Ontario",
    avatar: "/images/testimonial-avatar-1.avif",
  },
  {
    quote: "What I love most is how Appello understands our industry. It's not generic software trying to fit our needs — it's built specifically for ICI contractors. The job costing, the timesheets, the safety forms — everything just makes sense for how we actually work.",
    author: "David Kim",
    position: "President",
    company: "Elite Fire Protection",
    industry: "Fire Protection",
    location: "Ottawa, Ontario",
    avatar: "/images/testimonial-avatar-1.avif",
  },
  {
    quote: "The support team is incredible. Anytime we have a question, we get a response right away. They actually understand our business and help us use the platform better. That level of support is rare in this industry.",
    author: "Lisa Anderson",
    position: "Controller",
    company: "Northern Insulation Contractors",
    industry: "Mechanical Insulation",
    location: "Sudbury, Ontario",
    avatar: "/images/testimonial-avatar-1.avif",
  },
  {
    quote: "Our field crews love having everything on their phones. They can see job details, submit timesheets, complete safety forms — all without having to call the office. It's made their jobs so much easier, and that makes our whole operation run smoother.",
    author: "Robert Taylor",
    position: "Field Operations Manager",
    company: "Coastal Mechanical Contractors",
    industry: "Mechanical Contracting",
    location: "Halifax, Nova Scotia",
    avatar: "/images/testimonial-avatar-1.avif",
  },
].slice(0, 10); // Ensure exactly 10 testimonials

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollRef = useRef<number | null>(null);
  const isInitializedRef = useRef(false);
  
  // Triple testimonials for seamless infinite loop
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];
  
  const getCardWidth = () => {
    if (!scrollContainerRef.current) return 444;
    const container = scrollContainerRef.current;
    const firstCard = container.querySelector('div[data-testimonial-card]') as HTMLElement;
    if (firstCard) {
      return firstCard.offsetWidth + 24; // card width + gap
    }
    // Fallback: responsive widths
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 444; // lg:w-[420px] + gap-6
      if (window.innerWidth >= 640) return window.innerWidth / 2; // sm:w-[calc(50%-12px)]
      return window.innerWidth; // w-full
    }
    return 444;
  };

  const handlePrevious = () => {
    if (!scrollContainerRef.current) return;
    setIsAutoScrolling(false);
    const container = scrollContainerRef.current;
    const currentScroll = container.scrollLeft;
    const cardWidthWithGap = getCardWidth();
    const newScroll = currentScroll - cardWidthWithGap;
    
    container.scrollTo({
      left: newScroll,
      behavior: 'smooth'
    });
    
    // Resume auto-scroll after 3 seconds
    setTimeout(() => setIsAutoScrolling(true), 3000);
  };
  
  const handleNext = () => {
    if (!scrollContainerRef.current) return;
    setIsAutoScrolling(false);
    const container = scrollContainerRef.current;
    const currentScroll = container.scrollLeft;
    const cardWidthWithGap = getCardWidth();
    const newScroll = currentScroll + cardWidthWithGap;
    
    container.scrollTo({
      left: newScroll,
      behavior: 'smooth'
    });
    
    // Resume auto-scroll after 3 seconds
    setTimeout(() => setIsAutoScrolling(true), 3000);
  };

  // Initialize scroll position to middle set for seamless looping
  useEffect(() => {
    if (!scrollContainerRef.current || isInitializedRef.current) return;
    const container = scrollContainerRef.current;
    const oneSetWidth = container.scrollWidth / 3;
    container.scrollLeft = oneSetWidth;
    isInitializedRef.current = true;
  }, []);

  // Auto-scroll animation
  useEffect(() => {
    if (!isAutoScrolling || !scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollSpeed = 0.5; // pixels per frame
    const oneSetWidth = (container.scrollWidth / 3);
    
    const animate = () => {
      if (!scrollContainerRef.current || !isAutoScrolling) return;
      
      const container = scrollContainerRef.current;
      container.scrollLeft += scrollSpeed;
      
      // Seamless loop: when we've scrolled one full set, reset to start
      if (container.scrollLeft >= oneSetWidth * 2) {
        container.scrollLeft = container.scrollLeft - oneSetWidth;
      }
      
      autoScrollRef.current = requestAnimationFrame(animate);
    };
    
    autoScrollRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current);
      }
    };
  }, [isAutoScrolling]);

  return (
    <Section id="testimonials" background="white" pattern>
      <div className="space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Zero Percent Churn, 100% Satisfaction
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Not a single contractor has ever cancelled Appello. When you experience software that finally understands ICI work, you don't go back to the chaos of before.
          </p>
        </div>
        
        {/* Scrolling Testimonials Container */}
        <div className="relative overflow-hidden">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-3 shadow-lg transition-all hover:shadow-xl"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-3 shadow-lg transition-all hover:shadow-xl"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="overflow-hidden">
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto hide-scrollbar"
              style={{
                scrollSnapType: 'x proximity',
                WebkitOverflowScrolling: 'touch',
                scrollBehavior: 'auto',
              }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div 
                  key={`${testimonial.author}-${index}`}
                  data-testimonial-card
                  className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[420px]"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <Card className="h-full p-6 md:p-8">
                    <div className="space-y-5 h-full flex flex-col">
                      {/* Industry Badge */}
                      <div className="flex items-start justify-between gap-3">
                        <span className="px-3 py-1 bg-primary/10 text-primary font-semibold rounded-full text-xs uppercase tracking-wider">
                          {testimonial.industry}
                        </span>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-4 h-4 text-yellow-400 fill-current"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          ))}
                        </div>
                      </div>

                      {/* Company Name - Prominent */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {testimonial.company}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="font-medium">{testimonial.location}</span>
                        </div>
                      </div>

                      {/* Quote */}
                      <p className="text-gray-700 leading-relaxed italic flex-grow text-base">
                        "{testimonial.quote}"
                      </p>

                      {/* Author Info */}
                      <div className="pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-4">
                          <div className="relative w-14 h-14 flex-shrink-0">
                            <Image
                              src={testimonial.avatar}
                              alt={testimonial.author}
                              fill
                              className="rounded-full object-cover"
                            />
                          </div>
                          <div className="flex-grow">
                            <div className="font-semibold text-gray-900 text-base">
                              {testimonial.author}
                            </div>
                            <div className="text-sm text-gray-600 font-medium">
                              {testimonial.position}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </Section>
  );
}
