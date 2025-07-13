const About = () => {
  return (
    <section className="py-20 px-4 bg-white dark:bg-[#0a192f] text-gray-800 dark:text-gray-200 transition-all duration-500">

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          About <span className="text-blue-600 dark:text-blue-400">Me</span>
        </h2>

        <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8 rounded-full animate-pulse" />

        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          I'm a creative and detail-oriented{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            Frontend Developer
          </span>{" "}
          with a passion for crafting clean, modern user experiences. My toolkit includes{" "}
          <strong>React</strong>, <strong>Tailwind CSS</strong>, <strong>JavaScript</strong>, and
          more. I focus on writing accessible, efficient, and responsive UI code that delivers real value.
        </p>
      </div>
    </section>
  );
};

export default About;
