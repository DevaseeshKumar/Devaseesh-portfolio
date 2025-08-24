import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-[#0a192f]/70 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wide text-gray-900 dark:text-white">
          <Link 
            to="/" 
            className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
          >
            MyPortfolio
          </Link>
        </h1>

        {/* Nav Links */}
        <ul className="flex space-x-10 font-medium text-gray-700 dark:text-gray-300">
          {["about", "projects", "skills", "contact", "social"].map((item) => (
            <li key={item} className="relative group">
              <Link
                to={`/${item}`}
                className="transition duration-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
              {/* Underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              {/* Glow effect on hover */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-30 blur-md bg-blue-600 dark:bg-blue-400 transition duration-300 rounded"></span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
