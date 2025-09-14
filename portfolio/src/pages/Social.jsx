import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiCredly } from "react-icons/si";
import SpaceBackground from "../components/SpaceBackground";


const socials = [
  {
    name: "GitHub",
    icon: <FaGithub className="text-gray-900 dark:text-white" />,
    link: "https://github.com/DevaseeshKumar",
    color: "#8b5cf6",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin className="text-blue-600" />,
    link: "https://www.linkedin.com/in/sonti-devaseesh-kumar-37206627b/",
    color: "#0A66C2",
  },
  {
    name: "Email",
    icon: <FaEnvelope className="text-red-500" />,
    link: "mailto:devaseesh.sonti2005@gmail.com",
    color: "#D93025",
  },
  {
    name: "Credly",
    icon: <SiCredly className="text-blue-400" />,
    link: "https://www.credly.com/users/sonti-devaseesh-kumar",
    color: "#1DA1F2",
  },
];

const Social = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200 } },
  };

  return (
    <motion.section
      id="social"
      className="relative min-h-screen px-6 md:px-20 flex items-center justify-center overflow-hidden py-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Space Background */}
      <SpaceBackground className="absolute inset-0 z-0" />

      <motion.div
        className="relative z-10 max-w-6xl w-full rounded-3xl shadow-2xl border border-white/10 overflow-hidden"
        variants={containerVariants}
      >


        {/* Card Content */}
        <div className="relative z-10 p-10 md:p-16 rounded-3xl bg-white/5 dark:bg-black/20 backdrop-blur-3xl">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-gray-900 dark:text-white tracking-wide"
            variants={cardVariants}
          >
            Connect{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              With Me
            </span>
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-10 rounded-full animate-pulse"
            variants={cardVariants}
          />

          <motion.p
            className="text-lg mb-12 text-gray-700 dark:text-gray-300 text-center"
            variants={cardVariants}
          >
            You can find me on these platforms:
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 rounded-3xl bg-white/20 dark:bg-[#112240]/20 shadow-lg border border-white/10 dark:border-gray-700 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-500"
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  boxShadow: `0 0 20px ${social.color}, 0 0 40px ${social.color}40, 0 0 60px ${social.color}60`,
                }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="text-6xl">{social.icon}</div>
                <span className="mt-4 font-semibold text-gray-900 dark:text-white text-lg">{social.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Social;
