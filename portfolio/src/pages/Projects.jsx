// src/pages/Projects.jsx
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
import CardSpaceBackground from "../components/CardSpaceBackground";

const projects = [
  // ... (same project data as before)
  {
    title: "Leavo",
    role: "Full Stack",
    shortDescription:
      "Role-based leave management app using MERN stack with email alerts.",
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
    shortDescription:
      "Backend system for student event management with faculty assignment.",
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
    shortDescription:
      "Demo CI/CD pipeline for React + Spring Boot using Jenkins and Docker.",
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
    shortDescription:
      "Weather app showing current conditions and forecast using OpenWeather API.",
    description:
      "React + Vite + Tailwind project fetching current weather and forecast data using the OpenWeather API. No backend required.",
    duration: "Jul 2025",
    stack: [
      { name: "React", color: "#61DBFB", icon: <SiReact className="text-[#61DBFB]" /> },
    ],
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

  const toggleFlip = (i) =>
    setFlipped((prev) => ({ ...prev, [i]: !prev[i] }));

  const handleMouseMove = (e, i) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height - 0.5) * 20).toFixed(2);
    const rotateY = ((x / rect.width - 0.5) * -20).toFixed(2);
    setTilt((prev) => ({
      ...prev,
      [i]: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    }));
  };

  const resetTilt = (i) =>
    setTilt((prev) => ({
      ...prev,
      [i]: "rotateX(0deg) rotateY(0deg)",
    }));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", stiffness: 120 } },
  };

  return (
    <motion.section
      id="projects"
      className="relative min-h-screen px-4 sm:px-8 md:px-20 py-12 sm:py-16 md:py-20 flex flex-col items-center overflow-hidden transition-colors duration-300 bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 border border-white/40 rounded-3xl"
    >
      <SpaceBackground className="absolute inset-0 z-0" />
      <CardSpaceBackground />

      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center tracking-wide z-10 relative mb-4"
      >
        My{" "}
        <span className="text-indigo-400">
          Projects
        </span>
      </motion.h2>

      <motion.div
        className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 sm:mb-12 rounded-full animate-pulse"
      />

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 z-10">
        {["All", "DevOps", "Full Stack", "Frontend"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full font-semibold transition-all duration-300 shadow-md ${
              filter === category
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-gray-200 text-gray-800 dark:bg-blue-900 dark:text-white hover:scale-105"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center w-full z-10">
        {filteredProjects.map((project, i) => (
          <motion.div
            key={i}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            onMouseMove={(e) => handleMouseMove(e, i)}
            onMouseLeave={() => resetTilt(i)}
            style={{ transform: tilt[i], transition: "transform 0.2s ease-out" }}
            className="relative w-full max-w-[380px] h-[420px] sm:h-96 [perspective:1000px] rounded-3xl group"
          >
            {/* Glow effect */}
            <div
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-70 blur-3xl transition-opacity duration-500"
              style={{
                background: `radial-gradient(circle at 30% 30%, rgba(129,140,248,0.3), transparent 60%), radial-gradient(circle at 70% 70%, rgba(248,129,248,0.3), transparent 60%)`,
                mixBlendMode: "screen",
                pointerEvents: "none",
              }}
            />

            {/* Flip card */}
            <div
              className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                flipped[i] ? "[transform:rotateY(180deg)]" : ""
              }`}
            >
              {/* Front */}
              <div className="absolute w-full h-full card-face bg-gray-100/80 dark:bg-[#112240]/80 backdrop-blur-lg rounded-3xl p-4 sm:p-6 shadow-xl border border-gray-200 dark:border-white/20 flex flex-col justify-between transition-colors">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm italic text-gray-600 dark:text-gray-300 mb-1">
                    Role: {project.role}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                    {project.duration}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-200 line-clamp-3">
                    {project.shortDescription}
                  </p>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex gap-3 text-2xl sm:text-3xl">
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
                    className="text-xs px-2 sm:px-3 py-1 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
                  >
                    More
                  </button>
                </div>
              </div>

              {/* Back */}
              <div className="absolute w-full h-full card-face rotate-y-180 bg-gray-100/80 dark:bg-[#112240]/90 backdrop-blur-lg rounded-3xl p-4 sm:p-6 shadow-xl flex flex-col justify-between transition-colors">
                <p className="text-gray-800 dark:text-gray-100 text-sm mb-4 sm:mb-6">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-4 sm:gap-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 sm:gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 transition-colors"
                    >
                      <FaGithub /> Code
                    </a>
                    {project.demo && project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 sm:gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 transition-colors"
                      >
                        <FaExternalLinkAlt /> Live
                      </a>
                    )}
                  </div>
                  <button
                    onClick={() => toggleFlip(i)}
                    className="text-xs px-2 sm:px-3 py-1 rounded-full bg-gray-700 text-white hover:bg-gray-900 dark:bg-gray-600 dark:hover:bg-gray-800 transition"
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
