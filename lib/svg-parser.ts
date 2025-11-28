/**
 * SVG Parser - Extracts individual elements from SVG for component generation
 */

export interface SVGElement {
  id: string;
  type: string;
  attributes: Record<string, string>;
  children: SVGElement[];
  content?: string;
  xpath?: string;
}

export interface ParsedSVG {
  root: SVGElement;
  elements: SVGElement[];
  groups: SVGElement[];
  paths: SVGElement[];
  texts: SVGElement[];
  images: SVGElement[];
  rects: SVGElement[];
  circles: SVGElement[];
  polygons: SVGElement[];
}

/**
 * Parse SVG string and extract all elements
 */
export function parseSVG(svgString: string): ParsedSVG {
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgString, "image/svg+xml");
  const svgElement = doc.documentElement;

  const elements: SVGElement[] = [];
  const groups: SVGElement[] = [];
  const paths: SVGElement[] = [];
  const texts: SVGElement[] = [];
  const images: SVGElement[] = [];
  const rects: SVGElement[] = [];
  const circles: SVGElement[] = [];
  const polygons: SVGElement[] = [];

  function traverse(node: Element | ChildNode, parentXPath: string = ""): SVGElement | null {
    // Skip text nodes and comments
    if (node.nodeType !== 1) return null;
    
    const domElement = node as Element;
    const nodeName = domElement.nodeName.toLowerCase();
    const xpath = parentXPath ? `${parentXPath}/${nodeName}` : nodeName;

    const attributes: Record<string, string> = {};
    Array.from(domElement.attributes).forEach((attr) => {
      attributes[attr.name] = attr.value;
    });

    const children: SVGElement[] = [];
    // Traverse both direct children and all child nodes (for text nodes, etc.)
    Array.from(domElement.childNodes).forEach((child) => {
      if (child.nodeType === 1) {
        // Element node
        const childElement = traverse(child as Element, xpath);
        if (childElement) {
          children.push(childElement);
        }
      }
    });

    // Get text content if it's a text element
    const content = nodeName === "text" || nodeName === "tspan" 
      ? domElement.textContent?.trim() || undefined 
      : undefined;

    const element: SVGElement = {
      id: attributes.id || `${nodeName}-${elements.length}`,
      type: nodeName,
      attributes,
      children,
      content,
      xpath,
    };

    elements.push(element);

    // Categorize elements
    switch (nodeName) {
      case "g":
        groups.push(element);
        break;
      case "path":
        paths.push(element);
        break;
      case "text":
      case "tspan":
        texts.push(element);
        break;
      case "image":
        images.push(element);
        break;
      case "rect":
        rects.push(element);
        break;
      case "circle":
      case "ellipse":
        circles.push(element);
        break;
      case "polygon":
      case "polyline":
        polygons.push(element);
        break;
    }

    return element;
  }

  const root = traverse(svgElement) || {
    id: "root",
    type: "svg",
    attributes: {},
    children: [],
    xpath: "svg",
  };

  return {
    root,
    elements,
    groups,
    paths,
    texts,
    images,
    rects,
    circles,
    polygons,
  };
}

/**
 * Generate a unique component name from element
 */
export function generateComponentName(element: SVGElement): string {
  const id = element.attributes.id || element.id;
  const name = id
    .replace(/[^a-zA-Z0-9]/g, "-")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
  
  return name || `SVGElement${element.id}`;
}

/**
 * Convert SVG attributes to React props
 */
export function convertAttributesToProps(attributes: Record<string, string>): Record<string, string> {
  const props: Record<string, string> = {};
  
  Object.entries(attributes).forEach(([key, value]) => {
    // Convert SVG attributes to React-friendly format
    if (key === "class") {
      props.className = value;
    } else if (key === "for") {
      props.htmlFor = value;
    } else if (key === "xlink:href") {
      // Convert xlink:href to xlinkHref for React
      props.xlinkHref = value;
    } else if (key.startsWith("data-") || key.startsWith("aria-")) {
      props[key] = value;
    } else if (key.includes("-")) {
      // Convert kebab-case to camelCase (but skip xlink:href which we handled above)
      const camelKey = key.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
      props[camelKey] = value;
    } else {
      props[key] = value;
    }
  });

  return props;
}

