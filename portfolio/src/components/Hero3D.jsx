// src/components/Hero3D.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Stars, Box } from "@react-three/drei";

const Hero3D = () => {
  // Detect Tailwind dark mode by checking <html class="dark">
  const isDark = document.documentElement.classList.contains("dark");

  return (
    <div className="h-screen w-full">
      <Canvas>
        {/* Lights */}
        <ambientLight intensity={isDark ? 0.3 : 0.6} />
        <directionalLight position={[2, 2, 2]} intensity={isDark ? 0.8 : 1} />

        {/* Background color */}
        <color attach="background" args={[isDark ? "#0f172a" : "#f8fafc"]} />

        {/* Stars (only visible in dark mode for cool effect) */}
        {isDark && (
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
          />
        )}

        {/* Controls */}
        <OrbitControls enableZoom={false} />

        {/* Floating Cube */}
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Box args={[2, 2, 2]}>
            <meshStandardMaterial
              color={isDark ? "deepskyblue" : "royalblue"}
              metalness={0.4}
              roughness={0.6}
            />
          </Box>
        </Float>
      </Canvas>
    </div>
  );
};

export default Hero3D;
