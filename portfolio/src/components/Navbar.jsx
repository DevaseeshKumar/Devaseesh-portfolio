import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
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
    { to: "about", label: "About" },
    { to: "education", label: "Education" },
    { to: "skills", label: "Skills" },
    { to: "projects", label: "Projects" },
    { to: "certifications", label: "Certifications" },
    { to: "social", label: "Social" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <nav className="w-full bg-white dark:bg-[#0a192f] text-gray-900 dark:text-white px-6 py-4 flex justify-between items-center shadow transition-colors duration-300 fixed top-0 z-50">
      {/* Logo */}
      <ScrollLink
        to="hero"
        smooth={true}
        duration={600}
        offset={-80}
        className="text-lg font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
      >
        My Portfolio
      </ScrollLink>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map(({ to, label }) => (
          <ScrollLink
            key={to}
            to={to}
            smooth={true}
            duration={600}
            offset={-80}
            className="hover:text-blue-500 transition cursor-pointer"
          >
            {label}
          </ScrollLink>
        ))}

        {/* Theme Toggle */}
        <button
          onClick={() => setIsDark((v) => !v)}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-2">
        <button
          onClick={() => setIsDark((v) => !v)}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-[#0a192f] shadow-md flex flex-col items-center py-4 space-y-4 md:hidden">
          {navLinks.map(({ to, label }) => (
            <ScrollLink
              key={to}
              to={to}
              smooth={true}
              duration={600}
              offset={-80}
              className="hover:text-blue-500 transition cursor-pointer text-lg"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </ScrollLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
