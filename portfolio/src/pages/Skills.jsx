// src/pages/Skills.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaLinux,
  FaGithub,
  FaJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiSpringboot,
  SiJenkins,
} from "react-icons/si";
import SpaceBackground from "../components/SpaceBackground";
import CardSpaceBackground from "../components/CardSpaceBackground"; // planets & stars

const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact />, color: "#61DBFB" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38BDF8" },
        { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, color: "#3C873A" },
        { name: "Express.js", icon: <SiExpress />, color: "#A0A0A0" },
        { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F" },
      ],
    },
    {
      title: "DevOps",
      skills: [
        { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
        { name: "Jenkins", icon: <SiJenkins />, color: "#D24939" },
        { name: "AWS", icon: <FaAws />, color: "#FF9900" },
        { name: "GitHub Actions", icon: <FaGithub />, color: "#6e5494" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Linux", icon: <FaLinux />, color: "#FCC624" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
      ],
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Smooth fade-in
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="skills"
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
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* 🪐 Card-specific animated background */}
        <CardSpaceBackground />

        {/* Content wrapper */}
        <div className="relative z-10 flex flex-col gap-12">
          {/* Title */}
          <motion.div
            className="text-center"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
              Tech{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Stack
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
          </motion.div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 gap-10">
            {categories.map((category, i) => (
              <motion.div
                key={i}
                className="bg-white/10 dark:bg-black/20 backdrop-blur-lg rounded-2xl 
                           shadow-xl border border-white/20 p-6 md:p-8"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill, j) => (
                    <motion.div
                      key={j}
                      className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                                 border border-white/10 backdrop-blur-xl
                                 bg-white/10 dark:bg-black/20
                                 transition-all duration-300 cursor-pointer"
                      style={{ color: skill.color }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: `
                          0 0 10px ${skill.color},
                          0 0 20px ${skill.color}40,
                          0 0 30px ${skill.color}60
                        `,
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-xl">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
