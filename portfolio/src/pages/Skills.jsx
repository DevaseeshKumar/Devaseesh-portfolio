import { FaReact, FaNodeJs, FaDocker, FaAws, FaLinux, FaGithub, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiMysql, SiExpress, SiSpringboot, SiJenkins } from "react-icons/si";

const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "JavaScript", icon: <FaJs /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "Spring Boot", icon: <SiSpringboot /> },
      ],
    },
    {
      title: "DevOps",
      skills: [
        { name: "Docker", icon: <FaDocker /> },
        { name: "Jenkins", icon: <SiJenkins /> },
        { name: "AWS", icon: <FaAws /> },
        { name: "GitHub Actions", icon: <FaGithub /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Linux", icon: <FaLinux /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 bg-white dark:bg-[#0a192f] text-gray-800 dark:text-gray-200 transition-all duration-500"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Tech <span className="text-blue-600 dark:text-blue-400">Stack</span>
        </h2>
        <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-12 rounded-full animate-pulse" />

        <div className="grid md:grid-cols-2 gap-10 text-left">
          {categories.map((category, i) => (
            <div key={i}>
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, j) => (
                  <div
                    key={j}
                    className="flex items-center gap-2 bg-blue-100 dark:bg-[#1e3a8a] text-blue-800 dark:text-blue-100 px-4 py-2 rounded-full shadow transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.8)]"
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
