// src/components/Hero3D.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Stars, Html } from "@react-three/drei";
import { Box } from "@react-three/drei";

const Hero3D = () => {
  return (
    <div className="h-screen w-full">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        <OrbitControls enableZoom={false} />
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Box args={[2, 2, 2]}>
            <meshStandardMaterial color="royalblue" />
          </Box>
        </Float>
      </Canvas>
    </div>
  );
};

export default Hero3D;
