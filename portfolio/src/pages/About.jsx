import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDocker, FaAws } from "react-icons/fa";
import {
  SiTailwindcss,
  SiSpringboot,
  SiJenkins,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import SpaceBackground from "../components/SpaceBackground";
import CardSpaceBackground from "../components/CardSpaceBackground"; // 👈 import

const skills = [
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
  { name: "Jenkins", icon: <SiJenkins className="text-red-500" /> },
  { name: "AWS", icon: <FaAws className="text-orange-400" /> },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: { opacity: 0, y: 50, transition: { duration: 0.4 } },
};

const skillVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: { opacity: 0, y: 30, transition: { duration: 0.3 } },
  hover: { scale: 1.15, transition: { type: "spring", stiffness: 250 } },
};

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen px-6 sm:px-10 md:px-20 py-16 md:py-24 
                 bg-transparent transition-colors duration-500 flex justify-center"
    >
      {/* 🌌 Global space background */}
      <SpaceBackground />

      {/* 🌌 Big Parent Card */}
      <motion.div
        className="relative z-10 w-full max-w-6xl rounded-3xl shadow-2xl border border-white/20 
                   p-8 sm:p-12 md:p-16 flex flex-col gap-12 overflow-hidden bg-black/30 backdrop-blur-lg"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* 🪐 Card-specific animated background */}
        <CardSpaceBackground />

        {/* Content wrapper (keeps content above animations) */}
        <div className="relative z-10 flex flex-col gap-12">
          {/* Intro Card */}
          <motion.div
            className="w-full bg-white/10 dark:bg-black/20 backdrop-blur-lg rounded-2xl 
                       shadow-xl border border-white/20 p-8 sm:p-12"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white text-center">
              About{" "}
              <span className="text-indigo-400">
                Me
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-300 text-center">
              Hi, I'm{" "}
              <span className="font-semibold text-blue-500">
                Devaseesh Kumar
              </span>
              , a passionate{" "}
              <span className="font-semibold text-purple-500">
                Full Stack Developer
              </span>{" "}
              and{" "}
              <span className="font-semibold text-green-500">
                DevOps Engineer
              </span>
              . I love building scalable applications, automating workflows,
              and deploying projects on the cloud with modern CI/CD pipelines.
            </p>
          </motion.div>

          {/* Skills Card */}
          <motion.div
            className="w-full bg-white/10 dark:bg-black/20 backdrop-blur-lg rounded-2xl 
                       shadow-xl border border-white/20 p-8 sm:p-12"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-gray-900 dark:text-white text-center">
              My{" "}
              <span className="text-amber-300">
  Skills
</span>

            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 sm:gap-8">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="flex flex-col items-center justify-center gap-2 p-2"
                  variants={skillVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  exit="exit"
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl">
                    {skill.icon}
                  </div>
                  <span className="text-xs sm:text-sm md:text-base text-gray-800 dark:text-gray-200 text-center">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interests Card */}
          <motion.div
            className="w-full bg-white/10 dark:bg-black/20 backdrop-blur-lg rounded-2xl 
                       shadow-xl border border-white/20 p-8 sm:p-12"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white text-center">
              <span className="text-indigo-400">
                Interests & More
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center">
              I enjoy exploring new technologies, cloud platforms, and
              contributing to projects that solve real-world problems. I focus
              on blending development and operations to create efficient,
              reliable, and user-friendly software.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
