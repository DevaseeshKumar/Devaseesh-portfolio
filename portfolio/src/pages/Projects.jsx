// src/pages/Projects.jsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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

// Project Data
const projects = [
  {
    title: "Leavo",
    role: "Full Stack",
    description:
      "Full-stack MERN application with admin/employee roles, leave requests, email notifications, and secure authentication.",
    shortDescription:
      "Role-based leave management app using MERN stack with email alerts.",
    duration: "Jan 2024 – Mar 2024",
    stack: [
      <SiReact key="react" />,
      <SiNodedotjs key="node" />,
      <SiMongodb key="mongo" />,
    ],
    demo: "https://leavo.netlify.app/",
    github: "https://github.com/DevaseeshKumar/ELMS",
  },
  {
    title: "Student Activity Portal",
    role: "Full Stack",
    description:
      "Spring Boot backend system for managing student events, faculty assignments, and automated email notifications.",
    shortDescription:
      "Backend system for student event management with faculty assignment.",
    duration: "Mar 2024 – May 2024",
    stack: [
      <SiReact key="react" />,
      <SiSpringboot key="springboot" />,
      <SiMysql key="mysql" />,
    ],
    demo: "https://studentactportal.netlify.app/",
    github: "https://github.com/DevaseeshKumar/SDP-27-StudentActivityPortal",
  },
  {
    title: "LEAVO Deployment with Docker & Jenkins",
    role: "DevOps",
    description:
      "Deployed the LEAVO Employee Leave Management System on Docker using Jenkins CI/CD pipeline with automated builds and deployments.",
    shortDescription:
      "CI/CD deployment of LEAVO MERN app using Jenkins and Docker.",
    duration: "Apr 2025 – Aug 2025",
    stack: [
      <SiJenkins key="jenkins" />,
      <SiDocker key="docker" />,
      <SiReact key="react" />,
      <SiNodedotjs key="node" />,
      <SiMongodb key="mongo" />,
    ],
    demo: "https://leavo.netlify.app/",
    github: "https://github.com/DevaseeshKumar/ELMS-DevOps",
  },
  {
    title: "React + Spring Boot CI/CD Demo",
    role: "DevOps",
    description:
      "Demo project showcasing CI/CD pipeline using Jenkins and Docker with a React frontend and Spring Boot backend.",
    shortDescription:
      "Demo CI/CD pipeline for React + Spring Boot using Jenkins and Docker.",
    duration: "Apr 2025 – Aug 2025",
    stack: [
      <SiJenkins key="jenkins2" />,
      <SiDocker key="docker2" />,
      <SiReact key="react" />,
      <SiSpringboot key="springboot" />,
      <SiMysql key="mysql" />,
    ],
    demo: "#",
    github: "https://github.com/DevaseeshKumar/ReactSpring",
  },
  {
    title: "WeatherNow",
    role: "Frontend",
    description:
      "React + Vite + Tailwind project fetching current weather and forecast data using the OpenWeather API. No backend required.",
    shortDescription:
      "Weather app showing current conditions and forecast using OpenWeather API.",
    duration: "Jul 2025",
    stack: [<SiReact key="react-weather" />],
    demo: "https://weathernowgg.netlify.app/",
    github: "https://github.com/DevaseeshKumar/WeatherNow",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [flipped, setFlipped] = useState({});
  const [tilt, setTilt] = useState({});

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const filteredProjects = projects.filter(
    (proj) => filter === "All" || proj.role === filter
  );

  const toggleFlip = (i) => {
    setFlipped((prev) => ({ ...prev, [i]: !prev[i] }));
  };

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

  const resetTilt = (i) => {
    setTilt((prev) => ({ ...prev, [i]: "rotateX(0deg) rotateY(0deg)" }));
  };

  return (
    <section
      id="projects"
      className="py-16 px-4 md:px-12 bg-gray-100 dark:bg-[#0a192f]"
    >
      <h2 className="text-5xl font-extrabold text-center mb-12 text-indigo-600 dark:text-indigo-400">
        Projects
      </h2>

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
          <div
            key={i}
            data-aos="zoom-in"
            onMouseMove={(e) => handleMouseMove(e, i)}
            onMouseLeave={() => resetTilt(i)}
            style={{ transform: tilt[i], transition: "transform 0.2s ease-out" }}
            className="relative w-full h-96 [perspective:1000px] rounded-3xl group"
          >
            {/* Glow Border */}
            <div className="absolute inset-0 rounded-3xl bg-indigo-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

            {/* Card Inner */}
            <div
              className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                flipped[i] ? "[transform:rotateY(180deg)]" : ""
              }`}
            >
              {/* Front */}
              <div className="absolute w-full h-full card-face bg-white/90 dark:bg-[#0a192f]/90 backdrop-blur-md 
                              rounded-3xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 
                              flex flex-col justify-between group-hover:scale-[1.02] transition-transform">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm italic text-gray-500 dark:text-gray-300 mb-2">
                    Role: {project.role}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-400 mb-4">
                    {project.duration}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-200 line-clamp-3">
                    {project.shortDescription}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex gap-4 text-4xl text-indigo-600 dark:text-indigo-400">
                    {project.stack.map((icon, idx) => (
                      <span
                        key={idx}
                        className="hover:scale-125 hover:text-indigo-700 dark:hover:text-indigo-300 transform transition-all duration-300"
                        title={icon.type.name}
                      >
                        {icon}
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
              <div className="absolute w-full h-full card-face rotate-y-180 
                              bg-gray-100/90 dark:bg-[#112240]/90 backdrop-blur-md rounded-3xl p-6 shadow-lg 
                              text-left flex flex-col justify-between">
                <p className="text-gray-800 dark:text-gray-200 text-sm mb-6">
                  {project.description}
                </p>
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
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200 transition-colors"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
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
          </div>
        ))}
      </div>
    </section>
  );
}
