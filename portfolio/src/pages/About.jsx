import React from "react";
import { motion } from "framer-motion";
import SpaceBackground from "../components/SpaceBackground";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="relative min-h-screen px-6 md:px-20 overflow-hidden
                   bg-transparent transition-colors duration-500"
      >
        <SpaceBackground /> {/* ✅ keeps stars/space moving */}
        
        <div className="relative z-10 max-w-5xl mx-auto text-center py-20">
          {/* Title Animation */}
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </motion.h2>

          {/* Paragraph Animation */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-lg leading-8 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
          >
            I'm a passionate{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">DevOps Engineer</span>{" "}
            and{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">Full Stack Developer</span>{" "}
            who loves automating workflows and building scalable, user-focused applications.
            I specialize in integrating modern CI/CD pipelines, developing with React
            and Node.js, and deploying across cloud platforms. My work blends development
            and operations to ensure reliable, efficient software delivery.
          </motion.p>

          
        </div>
      </section>
    </>
  );
};

export default About;
