import { motion } from "framer-motion";
import Hero from "../pages/Hero";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";
import Social from "../pages/Social";
import Hero3D from "../components/Hero3D";

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
      {/* Hero - always visible instantly */}
      <motion.div
        variants={animationVariants.fadeSlideUp}
        initial="hidden"
        animate="visible"
      >
        <Hero />
      </motion.div>

      {/* About */}
      <motion.div
        variants={animationVariants.fadeSlideUp}
        initial="visible" // ensures no white space
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <About />
      </motion.div>

      {/* Projects */}
      <motion.div
        variants={animationVariants.fadeSlideLeft}
        initial="visible"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <Projects />
      </motion.div>

      {/* Skills */}
      <motion.div
        variants={animationVariants.scaleIn}
        initial="visible"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <Skills />
      </motion.div>

      {/* Social */}
      <motion.div
        variants={animationVariants.scaleIn}
        initial="visible"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <Social />
      </motion.div>

      {/* Contact */}
      <motion.div
        variants={animationVariants.fadeSlideUp}
        initial="visible"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <Contact />
      </motion.div>

      {/* Hero3D
      <motion.div
        variants={animationVariants.fadeSlideLeft}
        initial="visible"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <Hero3D />
      </motion.div> */}
    </>
  );
};

export default Home;
