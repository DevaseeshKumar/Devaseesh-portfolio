import { motion } from "framer-motion";
import Hero from "../pages/Hero";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";
import Social from "../pages/Social";
import Certifications from "../pages/Certifications"; // ✅ import
import Education from "./Education";
import SpaceBackground from "../components/SpaceBackground";
// import Hero3D from "../components/Hero3D";

const animationVariants = {
  fadeSlideUp: {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  fadeSlideLeft: {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.85, rotate: -3 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.5 },
    },
  },
};

const Home = () => {
  return (
    <>
    <SpaceBackground/>
      {/* Hero - always visible instantly */}
      <section id="hero"></section>
        <motion.div
          variants={animationVariants.fadeSlideUp}
          initial="hidden"
          animate="visible"
        >
        <Hero />
      </motion.div>
    </>
  );
};

export default Home;
