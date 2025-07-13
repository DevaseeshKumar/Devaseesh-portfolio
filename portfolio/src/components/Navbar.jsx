import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [isDark, setIsDark] = useState(() =>
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDark]);

  return (
    <nav className="bg-white dark:bg-[#0a192f] dark:text-white shadow sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">MyPortfolio</Link>
        </h1>

        <ul className="flex space-x-6 font-medium">
          <li><Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About</Link></li>
          <li><Link to="/projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</Link></li>
          <li><Link to="/skills" className="hover:text-blue-600 dark:hover:text-blue-400">Skills</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</Link></li>
          <li><Link to="/social" className="hover:text-blue-600 dark:hover:text-blue-400">Social</Link></li>
        </ul>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="ml-6 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
