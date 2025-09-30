import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCredly } from "react-icons/si";

import SpaceBackground from "../components/SpaceBackground";
import CardSpaceBackground from "../components/CardSpaceBackground";

const socials = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/DevaseeshKumar",
    color: "#8b5cf6",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/sonti-devaseesh-kumar-37206627b/",
    color: "#0A66C2",
  },
  {
    name: "Email",
    icon: <MdEmail />,
    link: "mailto:devaseesh.sonti2005@gmail.com",
    color: "#D93025",
  },
  {
    name: "Credly",
    icon: <SiCredly />,
    link: "https://www.credly.com/users/sonti-devaseesh-kumar",
    color: "#1DA1F2",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => window.scrollTo(0, 0), []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Frontend-only FormSubmit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    // Use FormData to send POST request (FormSubmit works only with form-encoded)
    const data = new FormData(form);

    fetch("https://formsubmit.co/thorodinsonuru@gmail.com", {
      method: "POST",
      body: data,
    })
      .then((res) => {
        if (res.ok) {
          toast.success(" Thank you for reaching out!", {
            position: "bottom-right",
            style: { background: "#1e293b", color: "#fff", borderRadius: "8px", padding: "12px 16px" },
          });
          setFormData({ name: "", email: "", message: "" });
        } else {
          toast.error(" Failed to send. Please try again.");
        }
      })
      .catch(() => {
        toast.error(" Something went wrong. Check your connection.");
      });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200 } },
    hover: { scale: 1.05, transition: { type: "spring", stiffness: 250 } },
  };

  return (
    <section className="relative min-h-screen px-6 sm:px-10 md:px-20 py-16 flex justify-center bg-transparent">
      <SpaceBackground />

      <motion.div
        className="relative z-10 w-full max-w-6xl rounded-3xl shadow-2xl border border-white/20 p-8 sm:p-12 md:p-16 flex flex-col gap-12 overflow-hidden bg-black/30 backdrop-blur-lg"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <CardSpaceBackground />

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-center text-gray-900 dark:text-white relative z-10"
          variants={itemVariants}
        >
          Let's{" "}
          <span className="text-indigo-400">
            Connect
          </span>
        </motion.h2>

        <motion.div
          className="w-28 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full animate-pulse mb-12 relative z-10"
          variants={itemVariants}
        />

        <div className="flex flex-col md:flex-row gap-8 relative z-10">
          {/* Socials Card */}
          <motion.div
            className="flex flex-col gap-6 p-6 md:p-8 bg-white/10 dark:bg-black/20 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 dark:border-gray-700 items-center md:items-start"
            variants={itemVariants}
          >
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 md:p-6 rounded-2xl flex items-center justify-center md:justify-start gap-3 w-full transition-all duration-150 cursor-pointer"
                style={{ color: social.color }}
                whileHover={{
                  scale: 1.1,
                  x: 5,
                  boxShadow: `0 0 20px ${social.color}, 0 0 30px ${social.color}40`,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-4xl">{social.icon}</div>
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  {social.name}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex-1 space-y-6 p-6 md:p-8 bg-white/10 dark:bg-black/20 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 dark:border-gray-700"
            variants={itemVariants}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <motion.div variants={itemVariants}>
              <label className="block mb-2 text-gray-800 dark:text-gray-300 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 border rounded-xl shadow-inner focus:ring-2 focus:ring-blue-400 outline-none transition bg-white dark:bg-[#1e293b] dark:border-gray-700 dark:text-white"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block mb-2 text-gray-800 dark:text-gray-300 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@gmail.com"
                className="w-full px-4 py-3 border rounded-xl shadow-inner focus:ring-2 focus:ring-blue-400 outline-none transition bg-white dark:bg-[#1e293b] dark:border-gray-700 dark:text-white"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block mb-2 text-gray-800 dark:text-gray-300 font-semibold">Message</label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full px-4 py-3 border rounded-xl shadow-inner min-h-[150px] resize-none focus:ring-2 focus:ring-blue-400 outline-none transition bg-white dark:bg-[#1e293b] dark:border-gray-700 dark:text-white"
              />
            </motion.div>

            <motion.div className="flex justify-center" variants={itemVariants}>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
              >
                <MdEmail size={20} /> Send Message
              </button>
            </motion.div>
          </motion.form>
        </div>
      </motion.div>

      <ToastContainer />
    </section>
  );
};

export default Contact;
