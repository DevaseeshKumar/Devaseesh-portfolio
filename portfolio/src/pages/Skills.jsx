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
import Particles from "../components/Particles";

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
        { name: "GitHub Actions", icon: <FaGithub />, color: "#6e5494" }, // changed for visible hover
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

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200 } },
  };

  return (
    <motion.section
      id="skills"
      className="relative min-h-screen px-6 md:px-20 flex items-center justify-center bg-transparent py-20 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <SpaceBackground className="absolute inset-0 z-0" />

      <motion.div
        className="relative z-10 max-w-6xl w-full rounded-3xl shadow-2xl border border-white/10 overflow-hidden"
        variants={containerVariants}
      >
        <Particles count={25} bigCount={7} className="absolute inset-0 z-20 pointer-events-none" />

        <div className="relative z-30 p-10 md:p-16 bg-white/0 dark:bg-black/0 backdrop-blur-xl rounded-3xl">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-gray-900 dark:text-white tracking-wide"
            variants={itemVariants}
          >
            Tech{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Stack
            </span>
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-12 rounded-full animate-pulse"
            variants={itemVariants}
          />

          <motion.div className="grid md:grid-cols-2 gap-10 text-left" variants={containerVariants}>
            {categories.map((category, i) => (
              <motion.div key={i} variants={itemVariants}>
                <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">{category.title}</h3>
                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill, j) => (
                    <motion.div
                      key={j}
                      className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                                 border border-white/10 backdrop-blur-xl
                                 bg-white/10 dark:bg-black/20
                                 transition-all duration-300 transform cursor-pointer"
                      style={{ color: skill.color }}
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.1,
                        boxShadow: `
                          0 0 10px ${skill.color},
                          0 0 20px ${skill.color}40,
                          0 0 30px ${skill.color}60,
                          0 0 50px ${skill.color}80
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
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;
