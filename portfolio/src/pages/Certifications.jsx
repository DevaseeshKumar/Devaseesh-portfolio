import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2024",
      link: "https://www.credly.com/badges/c28c36e2-1f17-4baa-a3e2-f6857babf324/public_url",
    },
    {
      title: "Red Hat Certified Enterprise Application Developer",
      issuer: "Red Hat",
      year: "2024",
      link: "https://www.credly.com/badges/ac9bc7ec-e903-4c89-b78b-cedeeee3a636/public_url",
    },
    {
      title: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services",
      year: "2025",
      link: "https://www.credly.com/badges/ba4e3379-bf2b-4b18-83cc-bcad1bd79633/public_url",
    },
    
  ];

  return (
    <section
      id="certifications"
      className="bg-white text-gray-900 dark:bg-[#0a192f] dark:text-white py-20 px-6 md:px-20 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-bold mb-10"
        >
          My{" "}
          <span className="text-blue-600 dark:text-blue-400">
            Certifications
          </span>
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group block p-6 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all bg-gray-50 dark:bg-[#112240] relative overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"></div>

              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 flex items-center justify-center gap-2">
                {cert.title}
                <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="mt-3 text-gray-700 dark:text-gray-300">
                Issued by: <span className="font-medium">{cert.issuer}</span>
              </p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Year: {cert.year}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
