import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaAws, FaRedhat } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import SpaceBackground from "../components/SpaceBackground";
import Particles from "../components/Particles";

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2024",
    link: "https://www.credly.com/badges/c28c36e2-1f17-4baa-a3e2-f6857babf324/public_url",
    icon: <FaAws className="text-orange-400" />,
  },
  {
    title: "Red Hat Certified Enterprise Application Developer",
    issuer: "Red Hat",
    year: "2024",
    link: "https://www.credly.com/badges/ac9bc7ec-e903-4c89-b78b-cedeeee3a636/public_url",
    icon: <FaRedhat className="text-red-600" />,
  },
  {
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    year: "2025",
    link: "https://www.credly.com/badges/ba4e3379-bf2b-4b18-83cc-bcad1bd79633/public_url",
    icon: <FaAws className="text-orange-400" />,
  },
  {
    title: "MongoDB Certified Database Administrator",
    issuer: "MongoDB",
    year: "2025",
    link: "https://www.credly.com/badges/b0c321b1-1f09-45c2-878f-617e05c8b7ec/public_url",
    icon: <SiMongodb className="text-green-500" />,
  },
];

const Certifications = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200 } },
  };

  return (
    <motion.section
      id="certifications"
      className="relative min-h-screen px-6 md:px-20 flex items-center justify-center overflow-hidden py-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <SpaceBackground className="absolute inset-0 z-0" />

      <motion.div
        className="relative z-10 max-w-6xl w-full rounded-3xl shadow-2xl border border-white/10 overflow-hidden"
        variants={containerVariants}
      >
        <Particles count={30} bigCount={8} className="absolute inset-0 z-20 pointer-events-none" />

        <div className="relative z-30 p-10 md:p-16 rounded-3xl bg-white/5 dark:bg-black/20 backdrop-blur-3xl">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-gray-900 dark:text-white tracking-wide"
            variants={cardVariants}
          >
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Certifications
            </span>
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-12 rounded-full animate-pulse"
            variants={cardVariants}
          />

          <motion.div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2" variants={containerVariants}>
            {certifications.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -8 }}
                whileTap={{ scale: 0.97 }}
                className="group relative p-8 rounded-3xl bg-white/20 dark:bg-[#112240]/20
                           shadow-lg border border-white/10 dark:border-gray-700
                           backdrop-blur-md transition-all duration-500
                           hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]
                           dark:hover:shadow-[0_0_25px_rgba(96,165,250,0.7)]"
              >
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 flex items-center justify-center text-6xl rounded-2xl shadow-md">
                    {cert.icon}
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-blue-600 dark:text-blue-400 flex items-center justify-center gap-2 text-center">
                    {cert.title}
                    <ExternalLink className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-12 transition-all duration-300 opacity-70 group-hover:opacity-100" />
                  </h3>

                  <p className="mt-4 text-gray-700 dark:text-gray-300 text-base">
                    Issued by: <span className="font-medium">{cert.issuer}</span>
                  </p>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Year: {cert.year}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Certifications;
