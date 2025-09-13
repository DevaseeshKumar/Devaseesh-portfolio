import React, { useEffect } from "react";
import { motion } from "framer-motion";
import SpaceBackground from "../components/SpaceBackground";

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

// Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200 } },
};

const Education = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.section
      id="education"
      className="relative min-h-screen px-6 md:px-20 flex items-center justify-center bg-transparent py-20 overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <SpaceBackground />

      <div className="relative z-10 max-w-6xl w-full bg-white/10 dark:bg-black/20 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-10 md:p-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-gray-900 dark:text-white tracking-wide">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Education
          </span>
        </h2>

        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-12 rounded-full animate-pulse" />

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="flex justify-between items-center gap-6 p-6 md:p-8 bg-white/10 dark:bg-black/20 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 transition-all duration-150 cursor-pointer"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: `
                  0 0 10px #3b82f6,
                  0 0 20px #3b82f640,
                  0 0 30px #3b82f660,
                  0 0 50px #3b82f680
                `,
              }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="flex-1 text-left">
                <h3 className="text-xl font-semibold text-blue-500 dark:text-blue-400">
                  {edu.degree}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{edu.field}</p>
                <p className="text-gray-900 dark:text-gray-100 font-semibold">{edu.institution}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{edu.year}</p>
                <p className="mt-1 text-sm text-gray-900 dark:text-gray-100 font-semibold">{edu.score}</p>
              </div>

              <span
                className={`px-4 py-1 rounded-full text-sm font-semibold shadow-md border ${
                  edu.status === "Completed"
                    ? "bg-green-500/20 text-green-500 dark:text-green-400 border-green-400/40"
                    : "bg-yellow-500/20 text-yellow-500 dark:text-yellow-400 border-yellow-400/40"
                }`}
              >
                {edu.status}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
