"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useMotionValue, useTransform, useAnimation } from "framer-motion";
import Section from "./Section";

interface InteractiveMagazineProps {
  className?: string;
  clickableSections?: ClickableSection[];
  showDebugOverlay?: boolean;
}

export interface ClickableSection {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  content?: string;
  href?: string;
  tooltip?: string;
}

export default function InteractiveMagazine({ 
  className = "",
  clickableSections: externalClickableSections = [],
  showDebugOverlay = false,
}: InteractiveMagazineProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [svgContent, setSvgContent] = useState<string>("");
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; content: string } | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [touchStart, setTouchStart] = useState<{ x: number; y: number; distance: number } | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const controls = useAnimation();

  // Use external clickable sections or default empty array
  const clickableSections = externalClickableSections;

  // Load SVG content
  useEffect(() => {
    fetch("/images/appello-magazine.svg")
      .then((res) => res.text())
      .then((text) => {
        setSvgContent(text);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.error("Failed to load SVG:", err);
      });
  }, []);

  // Handle zoom with mouse wheel
  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      if (!containerRef.current) return;
      
      e.preventDefault();
      const delta = e.deltaY * -0.001;
      const newZoom = Math.min(Math.max(0.5, zoom + delta), 3);
      
      // Zoom towards mouse position
      const rect = containerRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      const zoomFactor = newZoom / zoom;
      const newPanX = mouseX - (mouseX - pan.x) * zoomFactor;
      const newPanY = mouseY - (mouseY - pan.y) * zoomFactor;
      
      setZoom(newZoom);
      setPan({ x: newPanX, y: newPanY });
    },
    [zoom, pan]
  );

  // Handle mouse down for panning
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (e.button !== 0) return; // Only left mouse button
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  }, [pan]);

  // Handle mouse move for panning
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    },
    [isDragging, dragStart]
  );

  // Handle mouse up
  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Touch handlers for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      setIsDragging(true);
      setDragStart({ x: touch.clientX - pan.x, y: touch.clientY - pan.y });
    } else if (e.touches.length === 2) {
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const distance = Math.hypot(
        touch1.clientX - touch2.clientX,
        touch1.clientY - touch2.clientY
      );
      setTouchStart({
        x: (touch1.clientX + touch2.clientX) / 2,
        y: (touch1.clientY + touch2.clientY) / 2,
        distance,
      });
    }
  }, [pan]);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      e.preventDefault();
      
      if (e.touches.length === 1 && isDragging) {
        const touch = e.touches[0];
        setPan({
          x: touch.clientX - dragStart.x,
          y: touch.clientY - dragStart.y,
        });
      } else if (e.touches.length === 2 && touchStart) {
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        const distance = Math.hypot(
          touch1.clientX - touch2.clientX,
          touch1.clientY - touch2.clientY
        );
        const scale = distance / touchStart.distance;
        const newZoom = Math.min(Math.max(0.5, zoom * scale), 3);
        setZoom(newZoom);
      }
    },
    [isDragging, dragStart, touchStart, zoom]
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    setTouchStart(null);
  }, []);

  // Reset zoom and pan
  const handleReset = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
    controls.start({ scale: 1, x: 0, y: 0 });
  }, [controls]);

  // Zoom in
  const handleZoomIn = useCallback(() => {
    setZoom((prev) => Math.min(prev + 0.25, 3));
  }, []);

  // Zoom out
  const handleZoomOut = useCallback(() => {
    setZoom((prev) => Math.max(prev - 0.25, 0.5));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current) return;
      
      const step = 50;
      
      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          setPan((prev) => ({ ...prev, x: prev.x + step }));
          break;
        case "ArrowRight":
          e.preventDefault();
          setPan((prev) => ({ ...prev, x: prev.x - step }));
          break;
        case "ArrowUp":
          e.preventDefault();
          setPan((prev) => ({ ...prev, y: prev.y + step }));
          break;
        case "ArrowDown":
          e.preventDefault();
          setPan((prev) => ({ ...prev, y: prev.y - step }));
          break;
        case "+":
        case "=":
          e.preventDefault();
          handleZoomIn();
          break;
        case "-":
        case "_":
          e.preventDefault();
          handleZoomOut();
          break;
        case "0":
          e.preventDefault();
          handleReset();
          break;
        case "Escape":
          setActiveSection(null);
          setTooltip(null);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleZoomIn, handleZoomOut, handleReset]);

  // Handle click on SVG elements
  const handleSvgClick = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    const target = e.target as SVGElement;
    
    // Check if clicked element has data-clickable attribute
    if (target.hasAttribute("data-clickable")) {
      const sectionId = target.getAttribute("data-section-id");
      const href = target.getAttribute("data-href");
      
      if (sectionId) {
        setActiveSection(sectionId);
      }
      
      if (href) {
        window.open(href, "_blank");
      }
    }
  }, []);

  // Handle hover on SVG elements
  const handleSvgMouseEnter = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    const target = e.target as SVGElement;
    
    if (target.hasAttribute("data-hover")) {
      const content = target.getAttribute("data-tooltip") || "";
      const rect = target.getBoundingClientRect();
      setTooltip({
        x: rect.left + rect.width / 2,
        y: rect.top - 10,
        content,
      });
      
      // Add hover animation
      target.style.transition = "all 0.3s ease";
      target.style.opacity = "0.8";
      target.style.transform = "scale(1.02)";
    }
  }, []);

  const handleSvgMouseLeave = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    const target = e.target as SVGElement;
    
    if (target.hasAttribute("data-hover")) {
      setTooltip(null);
      target.style.opacity = "1";
      target.style.transform = "scale(1)";
    }
  }, []);

  // Scroll animation trigger
  useEffect(() => {
    if (!isLoaded) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isLoaded, controls]);

  // Process SVG content to add interactive attributes
  const processedSvgContent = svgContent
    .replace(/<g([^>]*)>/gi, (match, attrs) => {
      // Add cursor pointer to groups that might be clickable
      if (attrs.includes("data-clickable") || attrs.includes("data-hover")) {
        return `<g${attrs} style="cursor: pointer;">`;
      }
      return match;
    })
    .replace(/<text([^>]*)>/gi, (match, attrs) => {
      // Make text elements potentially interactive
      return `<text${attrs} style="cursor: pointer;" data-hover="true">`;
    })
    .replace(/<image([^>]*)>/gi, (match, attrs) => {
      // Make images potentially interactive
      return `<image${attrs} style="cursor: pointer;" data-hover="true">`;
    });

  if (!isLoaded) {
    return (
      <Section background="white" className={className}>
        <div className="flex items-center justify-center min-h-[600px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading interactive magazine...</p>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section background="white" className={className}>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Controls */}
        <div className="flex items-center justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Interactive Magazine
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={handleZoomOut}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium transition-colors"
              aria-label="Zoom out"
            >
              −
            </button>
            <span className="px-4 py-2 bg-gray-50 rounded-lg text-gray-700 font-medium min-w-[60px] text-center">
              {Math.round(zoom * 100)}%
            </span>
            <button
              onClick={handleZoomIn}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium transition-colors"
              aria-label="Zoom in"
            >
              +
            </button>
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors ml-2"
              aria-label="Reset view"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Instructions */}
        <p className="text-gray-600 text-sm">
          Scroll to zoom • Click and drag to pan • Hover over elements for details • 
          Use arrow keys to navigate • Press +/- to zoom • Press 0 to reset
        </p>

        {/* SVG Container */}
        <motion.div
          ref={containerRef}
          className="relative bg-gray-50 rounded-xl border border-gray-200 overflow-hidden"
          style={{
            cursor: isDragging ? "grabbing" : "grab",
          }}
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          role="img"
          aria-label="Interactive magazine layout"
          tabIndex={0}
        >
          <div
            className="relative"
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
              transformOrigin: "top left",
              transition: isDragging ? "none" : "transform 0.1s ease-out",
            }}
          >
            <div
              className="svg-container"
              dangerouslySetInnerHTML={{ __html: processedSvgContent }}
              onClick={handleSvgClick}
              onMouseEnter={handleSvgMouseEnter}
              onMouseLeave={handleSvgMouseLeave}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>

          {/* Overlay clickable sections */}
          {clickableSections.map((section) => (
            <div
              key={section.id}
              className={`absolute border-2 border-blue-500 transition-opacity cursor-pointer ${
                showDebugOverlay ? "opacity-30" : "opacity-0 hover:opacity-30"
              }`}
              style={{
                left: `${section.x * zoom + pan.x}px`,
                top: `${section.y * zoom + pan.y}px`,
                width: `${section.width * zoom}px`,
                height: `${section.height * zoom}px`,
              }}
              onClick={() => {
                if (section.href) {
                  window.open(section.href, "_blank");
                } else {
                  setActiveSection(section.id);
                }
              }}
              onMouseEnter={() => {
                if (section.tooltip) {
                  const rect = containerRef.current?.getBoundingClientRect();
                  if (rect) {
                    setTooltip({
                      x: rect.left + section.x * zoom + pan.x + (section.width * zoom) / 2,
                      y: rect.top + section.y * zoom + pan.y - 10,
                      content: section.tooltip,
                    });
                  }
                }
              }}
              onMouseLeave={() => {
                if (section.tooltip) {
                  setTooltip(null);
                }
              }}
              aria-label={section.content || section.tooltip || `Section ${section.id}`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  if (section.href) {
                    window.open(section.href, "_blank");
                  } else {
                    setActiveSection(section.id);
                  }
                }
              }}
            />
          ))}

          {/* Tooltip */}
          {tooltip && (
            <motion.div
              className="absolute bg-gray-900 text-white px-3 py-2 rounded-lg text-sm pointer-events-none z-50 shadow-lg"
              style={{
                left: `${tooltip.x}px`,
                top: `${tooltip.y}px`,
                transform: "translateX(-50%) translateY(-100%)",
              }}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
            >
              {tooltip.content}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
            </motion.div>
          )}
        </motion.div>

        {/* Modal for active section */}
        {activeSection && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setActiveSection(null)}
          >
            <motion.div
              className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  Section: {activeSection}
                </h3>
                <button
                  onClick={() => setActiveSection(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
              <p className="text-gray-600">
                Content for section {activeSection} would go here.
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </Section>
  );
}

