// components/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">MyPortfolio</Link>
        </h1>
        <ul className="flex space-x-6 font-medium">
          <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
          <li><Link to="/projects" className="hover:text-blue-600">Projects</Link></li>
          <li><Link to="/skills" className="hover:text-blue-600">Skills</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
          <li><Link to="/social" className="hover:text-blue-600">Social</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;