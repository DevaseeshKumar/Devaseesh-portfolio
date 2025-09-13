import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  SiDocker,
  SiReact,
  SiJenkins,
  SiSpringboot,
  SiMongodb,
  SiNodedotjs,
  SiMysql,
} from "react-icons/si";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import SpaceBackground from "../components/SpaceBackground";

const projects = [
  // your projects array remains the same
  {
    title: "Leavo",
    role: "Full Stack",
    shortDescription: "Role-based leave management app using MERN stack with email alerts.",
    description:
      "Full-stack MERN application with admin/employee roles, leave requests, email notifications, and secure authentication.",
    duration: "Jan 2024 – Mar 2024",
    stack: [
      { name: "React", color: "#61DBFB", icon: <SiReact className="text-[#61DBFB]" /> },
      { name: "Node.js", color: "#3C873A", icon: <SiNodedotjs className="text-[#3C873A]" /> },
      { name: "MongoDB", color: "#47A248", icon: <SiMongodb className="text-[#47A248]" /> },
    ],
    demo: "https://leavo.netlify.app/",
    github: "https://github.com/DevaseeshKumar/ELMS",
  },
  {
    title: "Student Activity Portal",
    role: "Full Stack",
    shortDescription: "Backend system for student event management with faculty assignment.",
    description:
      "Spring Boot backend system for managing student events, faculty assignments, and automated email notifications.",
    duration: "Mar 2024 – May 2024",
    stack: [
      { name: "React", color: "#61DBFB", icon: <SiReact className="text-[#61DBFB]" /> },
      { name: "Spring Boot", color: "#6DB33F", icon: <SiSpringboot className="text-[#6DB33F]" /> },
      { name: "MySQL", color: "#4479A1", icon: <SiMysql className="text-[#4479A1]" /> },
    ],
    demo: "https://studentactportal.netlify.app/",
    github: "https://github.com/DevaseeshKumar/SDP-27-StudentActivityPortal",
  },
  {
    title: "LEAVO Deployment with Docker & Jenkins",
    role: "DevOps",
    shortDescription: "CI/CD deployment of LEAVO MERN app using Jenkins and Docker.",
    description:
      "Deployed the LEAVO Employee Leave Management System on Docker using Jenkins CI/CD pipeline with automated builds and deployments.",
    duration: "Apr 2025 – Aug 2025",
    stack: [
      { name: "Jenkins", color: "#D24939", icon: <SiJenkins className="text-[#D24939]" /> },
      { name: "Docker", color: "#2496ED", icon: <SiDocker className="text-[#2496ED]" /> },
      { name: "React", color: "#61DBFB", icon: <SiReact className="text-[#61DBFB]" /> },
      { name: "Node.js", color: "#3C873A", icon: <SiNodedotjs className="text-[#3C873A]" /> },
      { name: "MongoDB", color: "#47A248", icon: <SiMongodb className="text-[#47A248]" /> },
    ],
    demo: "#",
    github: "https://github.com/DevaseeshKumar/ELMS-DevOps",
  },
  {
    title: "React + Spring Boot CI/CD Demo",
    role: "DevOps",
    shortDescription: "Demo CI/CD pipeline for React + Spring Boot using Jenkins and Docker.",
    description:
      "Demo project showcasing CI/CD pipeline using Jenkins and Docker with a React frontend and Spring Boot backend.",
    duration: "Apr 2025 – Aug 2025",
    stack: [
      { name: "Jenkins", color: "#D24939", icon: <SiJenkins className="text-[#D24939]" /> },
      { name: "Docker", color: "#2496ED", icon: <SiDocker className="text-[#2496ED]" /> },
      { name: "React", color: "#61DBFB", icon: <SiReact className="text-[#61DBFB]" /> },
      { name: "Spring Boot", color: "#6DB33F", icon: <SiSpringboot className="text-[#6DB33F]" /> },
      { name: "MySQL", color: "#4479A1", icon: <SiMysql className="text-[#4479A1]" /> },
    ],
    demo: "#",
    github: "https://github.com/DevaseeshKumar/ReactSpring",
  },
  {
    title: "WeatherNow",
    role: "Frontend",
    shortDescription: "Weather app showing current conditions and forecast using OpenWeather API.",
    description:
      "React + Vite + Tailwind project fetching current weather and forecast data using the OpenWeather API. No backend required.",
    duration: "Jul 2025",
    stack: [{ name: "React", color: "#61DBFB", icon: <SiReact className="text-[#61DBFB]" /> }],
    demo: "https://weathernowgg.netlify.app/",
    github: "https://github.com/DevaseeshKumar/WeatherNow",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [flipped, setFlipped] = useState({});
  const [tilt, setTilt] = useState({});

  const filteredProjects = projects.filter(
    (proj) => filter === "All" || proj.role === filter
  );

  const toggleFlip = (i) => setFlipped((prev) => ({ ...prev, [i]: !prev[i] }));
  const handleMouseMove = (e, i) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height - 0.5) * 20).toFixed(2);
    const rotateY = ((x / rect.width - 0.5) * -20).toFixed(2);
    setTilt((prev) => ({ ...prev, [i]: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }));
  };
  const resetTilt = (i) => setTilt((prev) => ({ ...prev, [i]: "rotateX(0deg) rotateY(0deg)" }));

  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.15, duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200 } },
  };

  return (
    <motion.section
      id="projects"
      className="relative min-h-screen px-6 md:px-20 flex flex-col items-center bg-transparent transition-colors duration-500 py-20 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <SpaceBackground />

      <motion.div
        className="relative z-10 max-w-7xl w-full bg-white/10 dark:bg-black/20 
                    backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-10 md:p-16"
        variants={containerVariants}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-gray-900 dark:text-white tracking-wide">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Projects
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-12 rounded-full animate-pulse" />

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {["All", "DevOps", "Full Stack", "Frontend"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-md ${
                filter === category
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-gray-300 dark:bg-blue-900 text-gray-800 dark:text-white hover:scale-105"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              onMouseMove={(e) => handleMouseMove(e, i)}
              onMouseLeave={() => resetTilt(i)}
              style={{ transform: tilt[i], transition: "transform 0.2s ease-out" }}
              className="relative w-full h-96 [perspective:1000px] rounded-3xl group"
            >
              {/* Space Glow */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-80 blur-3xl transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 30% 30%, rgba(129, 140, 248, 0.3), transparent 60%), 
                               radial-gradient(circle at 70% 70%, rgba(248, 129, 248, 0.3), transparent 60%)`,
                  mixBlendMode: "screen",
                  pointerEvents: "none",
                }}
              ></div>

              {/* Card Inner */}
              <div
                className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                  flipped[i] ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                {/* Front */}
                <div className="absolute w-full h-full card-face bg-white/90 dark:bg-[#0a192f]/90 backdrop-blur-md rounded-3xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col justify-between group-hover:scale-[1.02] transition-transform">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm italic text-gray-500 dark:text-gray-300 mb-2">
                      Role: {project.role}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-400 mb-4">{project.duration}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-200 line-clamp-3">{project.shortDescription}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex gap-4 text-4xl">
                      {project.stack.map((item, idx) => (
                        <span
                          key={idx}
                          className="transition-transform transform hover:scale-125 hover:drop-shadow-[0_0_20px] hover:drop-shadow-current"
                          title={item.name}
                          style={{ color: item.color }}
                        >
                          {item.icon}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => toggleFlip(i)}
                      className="text-xs px-3 py-1 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
                    >
                      More
                    </button>
                  </div>
                </div>

                {/* Back */}
                <div className="absolute w-full h-full card-face rotate-y-180 bg-gray-100/90 dark:bg-[#112240]/90 backdrop-blur-md rounded-3xl p-6 shadow-lg flex flex-col justify-between">
                  <p className="text-gray-800 dark:text-gray-200 text-sm mb-6">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-6">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200 transition-colors"
                      >
                        <FaGithub /> Code
                      </a>
                      {project.demo && project.demo !== "#" && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200 transition-colors"
                        >
                          <FaExternalLinkAlt /> Live
                        </a>
                      )}
                    </div>
                    <button
                      onClick={() => toggleFlip(i)}
                      className="text-xs px-3 py-1 rounded-full bg-gray-700 text-white hover:bg-gray-900 transition"
                    >
                      Back
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
