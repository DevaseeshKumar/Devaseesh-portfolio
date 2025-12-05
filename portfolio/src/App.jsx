import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Certifications from "./pages/Certifications";
import Education from "./pages/Education";
import Social from "./pages/Social";

import useTracking from "./Tracking";
import VisitorDashboard from "./pages/VisitorDashboard";

function App() {
  useTracking();  // 🔥 Tracks ONLY 1 visit per tab open

  return (
    <Router>
      <Navbar />
      
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/social" element={<Social />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/visitor" element={<VisitorDashboard />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </Router>
  );
}

export default App;
