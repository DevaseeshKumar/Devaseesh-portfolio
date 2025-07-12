const ThankYou = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-white px-4 text-center">
      <div className="animate-fade-in-up">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Thank You! 🙌</h1>
        <p className="text-gray-700 text-lg">
          Your message has been sent successfully. I’ll get back to you soon!
        </p>
        <a
          href="/"
          className="inline-block mt-6 text-blue-600 hover:underline font-semibold"
        >
          ← Back to Home
        </a>
      </div>
    </section>
  );
};

export default ThankYou;
