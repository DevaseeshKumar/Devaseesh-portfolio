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
    <section className="py-20 bg-gray-100 px-6 animate-fade-in-up">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-2"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a href={project.link} className="text-blue-500 font-medium hover:underline">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
