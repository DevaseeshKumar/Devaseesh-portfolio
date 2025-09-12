import React from "react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering",
      institution: "KL University",
      year: "2022 - 2026",
      status: "Pursuing",
      score: "CGPA: 9.5 / 10",
    },
    {
      degree: "Intermediate (12th Grade)",
      field: "Science (MPC)",
      institution: "Sri Chaitanya Junior College",
      year: "2020 - 2022",
      status: "Completed",
      score: "Percentage: 87%",
    },
    {
      degree: "Schooling (10th Grade)",
      field: "Secondary Education",
      institution: "Bhashyam High School",
      year: "2019 - 2020",
      status: "Completed",
      score: "Percentage: 99%",
    },
  ];

  return (
    <section
      id="education"
      className="relative min-h-screen px-4 overflow-hidden
                 bg-transparent transition-colors duration-500 py-20"
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          My <span className="text-blue-600 dark:text-blue-400">Education</span>
        </h2>
        <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-12 rounded-full animate-pulse" />

        <div className="space-y-8 text-left">
          {education.map((edu, index) => (
            <div
              key={index}
              className="flex justify-between items-center gap-6 p-6 bg-white dark:bg-[#112240] rounded-2xl shadow hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-transform transform hover:scale-105"
            >
              {/* Center: Text Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                  {edu.degree}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{edu.field}</p>
                <p className="text-gray-800 dark:text-gray-100 font-semibold">{edu.institution}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{edu.year}</p>
                <p className="mt-1 text-sm text-gray-800 dark:text-gray-100 font-semibold">{edu.score}</p>
              </div>

              {/* Right: Status Badge */}
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  edu.status === "Completed"
                    ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200"
                    : "bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-200"
                }`}
              >
                {edu.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
