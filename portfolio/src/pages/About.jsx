import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-white text-gray-900 dark:bg-[#0a192f] dark:text-white py-20 px-6 md:px-20 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          About <span className="text-blue-600 dark:text-blue-400">Me</span>
        </h2>
        <p className="text-lg leading-8 text-gray-700 dark:text-gray-300">
          I'm a passionate <span className="font-semibold">DevOps Engineer</span> and{" "}
          <span className="font-semibold">Full Stack Developer</span> who loves
          automating workflows and building scalable, user-focused applications.
          I specialize in integrating modern CI/CD pipelines, developing with React
          and Node.js, and deploying across cloud platforms. My work blends development
          and operations to ensure reliable, efficient software delivery.
        </p>
      </div>
    </section>
  );
};

export default About;
