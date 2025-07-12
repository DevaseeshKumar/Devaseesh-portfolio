const Linkedin = () => {
  return (
    <a
      href="https://linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white shadow-md p-6 rounded-lg text-center hover:shadow-xl transition transform hover:-translate-y-2 duration-300 group"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
        alt="LinkedIn"
        className="w-16 mx-auto mb-4 group-hover:scale-110 transition duration-300"
      />
      <p className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">
        Connect on LinkedIn
      </p>
    </a>
  );
};

export default Linkedin;
