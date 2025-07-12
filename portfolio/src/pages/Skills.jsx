const Skills = () => {
  const skills = ["React", "Tailwind CSS", "JavaScript", "Git & GitHub", "Figma", "Responsive Design"];

  return (
    <section className="py-20 bg-white text-center px-6 animate-fade-in">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="bg-blue-100 text-blue-800 px-5 py-2 rounded-full shadow hover:bg-blue-200 transition text-lg font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};
export default Skills;
