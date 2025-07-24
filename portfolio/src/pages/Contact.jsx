import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdEmail } from "react-icons/md";

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
      className="min-h-screen py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-[#0a192f] dark:via-[#0a192f] dark:to-[#0f172a] transition-all duration-500"
      id="contact"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-4 text-gray-800 dark:text-white">
          Let’s <span className="text-blue-600 dark:text-blue-400">Connect</span>
        </h2>
        <div className="w-28 h-1 bg-blue-500 mx-auto mb-8 rounded-full animate-pulse" />
        <p className="text-lg mb-12 text-gray-600 dark:text-gray-300">
          Got a question or proposal? I’d love to hear from you ✨
        </p>

        <form
          onSubmit={handleSubmit}
          action="https://formsubmit.co/thorodinsonuru@gmail.com"
          method="POST"
          className="bg-white/60 dark:bg-[#112240]/60 backdrop-blur-xl border border-gray-200 dark:border-gray-700 shadow-2xl rounded-2xl p-8 space-y-6 max-w-2xl mx-auto text-left"
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

          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full md:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
          >
            <MdEmail size={20} /> Send Message
          </button>
        </form>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Contact;
