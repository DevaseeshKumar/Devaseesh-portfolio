import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Space & Particles
import SpaceBackground from "../components/SpaceBackground";
import Particles from "../components/Particles";

const socials = [
  { name: "GitHub", icon: <FaGithub />, link: "https://github.com/DevaseeshKumar", color: "#8b5cf6" },
  { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/sonti-devaseesh-kumar-37206627b/", color: "#0A66C2" },
  { name: "Email", icon: <MdEmail />, link: "mailto:devaseesh.sonti2005@gmail.com", color: "#D93025" },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => window.scrollTo(0, 0), []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thanks for reaching out! We’ll connect with you soon.", {
      position: "bottom-right",
      style: { background: "#1e293b", color: "#fff", borderRadius: "8px", padding: "12px 16px" },
    });
    setTimeout(() => setFormData({ name: "", email: "", message: "" }), 1000);
  };

  const containerVariants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } } };
  const itemVariants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200 } } };

  return (
    <motion.section
      id="contact"
      className="relative min-h-screen px-6 md:px-20 flex items-center justify-center overflow-hidden py-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <SpaceBackground className="absolute inset-0 z-0" />

      <motion.div
        className="relative z-10 w-full max-w-6xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden p-6 md:p-10"
        variants={containerVariants}
      >
        <Particles count={20} bigCount={5} className="absolute inset-0 z-0 pointer-events-none opacity-30" />

        <motion.div className="relative z-10 bg-white/10 dark:bg-black/20 backdrop-blur-3xl rounded-3xl p-10 md:p-16 space-y-8" variants={containerVariants}>
          {/* Section Heading */}
          <motion.h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-gray-900 dark:text-white tracking-wide" variants={itemVariants}>
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Connect
            </span>
          </motion.h2>

          <motion.div className="w-28 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full animate-pulse mb-12" variants={itemVariants} />

          {/* Side by side cards */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left: Social Icons Vertical */}
            <motion.div
              className="flex flex-col gap-6 p-6 md:p-8 bg-white/20 dark:bg-[#112240]/20 backdrop-blur-md rounded-3xl shadow-lg border border-white/10 dark:border-gray-700 items-center md:items-start"
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
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">{social.name}</span>
                </motion.a>
              ))}
            </motion.div>

            {/* Right: Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              action="https://formsubmit.co/thorodinsonuru@gmail.com"
              method="POST"
              className="flex-1 space-y-6 p-6 md:p-8 bg-white/20 dark:bg-[#112240]/20 backdrop-blur-md rounded-3xl shadow-lg border border-white/10 dark:border-gray-700"
              variants={itemVariants}
            >
              <input type="hidden" name="_captcha" value="false" />

              {["name", "email"].map((field, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <label className="block mb-2 text-gray-800 dark:text-gray-300 font-semibold">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    required
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder={field === "email" ? "you@gmail.com" : "Your name"}
                    className="w-full px-4 py-3 border rounded-xl shadow-inner focus:ring-2 focus:ring-blue-400 outline-none transition bg-white dark:bg-[#1e293b] dark:border-gray-700 dark:text-white"
                  />
                </motion.div>
              ))}

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
      </motion.div>

      <ToastContainer />
    </motion.section>
  );
};

export default Contact;
