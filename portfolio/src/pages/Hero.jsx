const Hero = () => {
  return (
    <section className="bg-white text-gray-900 dark:bg-[#0a192f] dark:text-white min-h-screen flex items-center px-6 md:px-20 transition-colors duration-300">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
        {/* LEFT */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Thor Odinson</span>
          </h1>
          <h2 className="text-xl sm:text-2xl text-blue-500 dark:text-blue-300 font-medium mb-6">
            Frontend Developer
          </h2>
          <p className="text-gray-700 dark:text-gray-400 mb-8 max-w-md">
            I design and develop modern, responsive, and fast user interfaces using React, Tailwind, and cutting-edge technologies. Let's build something amazing!
          </p>

          <div className="flex gap-4">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition"
            >
              Hire Me
            </a>
            <a
              href="#contact"
              className="border border-blue-500 text-blue-600 dark:text-blue-400 px-6 py-3 rounded hover:bg-blue-500 hover:text-white transition"
            >
              Let's Talk
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
