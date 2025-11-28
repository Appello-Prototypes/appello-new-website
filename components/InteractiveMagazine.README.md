# Interactive Magazine Component

An interactive React component that displays an SVG magazine layout with zoom, pan, clickable sections, hover effects, and scroll animations.

## Features

- **Zoom**: Mouse wheel, buttons, or keyboard (+/-)
- **Pan**: Click and drag, touch gestures, or arrow keys
- **Clickable Sections**: Define interactive areas that open modals or navigate
- **Hover Effects**: Tooltips and visual feedback on hover
- **Scroll Animations**: Fade-in animation when component enters viewport
- **Touch Support**: Pinch-to-zoom and drag gestures for mobile devices
- **Keyboard Navigation**: Arrow keys for panning, +/- for zoom, 0 to reset
- **Accessibility**: ARIA labels, keyboard navigation, focus indicators

## Installation

The component uses `framer-motion` for animations. It's already installed:

```bash
npm install framer-motion
```

## Usage

### Basic Usage

```tsx
import InteractiveMagazine from "@/components/InteractiveMagazine";

export default function Page() {
  return <InteractiveMagazine />;
}
```

### With Clickable Sections

```tsx
import InteractiveMagazine, { ClickableSection } from "@/components/InteractiveMagazine";

const sections: ClickableSection[] = [
  {
    id: "header",
    x: 0,
    y: 0,
    width: 1224,
    height: 150,
    content: "Header section",
    tooltip: "Click to learn more",
  },
  {
    id: "feature-1",
    x: 100,
    y: 200,
    width: 400,
    height: 300,
    href: "/features/feature-1",
    tooltip: "Feature 1",
  },
];

export default function Page() {
  return (
    <InteractiveMagazine 
      clickableSections={sections}
      showDebugOverlay={process.env.NODE_ENV === "development"}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `""` | Additional CSS classes |
| `clickableSections` | `ClickableSection[]` | `[]` | Array of clickable section definitions |
| `showDebugOverlay` | `boolean` | `false` | Show clickable areas overlay (useful for development) |

## ClickableSection Interface

```typescript
interface ClickableSection {
  id: string;              // Unique identifier
  x: number;               // X coordinate in SVG space
  y: number;               // Y coordinate in SVG space
  width: number;           // Width in SVG space
  height: number;          // Height in SVG space
  content?: string;        // Content shown in modal when clicked
  href?: string;          // URL to navigate to (opens in new tab)
  tooltip?: string;       // Text shown on hover
}
```

## SVG Attributes

You can also add interactivity directly to SVG elements by adding data attributes:

- `data-clickable="true"` - Makes element clickable
- `data-section-id="unique-id"` - Identifier for the section
- `data-href="https://..."` - URL to navigate to on click
- `data-hover="true"` - Enables hover effects
- `data-tooltip="Tooltip text"` - Text to show on hover

Example:
```xml
<text data-clickable="true" data-section-id="text-1" data-tooltip="Click me">
  Clickable Text
</text>
```

## Keyboard Shortcuts

- `Arrow Keys` - Pan the view
- `+` or `=` - Zoom in
- `-` or `_` - Zoom out
- `0` - Reset zoom and pan
- `Escape` - Close modals/tooltips

## Finding SVG Coordinates

To find coordinates for clickable sections:

1. **Using Browser DevTools**:
   - Load the SVG in the browser
   - Inspect the element
   - Check `getBoundingClientRect()` for coordinates

2. **Using Vector Editor**:
   - Open SVG in Illustrator/Inkscape
   - Select the element
   - Note the x, y, width, and height values

## File Structure

- `InteractiveMagazine.tsx` - Main component
- `InteractiveMagazine.config.example.ts` - Configuration examples
- `InteractiveMagazine.usage.example.tsx` - Usage examples
- `InteractiveMagazine.README.md` - This file

## SVG File Location

The SVG file should be located at:
```
public/images/appello-magazine.svg
```

The component automatically loads it from this path.

## Performance Considerations

- The SVG is loaded dynamically to avoid blocking initial page load
- Zoom and pan use CSS transforms (GPU accelerated)
- Scroll animations use Intersection Observer API
- Touch events are debounced for smooth performance

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (including touch gestures)
- Mobile browsers: Full touch support

## Accessibility

- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Screen reader friendly

