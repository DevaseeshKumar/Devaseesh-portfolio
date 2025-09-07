import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import awsLogo from "../assets/aws.png";
import redhatLogo from "../assets/redhat.png";

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2024",
      link: "https://www.credly.com/badges/c28c36e2-1f17-4baa-a3e2-f6857babf324/public_url",
      icon: awsLogo,
    },
    {
      title: "Red Hat Certified Enterprise Application Developer",
      issuer: "Red Hat",
      year: "2024",
      link: "https://www.credly.com/badges/ac9bc7ec-e903-4c89-b78b-cedeeee3a636/public_url",
      icon: redhatLogo,
    },
    {
      title: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services",
      year: "2025",
      link: "https://www.credly.com/badges/ba4e3379-bf2b-4b18-83cc-bcad1bd79633/public_url",
      icon: awsLogo,
    },
  ];

  return (
    <section
      id="certifications"
      className="py-20 px-6 md:px-20 bg-white dark:bg-[#0a192f] 
                 text-gray-800 dark:text-gray-200 transition-all duration-500"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-bold mb-6"
        >
          My{" "}
          <span className="text-blue-600 dark:text-blue-400">
            Certifications
          </span>
        </motion.h2>
        <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-12 rounded-full animate-pulse" />

        {/* Cards Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.a
  key={index}
  href={cert.link}
  target="_blank"
  rel="noopener noreferrer"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: index * 0.2 }}
  whileHover={{ scale: 1.05, y: -8 }}
  whileTap={{ scale: 0.97 }}
  className="group relative p-8 rounded-3xl bg-white/80 dark:bg-[#112240]/80 
            shadow-lg border border-gray-200 dark:border-gray-700 
            backdrop-blur-md transition-all duration-500
            hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] 
            dark:hover:shadow-[0_0_25px_rgba(96,165,250,0.7)]"
>

              <div className="flex flex-col items-center">
                {/* Logo with rounded corners */}
                <motion.img
                  src={cert.icon}
                  alt={`${cert.issuer} logo`}
                  className="w-24 h-24 object-contain rounded-2xl shadow-md"
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 200, damping: 12 }}
                />

                <h3 className="mt-6 text-lg font-semibold text-blue-600 dark:text-blue-400 
                               flex items-center justify-center gap-2 text-center">
                  {cert.title}
                  <ExternalLink className="w-5 h-5 transform 
                                           group-hover:translate-x-1 group-hover:-translate-y-1 
                                           group-hover:rotate-12 transition-all duration-300 
                                           opacity-70 group-hover:opacity-100" />
                </h3>

                <p className="mt-4 text-gray-700 dark:text-gray-300 text-base">
                  Issued by:{" "}
                  <span className="font-medium">{cert.issuer}</span>
                </p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Year: {cert.year}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
