const Contact = () => {
  return (
    <section
      className="py-20 px-6 bg-gradient-to-br from-gray-100 to-white animate-fade-in-up"
      id="contact"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
          Contact <span className="text-blue-600">Me</span>
        </h2>

        <p className="text-center text-gray-600 mb-12 text-lg">
          Have a question, idea, or opportunity? Drop a message below 👇
        </p>

        <form
          action="https://formsubmit.co/thorodinsonuru@gmail.com"
          method="POST"
          className="bg-white shadow-xl rounded-xl p-8 space-y-6 transition-all"
        >
          {/* Success redirect */}
          <input type="hidden" name="_next" value="https://devaseesh.netlify.app/thank-you" />

          {/* Disable CAPTCHA */}
          <input type="hidden" name="_captcha" value="false" />

          {/* Honeypot */}
          <input type="text" name="_honey" className="hidden" />

          <div>
            <label className="block mb-2 text-gray-700 font-semibold">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700 font-semibold">Your Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700 font-semibold">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
              placeholder="Your message..."
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1"
            >
              🚀 Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
