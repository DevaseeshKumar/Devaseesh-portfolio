import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";

// React icons
import {
  FaHome,
  FaUser,
  FaGraduationCap,
  FaProjectDiagram,
  FaLaptopCode,
  FaUsers,
} from "react-icons/fa";
import { GiDiploma } from "react-icons/gi"; // Correct import for GiDiploma
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
  const location = useLocation();

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
    { to: "/", label: "Home", icon: <FaHome /> },
    { to: "/about", label: "About", icon: <FaUser /> },
    { to: "/education", label: "Education", icon: <FaGraduationCap /> },
    { to: "/projects", label: "Projects", icon: <FaProjectDiagram /> },
    { to: "/skills", label: "Skills", icon: <FaLaptopCode /> },
    { to: "/certifications", label: "Certifications", icon: <GiDiploma /> },
    { to: "/social", label: "Social", icon: <FaUsers /> },
    { to: "/contact", label: "Contact", icon: <MdEmail /> },
  ];

  return (
    <nav className="w-full fixed top-0 z-50 px-6 py-4 flex justify-between items-center
                    bg-gradient-to-r from-[#050816]/90 via-[#0a192f]/80 to-[#1b2735]/90
                    backdrop-blur-md border-b border-blue-500/20 shadow-lg shadow-blue-500/20
                    transition-all duration-500">

      {/* Logo */}
      <Link
        to="/"
        className="text-lg md:text-xl font-extrabold text-blue-400
                   tracking-wide hover:text-blue-300 transition-colors flex items-center gap-2"
      >
        
        My Portfolio
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map(({ to, label, icon }) => (
          <Link
            key={to}
            to={to}
            className={`flex items-center gap-2 text-lg transition-colors 
              ${location.pathname === to ? "text-blue-400" : "text-gray-200 hover:text-blue-400"}
              hover:scale-105`}
          >
            <span className="text-xl">{icon}</span>
            <span>{label}</span>
          </Link>
        ))}

        {/* Theme Toggle */}
        <button
          onClick={() => setIsDark((v) => !v)}
          className="p-2 rounded-full hover:bg-blue-500/20 transition"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun className="w-6 h-6 text-yellow-400" />
          ) : (
            <Moon className="w-6 h-6 text-blue-400" />
          )}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-2">
        <button
          onClick={() => setIsDark((v) => !v)}
          className="p-2 rounded-full hover:bg-blue-500/20 transition"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun className="w-6 h-6 text-yellow-400" />
          ) : (
            <Moon className="w-6 h-6 text-blue-400" />
          )}
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-md hover:bg-blue-500/20 transition"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          className="absolute top-16 left-0 w-full 
                     bg-gradient-to-b from-[#050816]/95 via-[#0a192f]/95 to-[#1b2735]/95
                     backdrop-blur-md border-t border-blue-500/20
                     py-6 space-y-6 flex flex-col items-center md:hidden
                     shadow-lg shadow-blue-500/20"
        >
          {navLinks.map(({ to, label, icon }) => (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-2 text-lg transition-colors ${
                location.pathname === to
                  ? "text-blue-400"
                  : "text-gray-200 hover:text-blue-400"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              <span className="text-xl">{icon}</span>
              <span>{label}</span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
