const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-100" id="hero">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm Thor ⚡</h1>
        <p className="text-gray-600 mt-4 text-lg">Frontend Developer | React & Tailwind Enthusiast</p>
        <a href="#projects" className="inline-block mt-6 bg-blue-600 text-white py-2 px-5 rounded-lg hover:bg-blue-700">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
