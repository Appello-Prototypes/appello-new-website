/**
 * Example configuration for InteractiveMagazine component
 * 
 * To make sections of the SVG interactive, you can:
 * 
 * 1. Add data attributes directly to SVG elements:
 *    - data-clickable="true" - Makes element clickable
 *    - data-section-id="unique-id" - Identifier for the section
 *    - data-href="https://..." - URL to navigate to on click
 *    - data-hover="true" - Enables hover effects
 *    - data-tooltip="Tooltip text" - Text to show on hover
 * 
 * 2. Define clickable sections programmatically:
 */

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

// Example: Define clickable sections based on SVG coordinates
export const exampleClickableSections: ClickableSection[] = [
  {
    id: "header-section",
    x: 0,
    y: 0,
    width: 1224,
    height: 100,
    content: "Click to learn more about our header",
    href: "/about",
    tooltip: "Header Section",
  },
  {
    id: "feature-1",
    x: 100,
    y: 200,
    width: 300,
    height: 200,
    content: "Feature 1 details",
    tooltip: "Feature 1",
  },
  {
    id: "feature-2",
    x: 500,
    y: 200,
    width: 300,
    height: 200,
    content: "Feature 2 details",
    tooltip: "Feature 2",
  },
];

/**
 * To find coordinates in your SVG:
 * 
 * 1. Open the SVG in a vector editor (Illustrator, Inkscape, etc.)
 * 2. Select the element you want to make interactive
 * 3. Note the x, y, width, and height values
 * 4. Add them to the clickableSections array
 * 
 * Or use browser DevTools:
 * 1. Load the SVG in the browser
 * 2. Inspect the element
 * 3. Check getBoundingClientRect() for coordinates
 */

/**
 * SVG Element Attributes:
 * 
 * Add these attributes directly to SVG elements in the source file:
 * 
 * <text data-clickable="true" data-section-id="text-1" data-tooltip="Click me">
 *   Clickable Text
 * </text>
 * 
 * <g data-hover="true" data-tooltip="Hover for details">
 *   <!-- SVG content -->
 * </g>
 * 
 * <image data-clickable="true" data-href="https://example.com" data-tooltip="Visit website">
 *   <!-- Image content -->
 * </image>
 */

