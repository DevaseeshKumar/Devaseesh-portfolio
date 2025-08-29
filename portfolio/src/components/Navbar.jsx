import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

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
    <nav className="w-full bg-white dark:bg-[#0a192f] text-gray-900 dark:text-white px-6 py-4 flex justify-between items-center shadow transition-colors duration-300 fixed top-0 z-50">
      {/* Logo / Brand */}
      <ScrollLink
        to="hero"
        smooth={true}
        duration={600}
        offset={-80}
        className="text-lg font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
      >
        My Portfolio
      </ScrollLink>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        {/* <ScrollLink
          to="hero"
          smooth={true}
          duration={600}
          offset={-80}
          className="hover:text-blue-500 transition cursor-pointer"
        >
          Home
        </ScrollLink> */}

        <ScrollLink
          to="about"
          smooth={true}
          duration={600}
          offset={-80}
          className="hover:text-blue-500 transition cursor-pointer"
        >
          About
        </ScrollLink>

        <ScrollLink
          to="skills"
          smooth={true}
          duration={600}
          offset={-80}
          className="hover:text-blue-500 transition cursor-pointer"
        >
          Skills
        </ScrollLink>

        <ScrollLink
          to="projects"
          smooth={true}
          duration={600}
          offset={-80}
          className="hover:text-blue-500 transition cursor-pointer"
        >
          Projects
        </ScrollLink>

        <ScrollLink
          to="certifications"
          smooth={true}
          duration={600}
          offset={-80}
          className="hover:text-blue-500 transition cursor-pointer"
        >
          Certifications
        </ScrollLink>
        <ScrollLink
          to="social"
          smooth={true}
          duration={600}
          offset={-80}
          className="hover:text-blue-500 transition cursor-pointer"
        >
          Social
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={600}
          offset={-80}
          className="hover:text-blue-500 transition cursor-pointer"
        >
          Contact
        </ScrollLink>

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
