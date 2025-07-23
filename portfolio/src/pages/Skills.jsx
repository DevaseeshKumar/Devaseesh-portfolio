const Skills = () => {
  const skills = ["React", "Tailwind CSS", "JavaScript", "Git & GitHub", "Figma", "Responsive Design"];

  return (
    <section className="py-20 px-4 bg-white dark:bg-[#0a192f] text-gray-800 dark:text-gray-200 transition-all duration-500">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          My <span className="text-blue-600 dark:text-blue-400">Skills</span>
        </h2>
        <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-10 rounded-full animate-pulse" />

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="bg-blue-100 dark:bg-[#1e3a8a] text-blue-800 dark:text-blue-100 px-5 py-2 rounded-full shadow transition text-lg font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
