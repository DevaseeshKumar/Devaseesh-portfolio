const Git = () => {
  return (
    <a
      href="https://github.com/DevaseeshKumar"
      target="_blank"
      rel="noopener noreferrer"
      className="relative bg-white dark:bg-[#0a192f] border border-blue-500/30 
                 rounded-xl p-6 text-center transition-transform transform 
                 hover:-translate-y-3 duration-500 group overflow-hidden 
                 hover:shadow-[0_0_25px_#3b82f6] dark:hover:shadow-[0_0_30px_#60a5fa]"
    >
      {/* Glow effect ring */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />

      {/* Icon */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
        alt="GitHub"
        className="w-20 mx-auto mb-4 transition-transform duration-500 transform group-hover:scale-110 group-hover:rotate-[8deg]"
      />

      {/* Label */}
      <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
        View GitHub
      </p>
    </a>
  );
};

export default Git;
