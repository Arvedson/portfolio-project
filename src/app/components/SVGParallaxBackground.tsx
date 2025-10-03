"use client";

import React from "react";
import useParallax from "@/hooks/useParallax";

interface SVGParallaxBackgroundProps {
  speed?: number;
  className?: string;
  opacity?: number;
}

const SVGParallaxBackground: React.FC<SVGParallaxBackgroundProps> = ({
  speed = 0.3,
  className = "",
  opacity = 0.1,
}) => {
  const y = useParallax({ speed });

  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        opacity,
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        className="absolute inset-0"
        preserveAspectRatio="none"
        style={{
          transform: `translateY(${y}px)`,
        }}
      >
        {/* Patrones verdaderamente infinitos */}
        <defs>
          {/* Patrón de grid infinito */}
          <pattern
            id="grid"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.1"
              opacity="0.3"
            />
          </pattern>

          {/* Patrón de puntos infinito */}
          <pattern id="dots" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="4" r="0.5" fill="currentColor" opacity="0.4" />
          </pattern>

          {/* Patrón de hexágonos infinito */}
          <pattern
            id="hexagons"
            width="16"
            height="16"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points="8,1 12,4 12,8 8,11 4,8 4,4"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.1"
              opacity="0.2"
            />
          </pattern>

          {/* Patrón de círculos infinito */}
          <pattern
            id="circles"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.05" />
          </pattern>

          {/* Patrón de líneas infinito */}
          <pattern
            id="lines"
            width="30"
            height="30"
            patternUnits="userSpaceOnUse"
          >
            <line
              x1="0"
              y1="15"
              x2="30"
              y2="15"
              stroke="currentColor"
              strokeWidth="0.2"
              opacity="0.1"
            />
          </pattern>

          {/* Gradientes */}
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.05" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Fondo con gradiente infinito */}
        <rect width="100%" height="100%" fill="url(#gradient1)" />

        {/* Patrones infinitos superpuestos */}
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#dots)" />
        <rect width="100%" height="100%" fill="url(#hexagons)" />
        <rect width="100%" height="100%" fill="url(#circles)" />
        <rect width="100%" height="100%" fill="url(#lines)" />
      </svg>
    </div>
  );
};

export default SVGParallaxBackground;
