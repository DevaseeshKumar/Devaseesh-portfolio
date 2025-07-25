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
} from "react-icons/si";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// Project Data
const projects = [
  {
    title: "CI/CD Pipeline with Jenkins & Docker",
    role: "DevOps",
    description:
      "Built a complete CI/CD pipeline using Jenkins, Docker, GitHub Webhooks, and Nginx for automated deployment.",
    shortDescription:
      "CI/CD pipeline for automated builds and deployment using Jenkins and Docker.",
    duration: "Feb 2024 – Apr 2024",
    stack: [<SiJenkins key="jenkins" />, <SiDocker key="docker" />],
    demo: "#",
    github: "https://github.com/DevaseeshKumar/ReactSpring",
  },
  {
    title: "Employee Leave Management System",
    role: "Full Stack",
    description:
      "Full-stack MERN app with admin/employee roles, leave requests, email notifications, and secure auth.",
    shortDescription:
      "Role-based leave management app using MERN stack with email alerts.",
    duration: "Jan 2024 – Mar 2024",
    stack: [
      <SiReact key="react" />,
      <SiNodedotjs key="node" />,
      <SiMongodb key="mongo" />,
    ],
    demo: "http://employeeleavemanagementsys.netlify.app/",
    github: "https://github.com/DevaseeshKumar/ELMS",
  },
  {
    title: "Event Management Portal (Spring Boot)",
    role: "Full Stack",
    description:
      "Backend system for admin/faculty/student roles, event assignment, and email notifications.",
    shortDescription:
      "Spring Boot backend for managing student event workflows and notifications.",
    duration: "Mar 2024 – May 2024",
    stack: [<SiSpringboot key="springboot" />],
    demo: "#",
    github: "https://github.com/DevaseeshKumar/SDP-27-StudentActivityPortal",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const filteredProjects = projects.filter(
    (proj) => filter === "All" || proj.role === filter
  );

  return (
    <section
      id="projects"
      className="py-12 px-4 md:px-12 bg-gray-100 dark:bg-[#0a192f]"
    >
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        Projects
      </h2>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-4 mb-10">
        {["All", "DevOps", "Full Stack"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 ${
              filter === category
                ? "bg-blue-600 text-white"
                : "bg-gray-300 dark:bg-blue-900 text-gray-800 dark:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, i) => (
          <div
            key={i}
            data-aos="fade-up"
            className="relative w-full h-80 [perspective:1000px]"
          >
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group hover:[transform:rotateY(180deg)]">
              {/* Front */}
              <div className="absolute w-full h-full backface-hidden bg-white dark:bg-[#0a192f] rounded-2xl p-6 shadow-lg border border-blue-500 flex flex-col justify-between">
                {/* Top */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
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

                {/* Bottom */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex gap-4 text-4xl text-blue-600 dark:text-blue-400">
                    {project.stack.map((icon, idx) => (
                      <span key={idx} title={icon.type.name}>
                        {icon}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 italic dark:text-gray-400 animate-pulse">
                    
                  </span>
                </div>
              </div>

              {/* Back */}
              <div className="absolute w-full h-full backface-hidden transform rotate-y-180 bg-gray-100 dark:bg-[#112240] rounded-2xl p-6 shadow-lg text-left">
                <p className="text-gray-800 dark:text-gray-200 text-sm mb-6">
                  {project.description}
                </p>
                <div className="flex gap-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 transition-colors"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200 transition-colors"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
