const Projects = () => {
  const projectList = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built using React and Tailwind CSS with animated sections.",
      link: "#",
    },
    {
      title: "Task Manager",
      description: "A simple productivity tool to manage daily tasks with status updates.",
      link: "#",
    },
    {
      title: "WeatherNow",
      description: "A weather forecast app using OpenWeather API with dynamic UI.",
      link: "#",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-[#0a192f] text-gray-800 dark:text-gray-200 transition-all duration-500">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          My <span className="text-blue-600 dark:text-blue-400">Projects</span>
        </h2>

        <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-12 rounded-full animate-pulse" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#112240] p-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-500 dark:text-blue-400 font-medium hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
