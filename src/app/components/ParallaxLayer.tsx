"use client";

import React from "react";
import useParallax from "@/hooks/useParallax";

interface ParallaxLayerProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
  zIndex?: number;
}

const ParallaxLayer: React.FC<ParallaxLayerProps> = ({
  children,
  speed = 0.5,
  className = "",
  style = {},
  zIndex = 0,
}) => {
  const y = useParallax({ speed });

  return (
    <div
      className={`absolute inset-0 ${className}`}
      style={{
        transform: `translateY(${y}px)`,
        zIndex,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxLayer;
