/**
 * Example usage of InteractiveMagazine component
 */

import InteractiveMagazine, { ClickableSection } from "./InteractiveMagazine";

// Example: Define clickable sections
const magazineSections: ClickableSection[] = [
  {
    id: "header",
    x: 0,
    y: 0,
    width: 1224,
    height: 150,
    content: "Header section content",
    tooltip: "Click to learn more",
  },
  {
    id: "feature-1",
    x: 100,
    y: 200,
    width: 400,
    height: 300,
    content: "Feature 1 details would go here",
    href: "/features/feature-1",
    tooltip: "Feature 1 - Click to learn more",
  },
];

// Basic usage
export function BasicExample() {
  return <InteractiveMagazine />;
}

// With clickable sections
export function WithSectionsExample() {
  return (
    <InteractiveMagazine 
      clickableSections={magazineSections}
    />
  );
}

// With debug overlay (shows clickable areas)
export function DebugExample() {
  return (
    <InteractiveMagazine 
      clickableSections={magazineSections}
      showDebugOverlay={true}
    />
  );
}

// Full example with custom styling
export function FullExample() {
  return (
    <InteractiveMagazine 
      className="my-custom-class"
      clickableSections={magazineSections}
      showDebugOverlay={process.env.NODE_ENV === "development"}
    />
  );
}

