import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdEmail } from "react-icons/md"; // Email icon

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
    // Allow FormSubmit to do actual form submit
    toast("Thanks for reaching out! We’ll connect to you soon.", {
      position: "bottom-right",
      style: {
        background: "rgba(0, 0, 0, 0.8)",
        color: "#fff",
        borderRadius: "8px",
        padding: "12px 16px",
      },
    });

    // Reset form fields after delay to ensure FormSubmit gets data
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section
      className="py-20 px-4 bg-white dark:bg-[#0a192f] text-gray-800 dark:text-gray-200 transition-all duration-500"
      id="contact"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Contact <span className="text-blue-600 dark:text-blue-400">Me</span>
        </h2>
        <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-10 rounded-full animate-pulse" />
        <p className="text-lg mb-12 text-gray-700 dark:text-gray-300">
          Have a question, idea, or opportunity? Drop a message below 👇
        </p>

        <form
          onSubmit={handleSubmit}
          action="https://formsubmit.co/thorodinsonuru@gmail.com" // 🔁 Replace with your email
          method="POST"
          className="bg-white dark:bg-[#112240] shadow-xl rounded-xl p-8 space-y-6 text-left"
        >
          {/* Hide CAPTCHA & redirect settings for FormSubmit */}
          <input type="hidden" name="_captcha" value="false" />
          

          <div>
            <label className="block mb-2 text-gray-700 dark:text-gray-300 font-semibold">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition bg-gray-50 dark:bg-[#1e293b] dark:border-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700 dark:text-gray-300 font-semibold">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition bg-gray-50 dark:bg-[#1e293b] dark:border-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700 dark:text-gray-300 font-semibold">
              Your Message
            </label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              className="w-full px-4 py-3 border rounded-lg shadow-sm resize-none min-h-[150px] focus:ring-2 focus:ring-blue-500 outline-none transition bg-gray-50 dark:bg-[#1e293b] dark:border-gray-700 dark:text-white"
            />
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
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
