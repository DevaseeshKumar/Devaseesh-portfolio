// src/components/SpaceBackground.jsx
import React, { useEffect, useState } from "react";

const SpaceBackground = () => {
  const [isDark, setIsDark] = useState(
    () => document.documentElement.classList.contains("dark")
  );

  // Listen for theme toggle
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
    const starsContainer = document.getElementById("stars");
    if (!starsContainer) return;

    // Clear existing stars + meteors
    starsContainer.innerHTML = "";

    // Update background based on theme
    starsContainer.style.background = isDark
      ? "radial-gradient(ellipse at bottom, #0b0c2b 0%, #000010 100%)"
      : "radial-gradient(ellipse at bottom, #ffffff 0%, #e0e0e0 100%)";

    // Generate stars
for (let i = 0; i < 100; i++) {   // ✅ fewer stars (100 instead of 200)
  const star = document.createElement("div");
  star.className = "stars";

  const size = Math.random() * 2 + 1; // 1px – 3px
  star.style.top = `${Math.random() * 100}vh`;
  star.style.left = `${Math.random() * 100}vw`;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  // Brighter stars glow more
  star.style.background = isDark ? "white" : "black";
  star.style.opacity = `${Math.random() * 0.8 + 0.2}`;
  star.style.boxShadow = `0 0 ${size * 4}px ${isDark ? "white" : "black"}`;

  // Vary twinkle duration for natural feel
  star.style.animationDuration = `${Math.random() * 3 + 2}s`;

  starsContainer.appendChild(star);
}


    // Generate fixed meteors with random delays & durations
    for (let i = 0; i < 15; i++) {
      const meteor = document.createElement("div");
      meteor.className = "meteor";
      meteor.style.top = `${Math.random() * 50}vh`;
      meteor.style.left = `${Math.random() * 100}vw`;
      meteor.style.width = `${Math.random() * 2 + 1}px`;
      meteor.style.height = `${Math.random() * 120 + 50}px`;
      meteor.style.animationDuration = `${Math.random() * 10 + 15}s`; // 15–25s
      meteor.style.animationDelay = `${Math.random() * 20}s`; // stagger starts
      meteor.style.opacity = "0"; // 🔥 hidden until animation kicks in
      meteor.style.background = isDark
        ? "linear-gradient(45deg, white, rgba(255,255,255,0))"
        : "linear-gradient(45deg, black, rgba(0,0,0,0))";
      starsContainer.appendChild(meteor);
    }
  }, [isDark]);

  return <div id="stars" className="space-bg"></div>;
};

export default SpaceBackground;
