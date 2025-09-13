// src/components/Particles.jsx
import React, { useMemo } from "react";

const Particles = ({
  count = 20,
  bigCount = 5,
  className = "",
}) => {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`,
      duration: `${2 + Math.random() * 3}s`,
    }));
  }, [count]);

  const bigParticles = useMemo(() => {
    return Array.from({ length: bigCount }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 10 + 5}px`,
      duration: `${3 + Math.random() * 4}s`,
    }));
  }, [bigCount]);

  return (
    <div className={`pointer-events-none ${className}`}>
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white/90 blur-sm animate-pulse"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: p.duration,
          }}
        />
      ))}

      {bigParticles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-blue-400/50 blur-md animate-bounce"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
