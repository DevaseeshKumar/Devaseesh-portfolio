const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 to-white px-6 animate-fade-in-up" id="contact">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          Contact <span className="text-blue-600">Me</span>
        </h2>

        <p className="text-center text-gray-600 mb-12 text-lg">
          Have a question, idea, or opportunity? Drop a message below 👇
        </p>

        <form
          action="https://formsubmit.co/thorodinsonuru@gmail.com"
          method="POST"
          className="bg-white shadow-xl rounded-xl p-8 space-y-6"
        >
          <input type="hidden" name="_captcha" value="false" />
          <div>
            <label className="block mb-2 text-gray-700 font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700 font-medium">Your Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700 font-medium">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Your message..."
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Contact;
