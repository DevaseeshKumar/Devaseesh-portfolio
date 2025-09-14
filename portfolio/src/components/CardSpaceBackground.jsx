// src/components/CardSpaceBackground.jsx
import React, { useEffect, useRef, useState } from "react";

const CardSpaceBackground = () => {
  const canvasRef = useRef(null);
  const [isDark, setIsDark] = useState(
    () => document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);

    // Small floating asteroids only
    const asteroids = Array.from({ length: 15 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      dx: (Math.random() - 0.5) * 0.4, // slower drift
      dy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1, // small size
      color: isDark ? "#aaa" : "#555",
    }));

    let animationFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, w, h);

      // Subtle gradient background
      const bgGradient = ctx.createRadialGradient(
        w / 2,
        h / 2,
        0,
        w / 2,
        h / 2,
        Math.max(w, h)
      );
      bgGradient.addColorStop(0, isDark ? "#0b0c2b" : "#f9fafb");
      bgGradient.addColorStop(1, isDark ? "#000010" : "#e5e7eb");
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, w, h);

      // Floating asteroids
      asteroids.forEach((a) => {
        a.x += a.dx;
        a.y += a.dy;

        // Wrap around edges
        if (a.x < 0) a.x = w;
        if (a.x > w) a.x = 0;
        if (a.y < 0) a.y = h;
        if (a.y > h) a.y = 0;

        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fillStyle = a.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none rounded-3xl"
    />
  );
};

export default CardSpaceBackground;
