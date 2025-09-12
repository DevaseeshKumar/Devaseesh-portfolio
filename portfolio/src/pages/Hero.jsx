import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // ✅ React Icons
import profileImage from "../assets/image.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-20 overflow-hidden
                        bg-transparent transition-colors duration-500">
      {/* Hero content */}
      <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto relative z-10">
        
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Hi, I'm{" "}
            <span className="text-blue-600 dark:text-blue-400">Devaseesh</span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-300 mb-4">
            <Typewriter
              words={["DevOps Engineer", "Full Stack Developer", "CI/CD Automator"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-gray-700 dark:text-gray-400 mb-8 max-w-md"
          >
            I automate, build, and scale modern applications across cloud and
            web platforms. From CI/CD pipelines to responsive React UIs, I blend
            backend logic with DevOps magic to ship reliable software.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector("#projects");
                if (target) target.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-blue-600 text-white dark:bg-blue-400 dark:text-black 
                         px-6 py-3 rounded shadow hover:bg-blue-700 dark:hover:bg-blue-500 transition"
            >
              View Projects
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Devaseesh_Kumar_Resume.pdf"
              download
              className="border border-blue-500 dark:border-blue-400 text-blue-600 dark:text-blue-300 
                         px-6 py-3 rounded hover:bg-blue-600 dark:hover:bg-blue-400 
                         hover:text-white dark:hover:text-black transition"
            >
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="flex space-x-6 mt-8 text-2xl"
          >
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="https://github.com/DevaseeshKumar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="https://www.linkedin.com/in/sonti-devaseesh-kumar-37206627b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center relative"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative group"
          >
            <img
              src={profileImage}
              alt="Profile"
              className="w-72 h-72 object-cover rounded-full shadow-2xl 
                         border-4 border-blue-500 dark:border-blue-400
                         transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
