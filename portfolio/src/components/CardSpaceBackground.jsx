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
    let w = canvas.width = canvas.offsetWidth;
    let h = canvas.height = canvas.offsetHeight;

    // Stars
    const stars = Array.from({ length: 60 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      twinkle: Math.random() * 3 + 2,
    }));

    // Slanted comets/meteors (slower)
    const comets = Array.from({ length: 8 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      dx: Math.random() * 0.3 + 0.2, // slower horizontal speed
      dy: Math.random() * 0.3 + 0.2, // slower vertical speed
      len: Math.random() * 60 + 40,
      color: ["#38bdf8", "#818cf8", "#e0f2fe"][Math.floor(Math.random() * 3)],
    }));

    // Tiny orbiting planets (slower rotation)
    const planets = Array.from({ length: 5 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 10 + 5,
      angle: Math.random() * Math.PI * 2,
      orbitRadius: Math.random() * 20 + 20,
      speed: Math.random() * 0.01 + 0.002, // slower orbit speed
      color: ["#facc15", "#f472b6", "#38bdf8"][Math.floor(Math.random() * 3)],
    }));

    // Floating asteroids
    const asteroids = Array.from({ length: 10 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 3 + 1,
      color: "#888",
    }));

    let animationFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, w, h);

      // Background gradient
      const bgGradient = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.max(w, h));
      bgGradient.addColorStop(0, isDark ? "#0b0c2b" : "#f0f4ff");
      bgGradient.addColorStop(1, isDark ? "#000010" : "#e0e0e0");
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, w, h);

      // Stars
      stars.forEach((s) => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? `rgba(255,255,255,${s.opacity})` : `rgba(0,0,0,${s.opacity})`;
        ctx.shadowBlur = s.r * 2;
        ctx.shadowColor = isDark ? "#fff" : "#000";
        ctx.fill();

        s.opacity += (Math.random() - 0.5) * 0.02;
        if (s.opacity < 0.2) s.opacity = 0.2;
        if (s.opacity > 1) s.opacity = 1;
      });

      // Comets/meteors
      comets.forEach((c) => {
        ctx.beginPath();
        const gradient = ctx.createLinearGradient(c.x, c.y, c.x - c.dx * c.len, c.y - c.dy * c.len);
        gradient.addColorStop(0, c.color);
        gradient.addColorStop(1, "rgba(255,255,255,0)");
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.moveTo(c.x, c.y);
        ctx.lineTo(c.x - c.dx * c.len, c.y - c.dy * c.len);
        ctx.stroke();

        c.x += c.dx;
        c.y += c.dy;

        if (c.x > w + 50 || c.y > h + 50) {
          c.x = -50;
          c.y = Math.random() * h / 2;
          c.dx = Math.random() * 0.3 + 0.2;
          c.dy = Math.random() * 0.3 + 0.2;
          c.len = Math.random() * 60 + 40;
          c.color = ["#38bdf8", "#818cf8", "#e0f2fe"][Math.floor(Math.random() * 3)];
        }
      });

      // Planets orbiting
      planets.forEach((p) => {
        p.angle += p.speed; // slower
        const px = p.x + p.orbitRadius * Math.cos(p.angle);
        const py = p.y + p.orbitRadius * Math.sin(p.angle);
        ctx.beginPath();
        ctx.arc(px, py, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      // Floating asteroids
      asteroids.forEach((a) => {
        a.x += a.dx;
        a.y += a.dy;
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
