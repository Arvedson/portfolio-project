import { useEffect, useState } from "react";

interface UseParallaxOptions {
  speed?: number; // Velocidad del parallax (0-1, donde 0 = estático, 1 = muy rápido)
  offset?: number; // Offset inicial
}

export const useParallax = (options: UseParallaxOptions = {}) => {
  const { speed = 0.5, offset = 0 } = options;
  const [offsetY, setOffsetY] = useState(offset);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxSpeed = scrolled * speed;
      setOffsetY(parallaxSpeed);
    };

    // Throttle para mejor rendimiento
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [speed]);

  return offsetY;
};

export default useParallax;
