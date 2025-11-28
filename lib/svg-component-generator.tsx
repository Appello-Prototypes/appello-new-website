/**
 * SVG Component Generator - Creates React components from SVG elements
 */

import React from "react";
import { motion } from "framer-motion";
import { SVGElement, convertAttributesToProps } from "./svg-parser";

export interface InteractiveSVGElementProps {
  element: SVGElement;
  isInteractive?: boolean;
  onClick?: (element: SVGElement) => void;
  onHover?: (element: SVGElement) => void;
  animationProps?: Record<string, any>;
  className?: string;
}

/**
 * Render an SVG element as a React component
 */
export function renderSVGElement(
  element: SVGElement,
  props: Partial<InteractiveSVGElementProps> = {}
): React.ReactElement {
  const {
    isInteractive = false,
    onClick,
    onHover,
    animationProps = {},
    className = "",
  } = props;

  const elementProps: Record<string, any> = convertAttributesToProps(element.attributes);
  
  // Add interactive props
  if (isInteractive) {
    if (onClick) {
      elementProps.onClick = () => onClick(element);
      elementProps.style = { ...elementProps.style, cursor: "pointer" };
    }
    if (onHover) {
      elementProps.onMouseEnter = () => onHover(element);
    }
  }

  // Merge animation props
  const motionProps = {
    ...elementProps,
    ...animationProps,
    className: `${elementProps.className || ""} ${className}`.trim(),
  };

  // Render based on element type
  switch (element.type) {
    case "g":
      return (
        <motion.g key={element.id} {...motionProps}>
          {element.children.map((child) => renderSVGElement(child, props))}
          {element.content}
        </motion.g>
      );

    case "path":
      return (
        <motion.path
          key={element.id}
          {...motionProps}
          d={element.attributes.d}
        />
      );

    case "text":
      return (
        <motion.text key={element.id} {...motionProps}>
          {element.content}
          {element.children.map((child) => renderSVGElement(child, props))}
        </motion.text>
      );

    case "tspan":
      return (
        <motion.tspan key={element.id} {...motionProps}>
          {element.content}
        </motion.tspan>
      );

    case "rect":
      return (
        <motion.rect
          key={element.id}
          {...motionProps}
          x={element.attributes.x}
          y={element.attributes.y}
          width={element.attributes.width}
          height={element.attributes.height}
          rx={element.attributes.rx}
          ry={element.attributes.ry}
        />
      );

    case "circle":
      return (
        <motion.circle
          key={element.id}
          {...motionProps}
          cx={element.attributes.cx}
          cy={element.attributes.cy}
          r={element.attributes.r}
        />
      );

    case "ellipse":
      return (
        <motion.ellipse
          key={element.id}
          {...motionProps}
          cx={element.attributes.cx}
          cy={element.attributes.cy}
          rx={element.attributes.rx}
          ry={element.attributes.ry}
        />
      );

    case "image":
      // Convert xlink:href to xlinkHref for React
      const imageHref = element.attributes.href || element.attributes["xlink:href"];
      const imageProps: Record<string, any> = { ...motionProps };
      if (element.attributes["xlink:href"] && !element.attributes.href) {
        imageProps.xlinkHref = element.attributes["xlink:href"];
      } else if (imageHref) {
        imageProps.href = imageHref;
      }
      
      return (
        <motion.image
          key={element.id}
          {...imageProps}
          x={element.attributes.x}
          y={element.attributes.y}
          width={element.attributes.width}
          height={element.attributes.height}
        />
      );

    case "polygon":
      return (
        <motion.polygon
          key={element.id}
          {...motionProps}
          points={element.attributes.points}
        />
      );

    case "polyline":
      return (
        <motion.polyline
          key={element.id}
          {...motionProps}
          points={element.attributes.points}
        />
      );

    case "line":
      return (
        <motion.line
          key={element.id}
          {...motionProps}
          x1={element.attributes.x1}
          y1={element.attributes.y1}
          x2={element.attributes.x2}
          y2={element.attributes.y2}
        />
      );

    default:
      // Fallback for unknown elements
      return (
        <g key={element.id} {...elementProps}>
          {element.children.map((child) => renderSVGElement(child, props))}
        </g>
      );
  }
}

/**
 * Create an interactive wrapper component for SVG elements
 * Note: This is a helper function - for stateful components, use the component directly
 */
export function createInteractiveElementWrapper(
  element: SVGElement,
  config: {
    defaultAnimation?: Record<string, any>;
    hoverAnimation?: Record<string, any>;
    clickAnimation?: Record<string, any>;
    onClick?: (element: SVGElement) => void;
    onHover?: (element: SVGElement) => void;
  } = {}
): React.ReactElement {
  const {
    defaultAnimation = {},
    hoverAnimation = { scale: 1.05 },
    clickAnimation = { scale: 0.95 },
    onClick,
    onHover,
  } = config;

  return (
    <motion.g
      key={element.id}
      onHoverStart={() => onHover?.(element)}
      onClick={() => onClick?.(element)}
      whileHover={hoverAnimation}
      whileTap={clickAnimation}
      animate={defaultAnimation}
      transition={{ duration: 0.2 }}
    >
      {renderSVGElement(element, { isInteractive: true })}
    </motion.g>
  );
}

