import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdEmail } from "react-icons/md";

// Social Icons
import Discord from "../components/social/Discord";
import Facebook from "../components/social/Facebook";
import Git from "../components/social/Git";
import Linkedin from "../components/social/Linkedin";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thanks for reaching out! We’ll connect to you soon.", {
      position: "bottom-right",
      style: {
        background: "#1e293b",
        color: "#fff",
        borderRadius: "8px",
        padding: "12px 16px",
      },
    });

    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen px-6 md:px-20 overflow-hidden
                 bg-transparent transition-colors duration-500 py-20"
    >
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold mb-6">
          <span className="text-gray-900 dark:text-white">Let’s</span>{" "}
          <span className="text-blue-600 dark:text-blue-400">Connect</span>
        </h2>
        <div className="w-28 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-12 rounded-full animate-pulse" />
        <p className="text-lg mb-12 text-gray-700 dark:text-gray-300">
          Got a question or proposal? I’d love to hear from you ✨
        </p>

        {/* Social Links */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 mb-16">
          <Git />
          <Linkedin />
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          action="https://formsubmit.co/thorodinsonuru@gmail.com"
          method="POST"
          className="bg-white/80 dark:bg-[#112240]/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-xl rounded-3xl p-8 space-y-6 transition-all duration-500"
        >
          <input type="hidden" name="_captcha" value="false" />

          <div>
            <label className="block mb-2 text-gray-800 dark:text-gray-300 font-semibold">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-4 py-3 border rounded-xl shadow-inner focus:ring-2 focus:ring-blue-400 outline-none transition bg-white dark:bg-[#1e293b] dark:border-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-800 dark:text-gray-300 font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@gmail.com"
              className="w-full px-4 py-3 border rounded-xl shadow-inner focus:ring-2 focus:ring-blue-400 outline-none transition bg-white dark:bg-[#1e293b] dark:border-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-800 dark:text-gray-300 font-semibold">
              Message
            </label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full px-4 py-3 border rounded-xl shadow-inner min-h-[150px] resize-none focus:ring-2 focus:ring-blue-400 outline-none transition bg-white dark:bg-[#1e293b] dark:border-gray-700 dark:text-white"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              <MdEmail size={20} /> Send Message
            </button>
          </div>
        </form>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Contact;
