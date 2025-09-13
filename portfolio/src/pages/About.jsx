import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDocker, FaAws } from "react-icons/fa";
import { SiTailwindcss, SiSpringboot, SiJenkins, SiMongodb, SiMysql } from "react-icons/si";
import SpaceBackground from "../components/SpaceBackground";

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

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const skillVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  hover: { scale: 1.15, transition: { type: "spring", stiffness: 300 } },
};

const About = () => {
  // Scroll to top whenever this component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen px-6 md:px-20 py-20 bg-transparent transition-colors duration-500 flex flex-col items-center gap-12"
    >
      <SpaceBackground />

      {/* Intro Card */}
      <motion.div
        className="relative z-10 max-w-4xl w-full bg-white/10 dark:bg-black/20 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-10 md:p-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white tracking-wide">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Me
          </span>
        </h2>
        <p className="text-lg md:text-xl leading-8 text-gray-800 dark:text-gray-300 max-w-3xl mx-auto">
          Hi, I'm <span className="font-semibold text-blue-500">Devaseesh Kumar</span>, a passionate{" "}
          <span className="font-semibold text-purple-500">Full Stack Developer</span> and{" "}
          <span className="font-semibold text-green-500">DevOps Engineer</span>. I love building scalable
          applications, automating workflows, and deploying projects on the cloud with modern CI/CD pipelines.
        </p>
      </motion.div>

      {/* Skills Card */}
      <motion.div
        className="relative z-10 max-w-4xl w-full bg-white/10 dark:bg-black/20 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-10 md:p-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white tracking-wide">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Skills
          </span>
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-center items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center justify-center gap-2 p-2"
              variants={skillVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <div className="text-4xl">{skill.icon}</div>
              <span className="text-sm text-gray-800 dark:text-gray-200">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Interests / Other Info Card */}
      <motion.div
        className="relative z-10 max-w-4xl w-full bg-white/10 dark:bg-black/20 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-10 md:p-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white tracking-wide">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Interests and More
          </span>
        </h2>
        <p className="text-lg md:text-xl leading-8 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          I enjoy exploring new technologies, cloud platforms, and contributing to projects that solve
          real-world problems. I focus on blending development and operations to create efficient,
          reliable, and user-friendly software.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
