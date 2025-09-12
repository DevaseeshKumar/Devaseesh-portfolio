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
    { to: "projects", label: "Projects" },
    { to: "skills", label: "Skills" },
    { to: "certifications", label: "Certifications" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <nav
      className="w-full fixed top-0 z-50 px-6 py-4 flex justify-between items-center
                 bg-gradient-to-r from-[#050816]/90 via-[#0a192f]/80 to-[#1b2735]/90
                 backdrop-blur-md border-b border-blue-500/20 shadow-lg shadow-blue-500/20
                 transition-all duration-500"
    >
      {/* Logo */}
      <ScrollLink
        to="hero"
        smooth={true}
        duration={600}
        offset={-80}
        className="text-lg md:text-xl font-extrabold text-blue-400
                   tracking-wide hover:text-blue-300 transition-colors cursor-pointer"
      >
        My Portfolio
      </ScrollLink>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map(({ to, label }) => (
          <ScrollLink
            key={to}
            to={to}
            smooth={true}
            duration={600}
            offset={-80}
            className="relative text-gray-200 hover:text-blue-400 
                       transition-colors cursor-pointer text-lg
                       after:content-[''] after:absolute after:w-0 after:h-[2px]
                       after:left-0 after:bottom-[-4px] after:bg-blue-400
                       after:transition-all hover:after:w-full"
          >
            {label}
          </ScrollLink>
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
          {navLinks.map(({ to, label }) => (
            <ScrollLink
              key={to}
              to={to}
              smooth={true}
              duration={600}
              offset={-80}
              className="text-gray-200 hover:text-blue-400 transition-colors cursor-pointer text-lg"
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
