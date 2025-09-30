// src/pages/Education.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import SpaceBackground from "../components/SpaceBackground";
import CardSpaceBackground from "../components/CardSpaceBackground";

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    institution: "KL University",
    year: "2022 - 2026",
    status: "Pursuing",
    score: "CGPA: 9.5 / 10",
  },
  {
    degree: "Intermediate (12th Grade)",
    field: "Science (MPC)",
    institution: "Sri Chaitanya Junior College",
    year: "2020 - 2022",
    status: "Completed",
    score: "Percentage: 87%",
  },
  {
    degree: "Schooling (10th Grade)",
    field: "Secondary Education",
    institution: "Bhashyam High School",
    year: "2019 - 2020",
    status: "Completed",
    score: "Percentage: 99%",
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  hover: { scale: 1.03, y: -5, transition: { type: "spring", stiffness: 200 } },
};

const Education = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <section
      id="education"
      className="relative min-h-screen px-6 sm:px-10 md:px-20 py-16 md:py-24 
                 bg-transparent transition-colors duration-500 flex justify-center"
    >
      {/* 🌌 Global Background */}
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
        {/* ✨ Card Background */}
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
              My{" "}
              <span className="text-indigo-400">
                Education
              </span>
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full animate-pulse" />
          </motion.div>

          {/* Education Cards */}
          <div className="flex flex-col gap-8">
            {educationData.map((edu, i) => (
              <motion.div
                key={i}
                className="bg-white/10 dark:bg-black/20 backdrop-blur-lg rounded-2xl 
                           shadow-xl border border-white/20 p-6 sm:p-8 flex flex-col sm:flex-row 
                           sm:items-center sm:justify-between gap-6 cursor-pointer"
                variants={cardVariants}
                whileHover="hover"
              >
                {/* Left side */}
                <div className="flex-1 space-y-1 text-left">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-500 dark:text-blue-400">
                    {edu.degree}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{edu.field}</p>
                  <p className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100">
                    {edu.institution}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{edu.year}</p>
                  <p className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {edu.score}
                  </p>
                </div>

                {/* Status badge */}
                <span
                  className={`px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-md border self-start sm:self-center`}
                  style={{
                    backgroundColor:
                      edu.status === "Completed" ? "rgba(34,197,94,0.2)" : "rgba(234,179,8,0.2)",
                    color: edu.status === "Completed" ? "#22c55e" : "#eab308",
                    borderColor: edu.status === "Completed" ? "#22c55e50" : "#eab30850",
                  }}
                >
                  {edu.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
