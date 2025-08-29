import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDark, setIsDark] = useState(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <nav className="w-full bg-white dark:bg-[#0a192f] text-gray-900 dark:text-white px-6 py-4 flex justify-between items-center shadow transition-colors duration-300">
      {/* Logo / Brand */}
      <button
  onClick={() => window.location.href = "/"}
  className="text-lg font-bold text-blue-600 hover:text-blue-800 transition-colors"
>
  My Portfolio
</button>



      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        <Link to="/" className="hover:text-blue-500 transition">
          Home
        </Link>
        <Link to="/about" className="hover:text-blue-500 transition">
          About
        </Link>
        <Link to="/projects" className="hover:text-blue-500 transition">
          Projects
        </Link>
        <Link to="/contact" className="hover:text-blue-500 transition">
          Contact
        </Link>

        {/* Theme Toggle Button */}
        <button
          onClick={() => setIsDark((v) => !v)}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          aria-label="Toggle theme"
          title="Toggle theme"
        >
          {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
