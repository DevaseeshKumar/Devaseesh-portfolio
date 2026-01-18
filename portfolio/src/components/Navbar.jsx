import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

import {
  FaHome,
  FaUser,
  FaGraduationCap,
  FaProjectDiagram,
  FaLaptopCode,
} from "react-icons/fa";
import { GiDiploma } from "react-icons/gi";
import { MdEmail } from "react-icons/md";

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

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const navLinks = [
    { to: "hero", label: "Home", icon: <FaHome /> },
    { to: "about", label: "About", icon: <FaUser /> },
    { to: "education", label: "Education", icon: <FaGraduationCap /> },
    { to: "skills", label: "Skills", icon: <FaLaptopCode /> },
    { to: "projects", label: "Projects", icon: <FaProjectDiagram /> },
    { to: "certifications", label: "Certifications", icon: <GiDiploma /> },
    { to: "contact", label: "Contact", icon: <MdEmail /> },
    // { to: "hero", icon: <FaHome /> },
    // { to: "about", icon: <FaUser /> },
    // { to: "education", icon: <FaGraduationCap /> },
    // { to: "skills", icon: <FaLaptopCode /> },
    // { to: "projects", icon: <FaProjectDiagram /> },
    // { to: "certifications", icon: <GiDiploma /> },
    // { to: "contact", icon: <MdEmail /> },
  ];

  return (
    <nav
      className={`w-full fixed top-0 z-50 px-6 py-4 flex justify-between items-center
                 transition-all duration-500 ease-in-out border-b
                 shadow-lg
                 ${
                   isDark
                     ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-blue-500/20 shadow-blue-500/20"
                     : "bg-gradient-to-r from-white via-gray-100 to-white border-gray-200 shadow-gray-200/30"
                 }`}
    >
      {/* Logo */}
      <ScrollLink
        to="hero"
        smooth={true}
        duration={600}
        offset={-70}
        className={`cursor-pointer text-lg md:text-xl font-extrabold tracking-wide flex items-center gap-2 transition-colors duration-300
          ${isDark ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-500"}`}
      >
        My Portfolio
      </ScrollLink>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map(({ to, label, icon }) => (
          <ScrollLink
            key={to}
            to={to}
            smooth={true}
            duration={600}
            offset={-70}
            spy={true}
            className={`cursor-pointer flex items-center gap-2 text-lg transition-colors transition-transform duration-300 ease-in-out hover:scale-105
              ${isDark ? "text-gray-200 hover:text-blue-400" : "text-gray-800 hover:text-blue-600"}`}
            activeClass="text-blue-400"
          >
            <span className="text-xl">{icon}</span>
            <span>{label}</span>
          </ScrollLink>
        ))}

        {/* Theme Toggle */}
        <button
          onClick={() => setIsDark((v) => !v)}
          className="p-2 rounded-full hover:bg-blue-500/20 transition-colors transition-transform duration-300 ease-in-out"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun className="w-6 h-6 text-yellow-400" />
          ) : (
            <Moon className="w-6 h-6 text-blue-500" />
          )}
        </button>
      </div>

      {/* Mobile Buttons */}
      <div className="md:hidden flex items-center gap-2">
        <button
          onClick={() => setIsDark((v) => !v)}
          className="p-2 rounded-full hover:bg-blue-500/20 transition-colors transition-transform duration-300 ease-in-out"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun className="w-6 h-6 text-yellow-400" />
          ) : (
            <Moon className="w-6 h-6 text-blue-500" />
          )}
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-md hover:bg-blue-500/20 transition-colors transition-transform duration-300 ease-in-out"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-gray-200 dark:text-white" />
          ) : (
            <Menu className="w-6 h-6 text-gray-200 dark:text-white" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {/* Mobile Dropdown */}
<div
  className={`fixed top-16 left-0 w-full py-6 space-y-6 flex flex-col items-center md:hidden
             transform transition-all duration-500 ease-in-out z-40
             ${
               menuOpen
                 ? "opacity-100 scale-100"
                 : "opacity-0 scale-95 pointer-events-none"
             }
             ${
               isDark
                 ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 border-t border-blue-500/20 shadow-blue-500/20"
                 : "bg-gradient-to-b from-white via-gray-100 to-white border-t border-gray-200 shadow-gray-200/30"
             }`}
>

        {navLinks.map(({ to, label, icon }) => (
          <ScrollLink
            key={to}
            to={to}
            smooth={true}
            duration={600}
            offset={-70}
            spy={true}
            className={`cursor-pointer flex items-center gap-2 text-lg transition-colors transition-transform duration-300 ease-in-out
              ${isDark ? "text-gray-200 hover:text-blue-400" : "text-gray-800 hover:text-blue-600"}`}
            activeClass="text-blue-400"
            onClick={() => setMenuOpen(false)}
          >
            <span className="text-xl">{icon}</span>
            <span>{label}</span>
          </ScrollLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
