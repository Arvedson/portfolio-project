"use client";

import React from "react";
import useParallax from "@/hooks/useParallax";

interface ParallaxBodyBackgroundProps {
  speed?: number;
  opacity?: number;
}

const ParallaxBodyBackground: React.FC<ParallaxBodyBackgroundProps> = ({
  speed = 0.1,
  opacity = 0.2,
}) => {
  const y = useParallax({ speed });

  return (
    <div
      className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none"
      style={{
        opacity,
        zIndex: -2, // Detrás del contenido pero delante del fondo base
        minHeight: "200vh", // Asegura que cubra páginas largas
      }}
    >
      {/* Patrón de gradientes repetitivos con parallax - expandido para páginas largas */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: `
            repeating-linear-gradient(
              45deg,
              var(--background) 0%,
              var(--primary) 3%,
              transparent 7%,
              transparent 50%
            ),
            repeating-linear-gradient(
              45deg,
              var(--primary) 0%,
              var(--background) 10%,
              transparent 5%,
              transparent 50%
            )
          `,
          backgroundSize: "90em 90em",
          backgroundColor: "var(--background)",
          minHeight: "200vh", // Asegura cobertura completa
          transform: `translateY(${y * 0.02}px)`, // Movimiento muy sutil para el fondo base
        }}
      />

      {/* Elementos decorativos adicionales con parallax */}
      <div className="absolute inset-0">
        {/* Círculos flotantes con diferentes velocidades */}
        <div
          className="absolute w-32 h-32 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
            top: "10%",
            left: "20%",
            transform: `translateY(${y * 0.05}px)`,
          }}
        />
        <div
          className="absolute w-24 h-24 rounded-full opacity-8"
          style={{
            background:
              "radial-gradient(circle, var(--secondary) 0%, transparent 70%)",
            top: "60%",
            right: "15%",
            transform: `translateY(${y * 0.03}px)`,
          }}
        />
        <div
          className="absolute w-40 h-40 rounded-full opacity-6"
          style={{
            background:
              "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
            bottom: "20%",
            left: "60%",
            transform: `translateY(${y * 0.04}px)`,
          }}
        />

        {/* Líneas diagonales con parallax */}
        <div
          className="absolute w-full h-px opacity-20"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, var(--primary) 50%, transparent 100%)",
            top: "25%",
            transform: `translateY(${y * 0.01}px) rotate(45deg)`,
          }}
        />
        <div
          className="absolute w-full h-px opacity-15"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, var(--secondary) 50%, transparent 100%)",
            top: "75%",
            transform: `translateY(${y * 0.015}px) rotate(-45deg)`,
          }}
        />

        {/* Formas geométricas con parallax */}
        <div
          className="absolute w-16 h-16 opacity-12"
          style={{
            background: "var(--primary)",
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            top: "40%",
            right: "30%",
            transform: `translateY(${y * 0.06}px)`,
          }}
        />
        <div
          className="absolute w-12 h-12 opacity-10"
          style={{
            background: "var(--accent)",
            clipPath:
              "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            bottom: "30%",
            left: "10%",
            transform: `translateY(${y * 0.02}px)`,
          }}
        />

        {/* Formas adicionales para páginas largas */}
        <div
          className="absolute w-14 h-14 opacity-8"
          style={{
            background: "var(--secondary)",
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            top: "70%",
            left: "70%",
            transform: `translateY(${y * 0.03}px)`,
          }}
        />
        <div
          className="absolute w-10 h-10 opacity-6"
          style={{
            background: "var(--primary)",
            clipPath:
              "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            top: "90%",
            right: "20%",
            transform: `translateY(${y * 0.025}px)`,
          }}
        />
        <div
          className="absolute w-18 h-18 opacity-9"
          style={{
            background: "var(--accent)",
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            top: "110%",
            left: "40%",
            transform: `translateY(${y * 0.04}px)`,
          }}
        />
        <div
          className="absolute w-8 h-8 opacity-5"
          style={{
            background: "var(--secondary)",
            clipPath:
              "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            top: "130%",
            right: "60%",
            transform: `translateY(${y * 0.02}px)`,
          }}
        />
      </div>
    </div>
  );
};

export default ParallaxBodyBackground;
