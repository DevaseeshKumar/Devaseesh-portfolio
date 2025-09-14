import { motion } from "framer-motion";
import Hero from "../pages/Hero";
import About from "../pages/About";
import Education from "./Education";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Certifications from "../pages/Certifications";
import Social from "../pages/Social";
import Contact from "../pages/Contact";
import SpaceBackground from "../components/SpaceBackground";

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
      <SpaceBackground />

      {/* Hero */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 md:px-20">
        <motion.div
          variants={animationVariants.scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="w-full"
        >
          <Hero />
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 md:px-20">
        <motion.div
          variants={animationVariants.fadeSlideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="w-full"
        >
          <About />
        </motion.div>
      </section>

      {/* Education */}
      <section id="education" className="min-h-screen flex items-center justify-center px-6 md:px-20">
        <motion.div
          variants={animationVariants.fadeSlideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="w-full"
        >
          <Education />
        </motion.div>
      </section>

      {/* Skills */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-6 md:px-20">
        <motion.div
          variants={animationVariants.scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="w-full"
        >
          <Skills />
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6 md:px-20">
        <motion.div
          variants={animationVariants.fadeSlideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="w-full"
        >
          <Projects />
        </motion.div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="min-h-screen flex items-center justify-center px-6 md:px-20">
        <motion.div
          variants={animationVariants.fadeSlideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="w-full"
        >
          <Certifications />
        </motion.div>
      </section>

      {/* Social
      <section id="social" className="min-h-screen flex items-center justify-center px-6 md:px-20">
        <motion.div
          variants={animationVariants.scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="w-full"
        >
          <Social />
        </motion.div>
      </section> */}

      {/* Contact */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 md:px-20">
        <motion.div
          variants={animationVariants.fadeSlideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="w-full"
        >
          <Contact />
        </motion.div>
      </section>
    </>
  );
};

export default Home;
