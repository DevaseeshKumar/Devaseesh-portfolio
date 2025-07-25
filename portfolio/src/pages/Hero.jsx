import React from "react";
import Hero3D from "../components/Hero3D";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section className="bg-white text-gray-900 dark:bg-[#0a192f] dark:text-white min-h-screen flex items-center px-6 md:px-20 transition-colors duration-300">
      

      <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
        {/* LEFT */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Devaseesh
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-semibold text-blue-500 dark:text-blue-300 mb-4">
            <Typewriter
              words={[
                "DevOps Engineer",
                "Full Stack Developer",
                "Cloud Enthusiast",
                "CI/CD Automator",
                "React & Node.js Specialist",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="text-gray-700 dark:text-gray-400 mb-8 max-w-md">
            I automate, build, and scale modern applications across cloud and web platforms. From CI/CD pipelines to responsive React UIs, I blend backend logic with DevOps magic to ship reliable software.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition"
            >
              View Projects
            </a>
            <a
  href="/Devaseesh_Resume.pdf"
  download
  className="border border-blue-500 text-blue-600 dark:text-blue-400 px-6 py-3 rounded hover:bg-blue-500 hover:text-white transition"
>
  Download Resume
</a>
          </div>

          <div className="flex space-x-4 mt-8">
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-400 dark:hover:text-blue-200 text-xl">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-400 dark:hover:text-blue-200 text-xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-400 dark:hover:text-blue-200 text-xl">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-400 dark:hover:text-blue-200 text-xl">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center">
          <div className="relative group">
            <img
              src="/your-image.png"
              alt="Profile"
              className="w-72 h-72 object-cover rounded-full shadow-2xl border-4 border-blue-500 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-600/30 to-transparent rounded-full group-hover:blur-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
