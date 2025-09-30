import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaAws, FaRedhat } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import SpaceBackground from "../components/SpaceBackground";
import CardSpaceBackground from "../components/CardSpaceBackground"; // 👈 like About page


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

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const certVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  hover: { scale: 1.05, y: -5, transition: { type: "spring", stiffness: 250 } },
};

const Certifications = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <section className="relative min-h-screen px-6 sm:px-10 md:px-20 py-16 flex justify-center bg-transparent">
      {/* Global space background */}
      <SpaceBackground />

      {/* Big blurred parent card */}
      <motion.div
        className="relative z-10 w-full max-w-6xl rounded-3xl shadow-2xl border border-white/20 p-8 sm:p-12 md:p-16 flex flex-col gap-12 overflow-hidden bg-black/30 backdrop-blur-lg"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Card-specific animated space background */}
        <CardSpaceBackground />

        
        {/* Title */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-center text-gray-900 dark:text-white relative z-10"
          variants={cardVariants}
        >
          My{" "}
          <span className="text-indigo-400">
            Certifications
          </span>
        </motion.h2>

        {/* Certifications Grid */}
        <motion.div className="grid gap-8 md:grid-cols-2 relative z-10">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-8 rounded-3xl bg-white/10 dark:bg-black/20
                         shadow-xl border border-white/20 dark:border-gray-700
                         backdrop-blur-lg transition-all duration-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]
                         dark:hover:shadow-[0_0_25px_rgba(96,165,250,0.7)] flex flex-col items-center"
              variants={certVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: false, amount: 0.2 }}
            >
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
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Certifications;
